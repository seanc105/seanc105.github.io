var markers = {
    town_markers: [],
    mountain_markers: [],
    other_landscape_markers: []
}

function update_searchbox(map, searchbox) {
    var fuse = new Fuse(Object.keys(database.MapLocations), {
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
            likely_item = database.MapLocations[results[0].item];
            var respective_marker;
            var done = false;
            for (var marker_group in markers) {
                for (var i in markers[marker_group]) {
                    if (markers[marker_group][i].options.title == results[0].item) {
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
        }
    
        setTimeout(function () {
            searchbox.hide();
            searchbox.clear();
        }, 600);
    }
    
    searchbox.onButton("click", search);
}

function draw_map(map, L) {
    icons = {
        town: {
            small: L.icon({
                iconUrl: 'images/icons/town.png',
                iconSize: new L.Point(16, 16),
            }),
            medium: L.icon({
                iconUrl: 'images/icons/town.png',
                iconSize: new L.Point(24, 24),
            }),
            large: L.icon({
                iconUrl: 'images/icons/town.png',
                iconSize: new L.Point(32, 32),
            })
        },
        mountain: {
            small: L.icon({
                iconUrl: 'images/icons/mountain.png',
                iconSize: new L.Point(16, 16),
            }),
            medium: L.icon({
                iconUrl: 'images/icons/mountain.png',
                iconSize: new L.Point(24, 24),
            }),
            large: L.icon({
                iconUrl: 'images/icons/mountain.png',
                iconSize: new L.Point(32, 32),
            })
        }
    }

    tooltipLayer = L.layerGroup();

    for (var location in database.MapLocations) {
        data = database.MapLocations[location];
        location_type = database.ClassificationTypes[data.ClassificationTypeId].Label;
        var type = null;
        var icon = null

        if (['Village', 'City', 'Town', 'Temple/Cathedral'].includes(location_type)) {
            type = 'town_markers';
            icon = icons.town.small;
        } else {
            type = 'mountain_markers';
            icon = icons.mountain.small;
        }
        location_marker = L.marker([data.Latitude, data.Longitude], {title: location})
                           .bindTooltip(location_tooltip(location), {direction: 'top', riseOnHover: true})
                           .bindPopup(custom_popup(location, data, ['type', 'location', 'information', 'inconsistent_facts', 'places_of_interest', 'been_here', 'first_seen_here']));
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
        "Landscapes and Regions": L.layerGroup(markers.other_landscape_markers).addTo(map),
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
            marker.setIcon(icons.town[size]);
        });
        markers.mountain_markers.forEach(marker => {
            marker.setIcon(icons.mountain[size]);
        });
    });
}