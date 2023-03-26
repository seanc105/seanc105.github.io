var markers = {
    town_markers: [],
    mountain_markers: [],
    other_landscape_markers: []
}

function toggle_labels() {
    for (var marker_group in markers) {
        markers[marker_group].forEach(marker => {
            if (marker.isTooltipOpen()) {
                marker.closeTooltip();
            } else {
                marker.openTooltip();
            }
        });
    }
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
        location_marker = L.marker([data.Latitude, data.Longitude]).bindTooltip(location_popup(location, data), {direction: 'top', permanent: true});
        if (icon) {
            location_marker.setIcon(icon);
        }

        markers[type].push(location_marker)
    }

    var overlays = {
        "Cities and towns": L.layerGroup(markers.town_markers).addTo(map),
        "Mountains": L.layerGroup(markers.mountain_markers).addTo(map),
        "Landscapes and Regions": L.layerGroup(markers.other_landscape_markers).addTo(map),
    };

    L.control.layers(null, overlays, {collapsed:false}).addTo(map);

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