// sqlite> .mode csv
// sqlite> .headers on
// sqlite> .out map_locations.csv
// sqlite> select * from map_locations;

database = {
    MapLocations: {
        Seram: {
            Id: 1,
            FirstActiveYear: -2300,
            LastActiveYear: 1000,
            ClassificationTypeId: 1,
            FromLocationDescription: "West of <a href=\"?id=map_locations:Kehjan\">Kehjan</a>",
            FromLocationSourceId: 1,
            Latitude: -45.243953,
            Longitude: -17.797852
        }
    },
    ClassificationTypes: {
        1: {
            Label: "Village"
        },
    }
}