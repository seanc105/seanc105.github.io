var types = ['town', 'mountain', 'tomb', 'river', 'castle', 'monastery', 'unknown'];

var markers = {
    other_landscape_markers: [],
    region_markers: []
}

const icons = {}

function create_icons() {
    types.forEach(type => {
        icons[type] = {
            small: L.icon({
                iconUrl: 'images/icons/'+type+'.png',
                iconSize: new L.Point(16, 16),
            }),
            medium: L.icon({
                iconUrl: 'images/icons/'+type+'.png',
                iconSize: new L.Point(24, 24),
            }),
            large: L.icon({
                iconUrl: 'images/icons/'+type+'.png',
                iconSize: new L.Point(32, 32),
            })
        }
    });
    // Custom Tristram icon
    icons['tristram_icon'] = {
        small: L.icon({
            iconUrl: 'images/icons/town.png',
            iconSize: new L.Point(16, 16),
            className: 'tristram-icon'
        }),
        medium: L.icon({
            iconUrl: 'images/icons/town.png',
            iconSize: new L.Point(24, 24),
            className: 'tristram-icon'
        }),
        large: L.icon({
            iconUrl: 'images/icons/town.png',
            iconSize: new L.Point(32, 32),
            className: 'tristram-icon'
        })
    }
}

function update_searchbox(map, searchbox) {
    var db_keys = {
        "Calendar": {db: "CalendarItems", reference_name_key: "Name"},
        "Character": {db: "Characters"},
        "Creature": {db: "Creatures"},
        "Location": {db: "Locations"},
        "Map": {db: "MapLocations"},
        "Event": {db: "TimelineEvents", reference_name_key: "Year"},
        "Fact": {db: "WorldFacts"},
        "Item": {db: "WorldItems"}
    }
    var search_results = []
    for (var key in db_keys) {
        search_results.push(...Object.keys(database[db_keys[key].db])
                      .map(item => { 
                        if (key == "Class") {
                            console.log(key);
                        }
                         return key + ": " + (
                            db_keys[key].reference_name_key ? 
                                database[db_keys[key].db][item][db_keys[key].reference_name_key] 
                                : item
                            ) 
                      }));
    }

    var fuse = new Fuse(search_results, {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        minMatchCharLength: 1
    });

    searchbox.onInput("keyup", function (e) {
        if (e.keyCode == 13) {
            search(fuse);
        } else {
            var value = searchbox.getValue();
            if (value != "") {
                var results = fuse.search(value);
                searchbox.setItems(results.map(res => res.item).slice(0, 5));
            } else {
                searchbox.clearItems();
            }
        }
    });

    function search() {
        var value = searchbox.getValue();
        if (value != "") {
            var results = fuse.search(value);
            var first_result = results[0].item.replace(/^Map: /,'');
            if (database.MapLocations[first_result]) {
                var likely_item = database.MapLocations[first_result];
                var respective_marker;
                var done = false;
                for (var marker_group in markers) {
                    for (var i in markers[marker_group]) {
                        if (markers[marker_group][i].options.title == first_result) {
                            respective_marker = markers[marker_group][i];
                            done = true;
                            break;
                        }
                    }
                    if (done) {
                        break;
                    }
                }
                respective_marker.toggleTooltip();
                map.flyTo([likely_item.Latitude, likely_item.Longitude], 4);
            } else {
                var result = first_result.split(":");
                var respective_db = db_keys[result[0]].db
                var respective_item = result[1].trim()
                var center = map.getCenter();
                L.popup().setContent(custom_popup(respective_item, database[respective_db][respective_item], popover_display_items[respective_db])).setLatLng([center.lat-15, center.lng]).openOn(map);
            }
        }
    
        setTimeout(function () {
            searchbox.hide();
            searchbox.clear();
        }, 600);
    }
    
    searchbox.onButton("click", search);
}

function change_map_with_timeline() {
    // TODO: Show only cities/etc. that are within the given time, also show 'unknown' if applicable
}

function draw_timeline(map, L) {
    // timeline_events = ["Everything"];

    // L.control.timelineSlider({
    //     timelineItems: ["Everything"],
    //     extraChangeMapParams: {greeting: "Hello World!"}, 
    //     changeMap: changeMapFunction })
    // .addTo(map);
}

function draw_encyclopedia(map, L) {
    L.easyButton('fa-book side-map-button', function(btn, mymap){
        mymap.closePopup();
        var center = mymap.getCenter();
        L.popup().setContent(encyclopedia_popup()).setLatLng([center.lat-15, center.lng]).openOn(mymap);
    }, 'Encyclopedia').addTo(map);
}

function draw_about_me_button(map, L) {
    L.easyButton('fa-address-card side-map-button', function(btn, mymap){
        mymap.closePopup();
        var center = mymap.getCenter();
        L.popup().setContent(about_me_popup()).setLatLng([center.lat-15, center.lng]).openOn(mymap);
    }, 'About Me').addTo(map);
}

function draw_map(map, L) {
    create_icons();
    types.forEach(type => { markers[type+'_markers'] = [] });

    tooltipLayer = L.layerGroup();

    for (var location in database.MapLocations) {
        data = database.MapLocations[location];
        location_type = database.ClassificationTypes[data.ClassificationTypeId].Label;
        var type = null;
        var icon = null

        if (['Village', 'City', 'Town', 'Temple/Cathedral', 'Ruins', 'Port' ].includes(location_type)) {
            type = 'town_markers';
            // Tristram needs to look special :)
            if (location == 'Tristram') {
                icon = icons.tristram_icon.small;
            } else {
                type = 'town_markers';
                icon = icons.town.small;
            }
        } else if (['Tomb'].includes(location_type)) {
            type = 'tomb_markers';
            icon = icons.tomb.small;
        } else if (['River'].includes(location_type)) {
            type = 'river_markers';
            icon = icons.river.small;
        } else if (['Mountain', 'Island'].includes(location_type)) {
            type = 'mountain_markers';
            icon = icons.mountain.small;
        } else if (['Citadel', 'Fortress', 'Keep'].includes(location_type)) {
            type = 'castle_markers';
            icon = icons.castle.small;
        } else if (['Temple/Cathedral', 'Church', 'Monastery'].includes(location_type)) {
            type = 'monastery_markers';
            icon = icons.monastery.small;
        } else if (['Unknown'].includes(location_type)) {
            type = 'unknown_markers';
            icon = icons.unknown.small;
        } else if (['Region', 'Ocean'].includes(location_type)) {
            type = 'region_markers';
            icon = new L.DivIcon({
                className: 'small-diablo-region-font diablo-region-font',
                html: `<span>`+location+`</span>`
            });
        } else if (['Jungle', 'Hill(s)', 'Forest', 'Island (Region)', 'Mountain Range', 'Swamp/Marsh', 'Lake', 'Subregion'].includes(location_type)) {
            type = 'other_landscape_markers';
            icon = new L.DivIcon({
                className: 'small-diablo-font diablo-sub-region-font',
                html: `<span>`+location+`</span>`
            });
        } else {
            type = 'mountain_markers';
            icon = icons.mountain.small;
        }

        location_marker = L.marker([data.Latitude, data.Longitude], {title: location})
                           .bindPopup(custom_popup(location, data, popover_display_items.MapLocations), {autoClose: false});
        if (type != 'other_landscape_markers' && type != 'region_markers') {
            location_marker.bindTooltip(location_tooltip(location), {direction: 'top', riseOnHover: true});
        }
        // L.tooltip({direction: 'top', permanent: true}).setContent(location_popup(location, data)).setLatLng([data.Latitude, data.Longitude]).addTo(tooltipLayer);
        if (icon) {
            location_marker.setIcon(icon);
        }
        markers[type].push(location_marker)
    }

    var overlays = {
        // "Toggle all tooltips": tooltipLayer.addTo(map),
        "Cities and towns": L.layerGroup(markers.town_markers).addTo(map),
        "Mountains": L.layerGroup(markers.mountain_markers).addTo(map),
        "Rivers": L.layerGroup(markers.river_markers).addTo(map),
        "Tombs": L.layerGroup(markers.tomb_markers).addTo(map),
        "Castles": L.layerGroup(markers.castle_markers).addTo(map),
        "Monasteries": L.layerGroup(markers.monastery_markers).addTo(map),
        "Unknowns": L.layerGroup(markers.unknown_markers).addTo(map),
        "Landscapes and Subregions": L.layerGroup(markers.other_landscape_markers).addTo(map),
        "Regions": L.layerGroup(markers.region_markers).addTo(map),
    };

    L.control.layers(null, overlays, {collapsed:false, position: "bottomright"}).addTo(map);    

    // on zoom, update icons
    map.on('zoom', function(){
        var size;
        switch(map.getZoom()) {
            case 3:
                size = 'small';
                break;
            case 4:
                size = 'medium';
                break;
            case 5:
                size = 'large';
                break;
        }

        markers.town_markers.forEach(marker => {
            // Tristram needs to look special :)
            if (marker.getTooltip().getContent().includes(">Tristram<")) {
                marker.setIcon(icons.tristram_icon[size]);
            } else {
                marker.setIcon(icons.town[size]);
            }
        });
        markers.mountain_markers.forEach(marker => {
            marker.setIcon(icons.mountain[size]);
        });
        markers.river_markers.forEach(marker => {
            marker.setIcon(icons.river[size]);
        });
        markers.tomb_markers.forEach(marker => {
            marker.setIcon(icons.tomb[size]);
        });
        markers.castle_markers.forEach(marker => {
            marker.setIcon(icons.castle[size]);
        });
        markers.monastery_markers.forEach(marker => {
            marker.setIcon(icons.monastery[size]);
        });
        markers.unknown_markers.forEach(marker => {
            marker.setIcon(icons.unknown[size]);
        });
        markers.region_markers.forEach(marker => {
            marker.setIcon(new L.DivIcon({
                className: size + '-diablo-region-font diablo-region-font',
                html: marker.getIcon().options.html
            }))
        });
        markers.other_landscape_markers.forEach(marker => {
            marker.setIcon(new L.DivIcon({
                className: size + '-diablo-font diablo-sub-region-font',
                html: marker.getIcon().options.html
            }))
        });
    });

    draw_timeline(map, L);
    draw_encyclopedia(map, L);
    draw_about_me_button(map, L);
}

function draw_character_path(character_name) {
    character_name = character_name.replaceAll('__', '"').replaceAll("_", "'")
    var traveled_locations = database.Characters[character_name].TraveledLocations;
    var path_coordinates = [];
    var location_ids = {};
    for (var name in database.MapLocations) {
        location_ids[database.MapLocations[name].Id] = name;
    }

    traveled_locations.forEach(location => {
        var destination = database.MapLocations[location_ids[location.MapLocationId]];
        path_coordinates.push([
            destination.Latitude,
            destination.Longitude
        ]);
    });

    var path = L.polyline(path_coordinates, {
        weight: 2,
        color: 'red',
        dashArray: '5 20',
        interactive: false
    }).addTo(map);

    var length_of_time = 60*1000;
    if (path_coordinates.length == 1) {
        // Plugin doesn't account for 1 location + 2 locations with same coordinates
        // so these are hacks to get around that
        length_of_time = 1;
        path_coordinates.push([path_coordinates[0][0], path_coordinates[0][1]+.01]);
    } else if (path_coordinates.length < 5) {
        length_of_time = 30*1000;
    }
    var myMovingMarker = L.Marker.movingMarker(path_coordinates, length_of_time)
        .addTo(map)
        .on('end', function() {
            setTimeout(() => {
                map.removeLayer(this);
                map.removeLayer(path);
            }, 3000);
        });

    myMovingMarker.start();
}