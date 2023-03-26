
function getQueryStringValue (key) {  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}

function checkUri(L) {
    var id = getQueryStringValue("id");
    if (id !== "") {
        components = id.split(':');
        type = components[0];
        value = components[1];

        item = database[type][value]

        L.map('map').setView([item.Latitude, item.Longitude], 6);
    }    
}
