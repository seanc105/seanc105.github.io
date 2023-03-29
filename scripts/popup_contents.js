function get_popup_header(name) {
    return `<h5>`+name+`</h5>`;
}

function get_type(data) {
    var classification_type = database.ClassificationTypes[data.ClassificationTypeId].Label;
    return `<p><span class="bold-font">Type:</span> <span style="color: #0F0;">` + classification_type + `</p>`;
}

function get_location_details(data) {
    var from_loc_details = data.FromLocationDescription;
    var from_loc_src = data.FromLocationSourceId;
    // TODO: Link to sources
    // TODO: Fix links in details
    return `<p><span class="bold-font">Location:</span> <span style="color: #0FF;">` + from_loc_details + ` [` + from_loc_src + `]</p>`;
}

function get_information(data) {
    // TODO: Link to sources
    // TODO: Fix links in information
    var notes = data.Notes || [];
    var all_notes = "";
    notes.forEach(note => {
        if (!note.Inconsistent) {
            all_notes += `<p style="color: #BBB;"> - ` + note.Description + ` [` + note.SourceId +`]</p>`;
        }
    });
    if (all_notes == "") {
        all_notes = `<p style="color: #BBB;">N/A</p>`;
    }
    return `
    <br/>
    <p><span class="bold-font underline-font">Information</span></p>`
    + all_notes;
}

function get_inconsistent_facts(data) {
    // TODO: Link to sources
    // TODO: Fix links in facts
    var notes = data.Notes || [];
    var all_notes = "";
    notes.forEach(note => {
        if (note.Inconsistent) {
            all_notes += `<p style="color: #F00;"> - ` + note.Description + ` [` + note.SourceId +`]</p>`;
        }
    });
    if (all_notes == "") {
        all_notes = `<p style="color: #F00;">N/A</p>`;
    }
    return `
    <br/>
    <p><span class="bold-font underline-font">Inconsistent Facts</span></p>`
    + all_notes;
}

function get_places_of_interest(data) {
    // TODO: Link to sources
    // TODO: Fix links in places
    var all_places = "";

    Object.keys(database.Locations).forEach(location => {
        if (database.Locations[location].MapLocationId == data.Id) {
            all_places += `<p style="color: #BBB;"> - ` + location +`</p>`;
        }
    });

    if (all_places == "") {
        all_places = `<p style="color: #BBB;">N/A</p>`;
    }
    return `
    <br/>
    <p><span class="bold-font underline-font">Places of Interest</span></p>`
    + all_places;
}

function get_been_here(data) {
    // TODO: Link to sources
    // TODO: Fix links in who
    var all_people = "";

    Object.keys(database.Characters).forEach(character => {
        for (var i in database.Characters[character].TraveledLocations) {
            if (database.Characters[character].TraveledLocations[i].MapLocationId == data.Id) {
                all_people += `<p style="color: #BBB;"> - ` + character +`</p>`;
                break;
            }
        };
    });

    if (all_people == "") {
        all_people = `<p style="color: #BBB;">N/A</p>`;
    }
    return `
    <br/>
    <p><span class="bold-font underline-font">Who's been here</span></p>`
    + all_people;
}

function get_first_seen_here(data) {
    // TODO: Link to sources
    // TODO: Fix links in who
    var all_people = "";

    for (var character in database.Characters) {
        if (database.Characters[character].TraveledLocations[0].MapLocationId == data.Id) {
            all_people += `<p style="color: #BBB;"> - ` + character +`</p>`;
        }
    };

    if (all_people == "") {
        all_people = `<p style="color: #BBB;">N/A</p>`;
    }
    return `
    <br/>
    <p><span class="bold-font underline-font">Who's from here or was first seen here</span></p>`
    + all_people;
}

function custom_popup(name, data, things_to_display) {
    return `
    <div class="diablo-card">
        <div class="diablo-card-header d-flex align-items-center justify-content-center">
            `+get_popup_header(name)+`
        </div>
        <div class="diablo-card-body-contents overflow-scroll">` +
            (things_to_display.includes('type') ? get_type(data) : '') +
            (things_to_display.includes('location') ? get_location_details(data) : '') +
            (things_to_display.includes('information') ? get_information(data) : '') +
            (things_to_display.includes('inconsistent_facts') ? get_inconsistent_facts(data) : '') + 
            (things_to_display.includes('places_of_interest') ? get_places_of_interest(data) : '') + 
            (things_to_display.includes('been_here') ? get_been_here(data) : '') + 
            (things_to_display.includes('first_seen_here') ? get_first_seen_here(data) : '') + 
       `</div>
    </div>`;
}

function location_tooltip(location_name) {
    return '<h6>'+location_name+'<h6>';
}