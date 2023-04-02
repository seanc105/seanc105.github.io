const link_regex = RegExp(/\{\{\{([^:]*):([^:]*):([^\}]*)\}\}\}/g)
const popover_display_items = {
    "CalendarItems": ['type', 'comes_after', 'comes_before', 'information', 'inconsistent_facts'],
    "Characters": ['character_path', 'class', 'alt_names', 'deceased', 'birth_year', 'cause_of_death', 'information', 'inconsistent_facts', 'places_visited'],
    "Creatures": ['type', 'parent_species', 'information', 'inconsistent_facts'],
    "Locations": ['type', 'map_location', 'information', 'inconsistent_facts'],
    "MapLocations": ['type', 'location', 'information', 'inconsistent_facts', 'places_of_interest', 'been_here', 'first_seen_here'],
    "TimelineEvents": ['year', 'previous_event', 'event_name', 'information', 'inconsistent_facts'],
    "WorldFacts": ['type', 'information', 'inconsistent_facts'],
    "WorldItems": ['type', 'from_location', 'information', 'inconsistent_facts']
}

var popover_stack = [];

function get_popup_header(name) {
    return `<h5>`+name+`</h5>`;
}

function add_popover_stack(type, item, title=null) {
    item = item.replaceAll('__', '"').replaceAll("_", "'")
    if (title != null) {
        title = title.replaceAll('__', '"').replaceAll("_", "'");
    }
    var popup = document.getElementsByClassName('leaflet-popup-content')[0];
    // Store current popup content on the stack
    popover_stack.push(popup.cloneNode(true));
    var data = database[type][item];
    var new_popup_body = custom_popup(title || item, data, popover_display_items[type]);
    popup.innerHTML = new_popup_body;
}

function pop_popover_stack() {
    var current_popup = document.getElementsByClassName('leaflet-popup-content')[0];
    var prev_popup = popover_stack.pop();
    current_popup.innerHTML = prev_popup.innerHTML;
}

function parse_links_in_text(text) {
    var matches = [...text.matchAll(link_regex)];
    updated_text = text;
    for (var i in matches) {
        var match = matches[i]
        if (match.length != 4) {
            console.error("Bad regex match found for '" + text + "' with " + matches[i]);
            continue;
        }
        var type = match[1]
        var item = match[2]
        var output_text = match[3]

        updated_text = updated_text.replace(
            match[0], // The {{{ type:item:output_text }}}
            `<button class="diablo-card-link-button" 
                     onmouseup='add_popover_stack("`+type+`", "`+item.replaceAll("'", "_")+`")'>`
                     +output_text+
            `</button>`
        )
    }
    return updated_text;
}

function set_character_link(text) {
    return `<button class="diablo-card-link-button" 
        onmouseup='add_popover_stack("Characters", "`+text.replaceAll("'", "_").replaceAll('"', '__')+`")'>`
        +text+
    `</button>`;
}

function set_location_link(text) {
    return `<button class="diablo-card-link-button" 
        onmouseup='add_popover_stack("Locations", "`+text.replaceAll("'", "_").replaceAll('"', '__')+`")'>`
        +text+
    `</button>`;
}

function set_source_link(text) {
    // Format: [<source_id>]
    if (text <= 0) {
        return "";
    }
    var source_text = database.Sources[text].Name;
    return `
    <span class="diablo-card-tooltip underline-text"> [`+ text +`]
        <span class="diablo-card-tooltip-text">` + source_text + `</span>
    </span>`;
}

function get_character_path(name) {
    return `<button class="diablo-card-link-button diablo-path-button" 
        onmouseup='draw_character_path("`+name.replaceAll("'", "_").replaceAll('"', '__')+`")'>
        [See Character Path!]
    </button><br><br>`;
}

function get_type(data) {
    var classification_type = database.ClassificationTypes[data.ClassificationTypeId].Label;
    return `<p><span class="bold-text">Type:</span> <span style="color: #0F0;">` + classification_type + `</p>`;
}

function get_character_class(data) {
    // Really only for characters, so safe to assume it's for Characters
    var class_name = database.CharacterClasses[data.CharacterClassId].Label
    return `<p><span class="bold-text">Class:</span> <span style="color: #0F0;">` + class_name + `</p>`;
}

function get_character_alt_names(data) {
    // Really only for characters, so safe to assume it's for Characters
    var alt_names = "N/A";
    if (data.AltNames) {
        alt_names = data.AltNames;
    }
    
    return `<p><span class="bold-text">Alternative Names:</span> <span style="color: #0F0;">` + alt_names + `</p>`;
}

function get_deceased(data) {
    var deceased = "Unknown";
    if (data.Deceased != null) {
        deceased = data.Deceased ? "Yes" : "No";
    }
    
    return `<p><span class="bold-text">Deceased:</span> <span style="color: #0FF;">` + deceased + `</p>`;
}

function get_birth_year(data) {
    // Really only for characters, so safe to assume it's for Characters
    var birth_year = "Unknown or N/A";
    if (data.BirthYear != null) {
        birth_year = data.BirthYear;
    }
    
    return `<p><span class="bold-text">Birth Year:</span> <span style="color: #0FF;">` + birth_year + `</p>`;
}

function get_cause_of_death(data) {
    return `<p><span class="bold-text">Cause of Death:</span> <span style="color: #0FF;">` + (parse_links_in_text(data.CauseOfDeath || "N/A")) + `</p>`;
}

function get_parent_species(data) {
    // Really only for creatures, so safe to assume it's for Creatures
    var parent_species = "N/A";
    if (data.ParentSpeciesId != 0) {
        for (var i in database.Creatures) {
            if (database.Creatures[i].Id == data.ParentSpeciesId) {
                parent_species = `<button class="diablo-card-link-button" 
                    onmouseup='add_popover_stack("Creatures", "`+i.replaceAll("'", "_")+`")'>`
                    +i+
                `</button>`;
                break;
            }
        }
        
    }
    return `<p><span class="bold-text">Parent Species:</span> <span style="color: #0FF;">` + parent_species + `</p>`;
}

function get_comes_after(data) {
    var prev = data.Number - 1;
    var label = "N/A";
    // Really only for timeline stuff, so safe to assume it's for CalendarItems
    if (database.CalendarItems[prev]) {
        label = database.CalendarItems[prev].Name;
    }
    
    return `<p><span class="bold-text">Comes after:</span> <span style="color: #0FF;">` + label + `</p>`;
}

function get_comes_before(data) {
    var next = data.Number + 1;
    var label = "N/A";
    // Really only for timeline stuff, so safe to assume it's for CalendarItems
    if (database.CalendarItems[next]) {
        label = database.CalendarItems[next].Name;
    }
    
    return `<p><span class="bold-text">Comes after:</span> <span style="color: #0FF;">` + label + `</p>`;
}

function get_map_location(data) {
    // Really only for locations, so safe to assume it's for Locations
    var map_location = "N/A";
    if (data.MapLocationId != 0) {
        for (var i in database.MapLocations) {
            if (database.MapLocations[i].Id == data.MapLocationId) {
                map_location = i;
                break;
            }
        }
    }
    return `<p><span class="bold-text">Map Location:</span> <span style="color: #0FF;">` + map_location + `</p>`;
}

function get_previous_event(data) {
    var label = "N/A";
    // Really only for timeline stuff, so safe to assume it's for TimelineEvents
    if (data.AfterEventId > 0 && database.TimelineEvents[data.AfterEventId]) {
        label = parse_links_in_text(database.TimelineEvents[data.AfterEventId].EventName);
    }
    
    return `<p><span class="bold-text">Previous Event:</span> <span style="color: #0F0;">` + label + `</p>`;
}

function get_event_name(data) {
    return `<p><span class="bold-text">Event Name:</span> <span style="color: #0F0;">` + parse_links_in_text(data.EventName) + set_source_link(data.EventSourceId) + `</p>`;
}

function get_year(data) {
    return `<p><span class="bold-text">Year:</span> <span style="color: #0F0;">` + data.Year + `</p>`;
}

function get_location_details(data) {
    var from_loc_details = data.FromLocationDescription;
    var from_loc_src = data.FromLocationSourceId;
    return `<p><span class="bold-text">Location:</span> <span style="color: #0FF;">` + parse_links_in_text(from_loc_details) + set_source_link(from_loc_src) + `</p>`;
}

function get_from_location(data) {
    return `<p><span class="bold-text">From Location:</span> <span style="color: #0F0;">` + data.FromLocation + `</p>`;
}

function get_information(data) {
    var notes = data.Notes || [];
    var all_notes = "";
    notes.forEach(note => {
        if (!note.Inconsistent) {
            all_notes += `<p style="color: #BBB;"> - ` + parse_links_in_text(note.Description) + set_source_link(note.SourceId) +`</p>`;
        }
    });
    if (all_notes == "") {
        all_notes = `<p style="color: #BBB;">N/A</p>`;
    }
    return `
    <br/>
    <p><span class="bold-text underline-text">Information</span></p>`
    + all_notes;
}

function get_inconsistent_facts(data) {
    var notes = data.Notes || [];
    var all_notes = "";
    notes.forEach(note => {
        if (note.Inconsistent) {
            all_notes += `<p style="color: #F00;"> - ` + parse_links_in_text(note.Description) + set_source_link(note.SourceId) +`</p>`;
        }
    });
    if (all_notes == "") {
        all_notes = `<p style="color: #F00;">N/A</p>`;
    }
    return `
    <br/>
    <p><span class="bold-text underline-text">Inconsistent Facts</span></p>`
    + all_notes;
}

function get_places_of_interest(data) {
    var all_places = "";

    Object.keys(database.Locations).forEach(location => {
        if (database.Locations[location].MapLocationId == data.Id) {
            all_places += `<p style="color: #BBB;"> - ` + set_location_link(location) +`</p>`;
        }
    });

    if (all_places == "") {
        all_places = `<p style="color: #BBB;">N/A</p>`;
    }
    return `
    <br/>
    <p><span class="bold-text underline-text">Places of Interest</span></p>`
    + all_places;
}

function get_been_here(data) {
    var all_people = "";

    Object.keys(database.Characters).map(character => {
        for (var i in database.Characters[character].TraveledLocations) {
            if (database.Characters[character].TraveledLocations[i].MapLocationId == data.Id) {
                all_people += `<p style="color: #BBB;"> - ` + set_character_link(character) +`</p>`;
                break;
            }
        };
    });

    if (all_people == "") {
        all_people = `<p style="color: #BBB;">N/A</p>`;
    }
    return `
    <br/>
    <p><span class="bold-text underline-text">Who's been here</span></p>`
    + all_people;
}

function get_first_seen_here(data) {
    var all_people = "";

    for (var character in database.Characters) {
        if (database.Characters[character].TraveledLocations[0].MapLocationId == data.Id) {
            all_people += `<p style="color: #BBB;"> - ` + set_character_link(character) +`</p>`;
        }
    };

    if (all_people == "") {
        all_people = `<p style="color: #BBB;">N/A</p>`;
    }
    return `
    <br/>
    <p><span class="bold-text underline-text">Who's from here or was first seen here</span></p>`
    + all_people;
}

function custom_popup(name, data, things_to_display) {
    return `
    <div class="diablo-card">
        <div class="container">
            <div class="row align-items-center diablo-card-header">
            ` + (popover_stack.length > 0 ? `
                <div class="col col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <button class="diablo-card-go-back-button d-flex align-items-center" onmouseup="pop_popover_stack()">←</button>                    
                </div>
                <div class="col col-9 col-xl-9 col-lg-9 col-md-9 col-sm-9">`+get_popup_header(name)+`</div>` : `
                <div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">`+get_popup_header(name)+`</div>`) + `
            </div>
        </div>
        <div class="diablo-card-body-contents">` +
            (things_to_display.includes('character_path') ? get_character_path(name) : '') +
            (things_to_display.includes('type') ? get_type(data) : '') +
            (things_to_display.includes('class') ? get_character_class(data) : '') +
            (things_to_display.includes('alt_names') ? get_character_alt_names(data) : '') +
            (things_to_display.includes('deceased') ? get_deceased(data) : '') +
            (things_to_display.includes('birth_year') ? get_birth_year(data) : '') +
            (things_to_display.includes('cause_of_death') ? get_cause_of_death(data) : '') +
            (things_to_display.includes('parent_species') ? get_parent_species(data) : '') +
            (things_to_display.includes('comes_after') ? get_comes_after(data) : '') +
            (things_to_display.includes('comes_before') ? get_comes_before(data) : '') +
            (things_to_display.includes('map_location') ? get_map_location(data) : '') +
            (things_to_display.includes('location') ? get_location_details(data) : '') +
            (things_to_display.includes('previous_event') ? get_previous_event(data) : '') +
            (things_to_display.includes('event_name') ? get_event_name(data) : '') +
            (things_to_display.includes('from_location') ? get_from_location(data) : '') +
            (things_to_display.includes('information') ? get_information(data) : '') +
            (things_to_display.includes('inconsistent_facts') ? get_inconsistent_facts(data) : '') + 
            (things_to_display.includes('places_of_interest') ? get_places_of_interest(data) : '') + 
            (things_to_display.includes('been_here') ? get_been_here(data) : '') + 
            (things_to_display.includes('first_seen_here') ? get_first_seen_here(data) : '') + 
       `</div>
    </div>`;
}

function draw_list(title, db, key) {
    var database_table = database[db];
    var items = [];
    function get_button(text, item_link_key) {
        item_link_key = item_link_key.toString().replaceAll("'", "_").replaceAll('"', "__")
        text_link = text.toString().replaceAll("'", "_").replaceAll('"', "__")        
        return `
        <button class="encyclopedia-menu-button" onmouseup="add_popover_stack('`
          +db+`', '`+item_link_key+`', '`+text_link+`')">`+text+`</button>`;
    }
    var initial_items = []
    if (key) {
        if (Number.isInteger(database_table["1"][key])) {
            initial_items = Object.keys(database_table).sort(function(a,b) { return database_table[a][key]-database_table[b][key]; });
        } else {
            initial_items = Object.keys(database_table).sort();
        }
        initial_items.forEach(item => {
            items.push(get_button(database_table[item][key], item));
        });
    } else {
        initial_items = Object.keys(database_table).sort();
        initial_items.forEach(item => {
            items.push(get_button(item, item));
        });
    }
    return `
    <div class="diablo-card">
        <div class="container">
            <div class="row align-items-center diablo-card-header">
            ` + (popover_stack.length > 0 ? `
                <div class="col col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <button class="diablo-card-go-back-button d-flex align-items-center" onmouseup="pop_popover_stack()">←</button>                    
                </div>
                <div class="col col-9 col-xl-9 col-lg-9 col-md-9 col-sm-9"><h5>`+title+`</h5></div>` : `
                <div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"><h5>`+title+`</h5></div>`) + `
            </div>
        </div>
        <div class="diablo-card-body-contents">` +
            items.join('') +
       `</div>
    </div>`;
}

function draw_classes() {
    return `
    <div class="diablo-card">
        <div class="container">
            <div class="row align-items-center diablo-card-header">
                <div class="col col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <button class="diablo-card-go-back-button d-flex align-items-center" onmouseup="pop_popover_stack()">←</button>                    
                </div>
                <div class="col col-9 col-xl-9 col-lg-9 col-md-9 col-sm-9"><h5>Classes</h5></div>
            </div>
        </div>
        <div class="diablo-card-body-contents information-only-menu">
            <p class="underline-text" style="color: #0F0">NOTE</p>
            <p>This is simply a reference list to the classes defined in characters. To view information about ones that have details, go to the World Facts menu.</p>
            ` + Object.values(database.CharacterClasses).map(val => {return `<p>`+val.Label+`</p>`; }).join('') + `
        </div>
    </div>`;
}

function draw_sources() {
    return `
    <div class="diablo-card">
        <div class="container">
            <div class="row align-items-center diablo-card-header">
                <div class="col col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <button class="diablo-card-go-back-button d-flex align-items-center" onmouseup="pop_popover_stack()">←</button>                    
                </div>
                <div class="col col-9 col-xl-9 col-lg-9 col-md-9 col-sm-9"><h5>Sources</h5></div>
            </div>
        </div>
        <div class="diablo-card-body-contents information-only-menu">
            <p class="underline-text" style="color: #0F0">NOTE</p>
            <p>This is simply a reference list to the sources used on this app. You can see these by their number in brackets on information.</p>
            ` + Object.values(database.Sources).map(val => {return `<p>`+val.Name+`</p>`; }).join('') + `
        </div>
    </div>`;
}

function draw_event_timelines() {
    var events_by_year = {}
    var years = []
    var output = ""
    for (var eventId in database.TimelineEvents) {
        var year = database.TimelineEvents[eventId].Year;
        if (events_by_year[year]) {
            events_by_year[year].push(database.TimelineEvents[eventId]);
        } else {
            events_by_year[year] = [database.TimelineEvents[eventId]];
            years.push(year);
        }
    }
    years.sort((a,b) => a - b);
    
    years.forEach(year => {
        var events = events_by_year[year];
        events.sort((a,b) => a.AfterEventId - b.AfterEventId);
        output += `<p class="underline-text" style="color: #FFF">Year: `+year+`</p>`;
        events.forEach(event => {
            output += `
            <p style="color: #BFCEC9">`+parse_links_in_text(event.EventName)+set_source_link(event.EventSourceId)+`</p>
            `;
            if (event.Notes) {
                output += `<ul>`
                event.Notes.forEach(note => {
                    output += `<li ` +
                        (note.Inconsistent ? `style="color: #F00">` : `style="color: khaki">`) +
                        parse_links_in_text(note.Description) + 
                        set_source_link(note.SourceId) +
                    `</li>`;
                });
                output += `</ul>`;
            }
        });
    });

    return `
    <div class="diablo-card">
        <div class="container">
            <div class="row align-items-center diablo-card-header">
                <div class="col col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <button class="diablo-card-go-back-button d-flex align-items-center" onmouseup="pop_popover_stack()">←</button>
                </div>
                <div class="col col-9 col-xl-9 col-lg-9 col-md-9 col-sm-9"><h5>Timeline Events</h5></div>
            </div>
        </div>
        <div class="diablo-card-body-contents information-only-menu">
            <p style="color: #0F0">This is simply a better visual of the full timeline vs. having buttons. The events within each year are in order of when they occured. Inconsistences are marked in <span style="color: #F00;">RED</span></p>
            <br>
            `+output+`
        </div>
    </div>`;
}

function draw_encyclopedia_category(title, db, key) {
    var popup = document.getElementsByClassName('leaflet-popup-content')[0];
    // Store current popup content on the stack
    popover_stack.push(popup.cloneNode(true));
    var new_popup_body = ""
    if (title == "Classes") {
        new_popup_body = draw_classes();
    } else if (title == "Sources") {
        new_popup_body = draw_sources();
    } else if (title == "Timeline Events") {
        new_popup_body = draw_event_timelines();
    } else {
        new_popup_body = draw_list(title, db, key == "undefined" ? null : key);
    }
    popup.innerHTML = new_popup_body;
}

function encyclopedia_popup() {
    categories = {
        "Calendar": {db: "CalendarItems", key: "Name"},
        "Characters": {db: "Characters"},
        "Classes": "",
        "Creatures": {db: "Creatures"},
        "Etc. Things": {db: "WorldFacts"},
        "Locations": {db: "Locations"},
        "Map Locations": {db: "MapLocations"},
        "Sources": "",
        "Timeline Events": "",
        "World Items": {db: "WorldItems"}
    }
    return `
    <div class="diablo-card">
        <div class="container">
            <div class="row align-items-center diablo-card-header">
                <div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"><h5>Encyclopedia</h5></div>
            </div>
        </div>
        <div class="diablo-card-body-contents">` +
            Object.keys(categories).map(category => {
                return `<button class="encyclopedia-menu-button" onmouseup="draw_encyclopedia_category('`+category+`', '`+categories[category].db+`', '`+categories[category].key+`')">`+category+`</button>`
            }).join('') +
       `</div>
    </div>`;
}

function about_me_popup() {
    return `
    <div class="diablo-card">
        <div class="container">
            <div class="row align-items-center diablo-card-header">
                <div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"><h5>About Me</h5></div>
            </div>
        </div>
        <div class="diablo-card-body-contents about-me">
            <p class="underline-text" style="color: #0F0">About Me</p>
            <p>Who am I? Well, I'm a major Diablo fan - if that wasn't obvious already. I have actually been playing Diablo since the first game came out. 
                My friend and I would stay up real late at night playing Diablo I on Playstation I. We didn't have a memory card, and playing the game on a 
                Playstation without a memory card is a guaranteed permanent game over... But yes, good times.</p>
            <p>After Diablo I, I played Diablo II for many years straight. I basically became obsessed with the game to the point where I was reading the 
                books by Richard A Knaak in high school. I found the lore in the books very interesting and then started to focus around the game lore a lot more 
                heavily. Since then, I've basically fallen in love with the lore of the entire universe that Diablo takes place in.</p>
            <p>Then Diablo III came out and I started up again. At that point, I actually had a huge collection of Diablo-related stuff. Unfortunately, 
                I ended up needing some finances and sold my entire collection to a friend (who I have not spoken to in many years - I don't know if he still 
                has the collection).</p>
            <p>I played some Diablo III shortly after its release, but it wasn't quite my cup of tea. The lore and many inconsistencies that were left in place (many call 
                them 'retconned') actually grew me distant from the Diablo Universe for a long period of time. But 
                then Diablo IV was announced and sparked my interest once more. Being in a much more financially stable place, I decided to start up my collection 
                again and re-read all of the lore in the Diablo Universe. This time, I decided I wanted to record all my findings and readings, and then create 
                a large map that people could use to reference locations that weren't on the map, places characters traveled, etc.</p>
            <p>And that, is what led to this application you see before you now.</p>
            <br>
            <p class="underline-text" style="color: #0F0">About this App</p>
            <p>The point of this app, as mentioned above, is to introduce a visual aspect to the game world. It's also made to show locations that the existing 
                map doesn't have. The next two key parts to this app is to show where characters throughout the lore history have traveled (or at least places they're 
                mentioned/known to have traveled).</p>
            <p>You may notice that several locations don't match perfectly with some of the existing maps, perhaps the latest. This is either because 1.) The maps 
                being released have been inconsistent through their history (Westmarch, for example, has moved several times) or 2.) The descriptions in the original 
                games/books were different than later on.</p>
            <p>My thought process on how I decided to draw out this map:</p>
            <ol>
                <li>Pre-Diablo III lore took precedence at all times, unless there were existing plot holes.</li>
                <li>If there were plot holes in several locations, I took what made most logical sense.</li>
                <li>I left notes in characters, locations, etc. with a section called 'Inconsistencies'. As mentioned above, some may call these 'retconned'. 
                    I'm not changing these labels.</li>
            </ol>
            <p>Additional notes:</p>
            <ol>
                <li>Everything presented here is prior to Diablo Immortal at this time. There are a few mentions of Diablo IV things here and there, but not many.</li>
                <li>My plan is to update this map with locations and lore/information from Diablo Immortal and Diablo IV in the future.</li>
                <li>I apparently love typos. You will probably find a few.</li>
                <li>If you find a broken link, please report it in the issues. The app you see presented before you is a migration from the Unity app, and many
                    links broke when doing that. I expect I missed many that are still broken.</li>
            </ol>
            <p>Finally:</p>
            <ul>
                <li>I do not work for Blizzard</li>
                <li>The Diablo Map is artwork owned by Blizzard, not me</li>
                <li>Modals contain artwork owned by Blizzard, not me</li>
            </ul>
        </div>
    </div>`;
}

function location_tooltip(location_name) {
    return '<h6>'+location_name+'<h6>';
}