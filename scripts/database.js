// sqlite> .mode csv
// sqlite> .headers on
// sqlite> .out map_locations.csv
// sqlite> select * from map_locations;

database = {
    "MapLocations": {
        "Seram": {
            "Id": 1,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1000,
            "ClassificationTypeId": 1,
            "FromLocationDescription": "West of <a href=\"?id=map_locations:Kehjan\">Kehjan</a>",
            "FromLocationSourceId": 1,
            "Latitude": -45.243953,
            "Longitude": -17.797852
        },
        "Kehjan": {
            "Id": 2,
            "FirstActiveYear": -2300,
            "LastActiveYear": -1800,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "East of <a href=\"?id=map_locations:Toraja\">Toraja</a>",
            "FromLocationSourceId": 2,
            "Latitude": -45.767523,
            "Longitude": 9.799805
        },
        "Tulisam": {
            "Id": 3,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1000,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "Proper to the sea from <a href=\"?id=map_locations:Kehjan\">Kehjan</a>",
            "FromLocationSourceId": 1,
            "Latitude": -44.902578, 
            "Longitude": -6.240234
        },
        "Temple of Triune": {
            "Id": 4,
            "FirstActiveYear": -1880,
            "LastActiveYear": -1809,
            "ClassificationTypeId": 4,
            "FromLocationDescription": "2 days ride south of <a href=\"?id=map_locations:Kehjan\">Kehjan</a>",
            "FromLocationSourceId": 1,
            "Latitude": -49.496675, 
            "Longitude": 9.316406
        },
        "Partha": {
            "Id": 5,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1000,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Probably southeast of <a href=\"?id=map_locations:Seram\">Seram</a> based on context",
            "FromLocationSourceId": 1,
            "Latitude": -49.894634, 
            "Longitude": -16.743164
        },
        "Torajan Jungles": {
            "Id": 6,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 5,
            "FromLocationDescription": "Southwest of <a href=\"?id=map_locations:Kehjan\">Kehjan</a>",
            "FromLocationSourceId": 1,
            "Latitude": -54.059388, 
            "Longitude": -10.063477
        },
        "Toraja": {
            "Id": 7,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1000,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Within the <a href=\"?id=map_locations:Torajan Jungles\">Torajan Jungles</a> somewhere, west of <a href=\"?id=map_locations:Kehjan\">Kehjan</a>",
            "FromLocationSourceId": 1,
            "Latitude": -49.525208, 
            "Longitude": -6.152344
        },
        "Prime Cathedral": {
            "Id": 8,
            "FirstActiveYear": -1820,
            "LastActiveYear": -1809,
            "ClassificationTypeId": 4,
            "FromLocationDescription": "Just north of <a href=\"?id=map_locations:Kehjan\">Kehjan</a>",
            "FromLocationSourceId": 1,
            "Latitude": -41.672912, 
            "Longitude": 9.799805
        },
        "Hashir": {
            "Id": 9,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1000,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Probably between <a href=\"?id=map_locations:Toraja\">Toraja</a> and the <a href=\"?id=WorldFact:Temple of Triune\">Temple of Triune</a> based on context",
            "FromLocationSourceId": 2,
            "Latitude": -50.625073, 
            "Longitude": -0.966797
        },
        "Mt. Arreat": {
            "Id": 10,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1265,
            "ClassificationTypeId": 6,
            "FromLocationDescription": "Near <a href=\"?id=map_locations:Harrogath\">Harrogath</a>.",
            "FromLocationSourceId": 8,
            "Latitude": 34.633208, 
            "Longitude": -86.52832
        },
        "Arreat Crater": {
            "Id": 11,
            "FirstActiveYear": 1266,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 6,
            "FromLocationDescription": "The location of where <a href=\"?id=map_locations:Mt. Arreat\">Mt. Arreat</a> once stood.",
            "FromLocationSourceId": 15,
            "Latitude": 34.633208, 
            "Longitude": -86.52832
        },
        "Sanctuary Nexus": {
            "Id": 12,
            "FirstActiveYear": -3000,
            "LastActiveYear": 0,
            "ClassificationTypeId": 7,
            "FromLocationDescription": "\"Even farther south\" from <a href=\"?id=map_locations:Hashir\">Hashir</a>.",
            "FromLocationSourceId": 2,
            "Latitude": -52.61639, 
            "Longitude": -0.615234
        },
        "Kalinash": {
            "Id": 13,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1000,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Near <a href=\"?id=map_locations:Kehjan\">Kehjan</a>, south of <a href=\"?id=map_locations:Istani\">Istani</a> by a day or 2.",
            "FromLocationSourceId": 2,
            "Latitude": -52.160455, 
            "Longitude": 3.164063
        },
        "Istani": {
            "Id": 14,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1000,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "West of the <a href=\"?id=WorldFact:Temple of Triune\">Temple of Triune</a>.",
            "FromLocationSourceId": 2,
            "Latitude": -50.541363, 
            "Longitude": 3.911133
        },
        "Urjhani": {
            "Id": 15,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1000,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "<a href=\"?id=map_locations:Kehjan\">Kehjan</a> is possibly in between here and the <a href=\"?id=map_locations:Prime Cathedral\">Prime Cathedral</a> based on context.",
            "FromLocationSourceId": 3,
            "Latitude": -48.019324, 
            "Longitude": 7.910156
        },
        "Getterac": {
            "Id": 16,
            "FirstActiveYear": -1809,
            "LastActiveYear": -1809,
            "ClassificationTypeId": 4,
            "FromLocationDescription": "Between <a href=\"?id=map_locations:Kehjan\">Kehjan</a> and the <a href=\"?id=map_locations:Prime Cathedral\">Prime Cathedral</a>.",
            "FromLocationSourceId": 3,
            "Latitude": -44.182204, 
            "Longitude": 9.711914
        },
        "Blackmarch": {
            "Id": 17,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Far west of Kehjistan, northeast of <a href=\"?id=map_locations:Entsteig\">Entsteig</a>.",
            "FromLocationSourceId": 4,
            "Latitude": 16.678293, 
            "Longitude": -87.407227
        },
        "Entsteig": {
            "Id": 18,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Location shown on all maps.",
            "FromLocationSourceId": 27,
            "Latitude": 11.22151,  
            "Longitude": -87.363281
        },
        "Entsteig (Region)": {
            "Id": 19,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region location shown on Diablo 2 map.",
            "FromLocationSourceId": 26,
            "Latitude": 17.518344, 
            "Longitude": -75.673828
        },
        "Khanduras": {
            "Id": 20,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -17.476432, 
            "Longitude": -46.669922
        },
        "Viz-jun": {
            "Id": 21,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Location shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -41.046217, 
            "Longitude": 25.180664
        },
        "Brennor": {
            "Id": 22,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "East of <a href=\"?id=map_locations:Entsteig\">Entsteig</a>.",
            "FromLocationSourceId": 4,
            "Latitude": 12.511665, 
            "Longitude": -76.245117
        },
        "Bear's Hill": {
            "Id": 23,
            "FirstActiveYear": -500,
            "LastActiveYear": 302,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "About a day east of <a href=\"?id=map_locations:Brennor\">Brennor</a>.",
            "FromLocationSourceId": 4,
            "Latitude": 12.597455, 
            "Longitude": -73.476563
        },
        "Gellan's Pass": {
            "Id": 24,
            "FirstActiveYear": -500,
            "LastActiveYear": 302,
            "ClassificationTypeId": 1,
            "FromLocationDescription": "Slightly southwest of <a href=\"?id=map_locations:Bear's Hill\">Bear's Hill</a>.",
            "FromLocationSourceId": 4,
            "Latitude": 10.617418, 
            "Longitude": -75.585938
        },
        "Arcane Sanctuary": {
            "Id": 25,
            "FirstActiveYear": 300,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 9,
            "FromLocationDescription": "Not on the map.",
            "FromLocationSourceId": 8,
            "Latitude": -56.46249, 
            "Longitude": 94.921875
        },
        "Talsande": {
            "Id": 26,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 10,
            "FromLocationDescription": "In Tristram.",
            "FromLocationSourceId": 5,
            "Latitude": -32.990236, 
            "Longitude": -77.475586
        },
        "Tristram": {
            "Id": 27,
            "FirstActiveYear": 1025,
            "LastActiveYear": 1263,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "Location shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -33.83392, 
            "Longitude": -74.223633
        },
        "New Tristram": {
            "Id": 28,
            "FirstActiveYear": 1268,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "Slightly southwest of <a href=\"?id=Location:Tristram\">Tristram</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -36.173357, 
            "Longitude": -75.410156
        },
        "Westmarch": {
            "Id": 29,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Location shown on various maps inconsistently (placement based on descriptive lore).",
            "FromLocationSourceId": 26,
            "Latitude": -30.562261, 
            "Longitude": -96.547852
        },
        "Aranoch": {
            "Id": 30,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -30.486551, 
            "Longitude": -37.265625
        },
        "Bramwell": {
            "Id": 31,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "Location shown on various maps inconsistently (placement based on descriptive lore).",
            "FromLocationSourceId": 27,
            "Latitude": -25.601902, 
            "Longitude": -108.896484
        },
        "Dyre River": {
            "Id": 32,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 10,
            "FromLocationDescription": "North of <a href=\"?id=map_locations:Westmarch\">Westmarch</a>/<a href=\"?id=map_locations:Tristram\">Tristram</a>.",
            "FromLocationSourceId": 6,
            "Latitude": -18.604601, 
            "Longitude": -69.56543
        },
        "Hawks Beak Mountains": {
            "Id": 33,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 11,
            "FromLocationDescription": "East of <a href=\"?id=map_locations:Tauruk's Port\">Tauruk's Port</a>.",
            "FromLocationSourceId": 6,
            "Latitude": -11.566144, 
            "Longitude": -52.77832
        },
        "Hillsfar": {
            "Id": 34,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "Possibly near <a href=\"?id=map_locations:Westmarch\">Westmarch</a> based on context.",
            "FromLocationSourceId": 6,
            "Latitude": -27.955591, 
            "Longitude": -105.292969
        },
        "Tauruk's Port": {
            "Id": 35,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 12,
            "FromLocationDescription": "Right next to <a href=\"?id=map_locations:Ransim\">Ransim</a> on the port of the <a href=\"?id=map_locations:Dyre River\">Dyre River</a>",
            "FromLocationSourceId": 6,
            "Latitude": -14.944785, 
            "Longitude": -77.34375
        },
        "Ransim": {
            "Id": 36,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 7,
            "FromLocationDescription": "Near the <a href=\"?id=map_locations:Dyre River\">Dyre River</a>.",
            "FromLocationSourceId": 6,
            "Latitude": -17.350638, 
            "Longitude": -76.640625
        },
        "Lut Gholein": {
            "Id": 37,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Location on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -26.863281, 
            "Longitude": -21.401367
        },
        "Seeker's Point": {
            "Id": 38,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "Just south of <a href=\"?id=WorldFact:Barbarian\">Barbarian</a> tribes' territories, north of <a href=\"?id=map_locations:Bramwell\">Bramwell</a>.",
            "FromLocationSourceId": 6,
            "Latitude": -5.834616, 
            "Longitude": -95.009766
        },
        "Bartuc's Tomb": {
            "Id": 39,
            "FirstActiveYear": 300,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 13,
            "FromLocationDescription": "Northern Kehjistan",
            "FromLocationSourceId": 7,
            "Latitude": -24.846565, 
            "Longitude": 44.296875
        },
        "Scosglen": {
            "Id": 40,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": 63.607217, 
            "Longitude": 65.522461
        },
        "Kingsport": {
            "Id": 41,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Location shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -58.722599, 
            "Longitude": -79.49707
        },
        "Gea Kul": {
            "Id": 42,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "Location shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": -24.527135, 
            "Longitude": 5.756836
        },
        "Waystruck": {
            "Id": 43,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 1,
            "FromLocationDescription": "Between <a href=\"?id=map_locations:Tristram\">Tristram</a> and the <a href=\"?id=map_locations:Rogue Monastery\">Rogue Monastery</a>.",
            "FromLocationSourceId": 12,
            "Latitude": -34.379713, 
            "Longitude": -65.917969
        },
        "Rogue Encampment": {
            "Id": 44,
            "FirstActiveYear": 1263,
            "LastActiveYear": 1265,
            "ClassificationTypeId": 14,
            "FromLocationDescription": "West of the <a href=\"?id=map_locations:Rogue Monastery\">Rogue Monastery</a>.",
            "FromLocationSourceId": 8,
            "Latitude": -30.977609, 
            "Longitude": -67.543945
        },
        "Rogue Monastery": {
            "Id": 45,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 15,
            "FromLocationDescription": "East of the <a href=\"?id=map_locations:Rogue Encampment\">Rogue Encampment</a>.",
            "FromLocationSourceId": 8,
            "Latitude": -30.713504, 
            "Longitude": -57.524414
        },
        "Kae Huron": {
            "Id": 46,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 11,
            "FromLocationDescription": "Mountains where <a href=\"?id=map_locations:Mt. Arreat\">Mt. Arreat</a> is located.",
            "FromLocationSourceId": 8,
            "Latitude": 34.234512, 
            "Longitude": -93.251953
        },
        "Sescheron": {
            "Id": 47,
            "FirstActiveYear": -500,
            "LastActiveYear": 1265,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "South of <a href=\"?id=map_locations:Harrogath\">Harrogath</a>.",
            "FromLocationSourceId": 8,
            "Latitude": 28.72913, 
            "Longitude": -84.990234
        },
        "Val Narian": {
            "Id": 48,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 16,
            "FromLocationDescription": "\"The North\" (unknown location).",
            "FromLocationSourceId": 8,
            "Latitude": -29.53523, 
            "Longitude": 156.445313
        },
        "Henknoc Jungles": {
            "Id": 49,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 5,
            "FromLocationDescription": "Southern end of the <a href=\"?id=WorldFact:Barbarian\">Barbarian</a> kingdom.",
            "FromLocationSourceId": 8,
            "Latitude": -0.703107, 
            "Longitude": -85.253906
        },
        "Kurast": {
            "Id": 50,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Location shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -27.176469, 
            "Longitude": 22.280273
        },
        "Travincal": {
            "Id": 51,
            "FirstActiveYear": 1017,
            "LastActiveYear": 1265,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Next to <a href=\"?id=map_locations:Kurast\">Kurast</a>, across the <a href=\"?id=Location:Kurast Causeway\">Kurast Causeway</a>.",
            "FromLocationSourceId": 8,
            "Latitude": -25.204941, 
            "Longitude": 27.202148
        },
        "Pandemonium Fortress": {
            "Id": 52,
            "FirstActiveYear": -5000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 17,
            "FromLocationDescription": "Between Heaven and Hell. This location includes 'Pandemonium' as a whole on this map.",
            "FromLocationSourceId": 8,
            "Latitude": -45.828799, 
            "Longitude": 126.386719
        },
        "Harrogath": {
            "Id": 53,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Southeastern slopes of <a href=\"?id=map_locations:Mt. Arreat\">Mt. Arreat</a>.",
            "FromLocationSourceId": 8,
            "Latitude": 31.765537, 
            "Longitude": -84.506836
        },
        "Mt. Karcheus": {
            "Id": 54,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 6,
            "FromLocationDescription": "Likely on <a href=\"?id=map_locations:Philios\">Philios</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -63.411198, 
            "Longitude": -40.605469
        },
        "Mt. Arnazeus": {
            "Id": 55,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 24,
            "FromLocationDescription": "On <a href=\"?id=map_locations:Philios\">Philios</a>.",
            "FromLocationSourceId": 8,
            "Latitude": -64.339908, 
            "Longitude": -27.993164
        },
        "Tran Athulua": {
            "Id": 56,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Likely on <a href=\"?id=map_locations:Philios\">Philios</a>.",
            "FromLocationSourceId": 8,
            "Latitude": -61.773123, 
            "Longitude": -29.443359
        },
        "Tamoe Mountains": {
            "Id": 57,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 11,
            "FromLocationDescription": "Between the western kingdom and <a href=\"?id=map_locations:Aranoch\">Aranoch</a>.",
            "FromLocationSourceId": 8,
            "Latitude": -36.527295, 
            "Longitude": -58.491211
        },
        "Argentek River": {
            "Id": 58,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 10,
            "FromLocationDescription": "In the Kehjistan region.",
            "FromLocationSourceId": 8,
            "Latitude": -16.636192, 
            "Longitude": 37.661133
        },
        "Túr Dúlra": {
            "Id": 59,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 18,
            "FromLocationDescription": "Location shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": 63.626745, 
            "Longitude": 46.845703
        },
        "Ureh": {
            "Id": 60,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 7,
            "FromLocationDescription": "Location shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -11.005904, 
            "Longitude": 56.030273
        },
        "Mt. Nymyr": {
            "Id": 61,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 6,
            "FromLocationDescription": "A part of <a href=\"?id=map_locations:Ureh\">Ureh</a>.",
            "FromLocationSourceId": 13,
            "Latitude": -7.667441, 
            "Longitude": 58.227539
        },
        "Misty Woods": {
            "Id": 62,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 19,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -33.211116, 
            "Longitude": 156.401367
        },
        "Wortham": {
            "Id": 63,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 1,
            "FromLocationDescription": "Probably west from <a href=\"?id=map_locations:Tristram\">Tristram</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -37.405074, 
            "Longitude": -82.617188
        },
        "Caldeum": {
            "Id": 64,
            "FirstActiveYear": -2300,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Location shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": -4.784469, 
            "Longitude": 32.871094
        },
        "Xiansai": {
            "Id": 65,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": 65.016506, 
            "Longitude": 27.246094
        },
        "Bastion's Keep": {
            "Id": 66,
            "FirstActiveYear": 1123,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 20,
            "FromLocationDescription": "Location shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": 25.324167, 
            "Longitude": -86.176758
        },
        "Duncraig": {
            "Id": 67,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Location shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -53.826597, 
            "Longitude": -81.958008
        },
        "Lut Bahadur": {
            "Id": 68,
            "FirstActiveYear": -2150,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "\"At the base of <a href=\"?id=map_locations:Caldeum\">Caldeum</a>\".",
            "FromLocationSourceId": 15,
            "Latitude": -8.798225, 
            "Longitude": 32.124023
        },
        "Dahlgur Oasis": {
            "Id": 69,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 21,
            "FromLocationDescription": "Near <a href=\"?id=map_locations:Caldeum\">Caldeum</a>, unknown where exactly",
            "FromLocationSourceId": 15,
            "Latitude": -15.580711, 
            "Longitude": 32.387695
        },
        "Teganze": {
            "Id": 70,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Southern tip of the content with the <a href=\"?id=map_locations:Torajan Jungles\">Torajan Jungles</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -71.286699, 
            "Longitude": -2.724609
        },
        "Necropolis": {
            "Id": 71,
            "FirstActiveYear": -1800,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Underground city in Kehjistan",
            "FromLocationSourceId": 7,
            "Latitude": -15.919074, 
            "Longitude": 15.292969
        },
        "Ivgorod": {
            "Id": 72,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Location shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": 42.617791, 
            "Longitude": -27.114258
        },
        "Gorgorra Forest": {
            "Id": 73,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 19,
            "FromLocationDescription": "South of <a href=\"?id=map_locations:Ivgorod\">Ivgorod</a>.",
            "FromLocationSourceId": 15,
            "Latitude": 34.452218, 
            "Longitude": -26.279297
        },
        "Holbrook": {
            "Id": 74,
            "FirstActiveYear": -500,
            "LastActiveYear": 1265,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "In Khanduras, east are mountains, and west is the <a href=\"?id=map_locations:Gulf of Westmarch\">Gulf of Westmarch</a>. Far south of <a href=\"?id=map_locations:New Tristram\">New Tristram</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -26.588527, 
            "Longitude": -72.290039
        },
        "Havenwood": {
            "Id": 75,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 1,
            "FromLocationDescription": "Less than a day from <a href=\"?id=map_locations:Holbrook\">Holbrook</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -25.76032, 
            "Longitude": -70.576172
        },
        "Deadfall Mountains": {
            "Id": 76,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 11,
            "FromLocationDescription": "Northeast of <a href=\"?id=map_locations:Havenwood\">Havenwood</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -21.739091, 
            "Longitude": -53.964844
        },
        "Caldeum's Rest": {
            "Id": 77,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "South of <a href=\"?id=map_locations:Caldeum\">Caldeum</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -7.188101,
            "Longitude": 32.958984
        },
        "Sharval Wilds": {
            "Id": 78,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": 1.537901, 
            "Longitude": -73.87207
        },
        "Scovos Isles": {
            "Id": 79,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -65.730626, 
            "Longitude": -60.117188
        },
        "Kohl Mountains": {
            "Id": 80,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 11,
            "FromLocationDescription": "South of <a href=\"?id=map_locations:Sharval Wilds\">Sharval Wilds</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -8.450639, 
            "Longitude": -72.509766
        },
        "Therat": {
            "Id": 81,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 22,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -30.221102, 
            "Longitude": 169.453125
        },
        "Dunsmott": {
            "Id": 82,
            "FirstActiveYear": -500,
            "LastActiveYear": 1265,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "Somewhere on the Iron Path in the <a href=\"?id=map_locations:Sharval Wilds\">Sharval Wilds</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -4.740675, 
            "Longitude": -73.476563
        },
        "Guozhi Mountains": {
            "Id": 83,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 11,
            "FromLocationDescription": "On <a href=\"?id=map_locations:Xiansai\">Xiansai</a>.",
            "FromLocationSourceId": 19,
            "Latitude": 68.560384, 
            "Longitude": 27.46582
        },
        "Samauren": {
            "Id": 84,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 22,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -33.28462, 
            "Longitude": 169.628906
        },
        "Kalden": {
            "Id": 85,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 22,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -36.385913, 
            "Longitude": 169.541016
        },
        "Lake Ymirson": {
            "Id": 86,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 23,
            "FromLocationDescription": "Shoreline of <a href=\"?id=map_locations:Torajan Jungles\">Torajan Jungles</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -66.478208, 
            "Longitude": 5.053711
        },
        "Tiklan": {
            "Id": 87,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 1,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -69.178184, 
            "Longitude": 0.175781
        },
        "Taubej": {
            "Id": 88,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 22,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -38.993572, 
            "Longitude": 169.672852
        },
        "Tufnyl": {
            "Id": 89,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 22,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -42.228517, 
            "Longitude": 169.541016
        },
        "Amaral Mountains": {
            "Id": 90,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 11,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -36.668419, 
            "Longitude": 156.357422
        },
        "Bakuli Jungle": {
            "Id": 91,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 5,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -39.707187, 
            "Longitude": 156.489258
        },
        "Challsop Volcano": {
            "Id": 92,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 24,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -45.614037, 
            "Longitude": 169.584961
        },
        "Uie": {
            "Id": 93,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 25,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -48.487486, 
            "Longitude": 169.584961
        },
        "Low Hills": {
            "Id": 94,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 16,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -43.004647, 
            "Longitude": 156.401367
        },
        "Mt. Paolarr": {
            "Id": 95,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 6,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -51.069017, 
            "Longitude": 169.672852
        },
        "Khamhalla": {
            "Id": 96,
            "FirstActiveYear": -3000,
            "LastActiveYear": -2300,
            "ClassificationTypeId": 7,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -53.46189, 
            "Longitude": 169.716797
        },
        "Wojahn": {
            "Id": 97,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -55.875311, 
            "Longitude": 169.716797
        },
        "Dry Steppes": {
            "Id": 98,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": 36.102376, 
            "Longitude": 58.007813
        },
        "Bronn": {
            "Id": 99,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 1,
            "FromLocationDescription": "Somewhere in the <a href=\"?id=map_locations:Dreadlands\">Dreadlands</a>.",
            "FromLocationSourceId": 15,
            "Latitude": 39.232253, 
            "Longitude": -38.144531
        },
        "Dreadlands": {
            "Id": 100,
            "FirstActiveYear": 1265,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": 44.527843, 
            "Longitude": -42.495117
        },
        "Tardein Wastes": {
            "Id": 101,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 22,
            "FromLocationDescription": "Somewhere in the <a href=\"?id=map_locations:Borderlands\">Borderlands</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -1.801461, 
            "Longitude": 20.214844
        },
        "Alcarnus": {
            "Id": 102,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "Slightly north of <a href=\"?id=map_locations:Caldeum\">Caldeum</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -0.307616, 
            "Longitude": 31.992188
        },
        "Staalbreak": {
            "Id": 103,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 2,
            "FromLocationDescription": "Right next to <a href=\"?id=map_locations:Mt. Arreat\">Mt. Arreat</a>, likely the east of it.",
            "FromLocationSourceId": 16,
            "Latitude": 34.198173, 
            "Longitude": -83.144531
        },
        "Blood Marsh": {
            "Id": 104,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 26,
            "FromLocationDescription": "Makes up a large portion of the western part of Khanduras",
            "FromLocationSourceId": 15,
            "Latitude": -34.415973, 
            "Longitude": -106.875
        },
        "Corvus": {
            "Id": 105,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 7,
            "FromLocationDescription": "Near <a href=\"?id=map_locations:Westmarch\">Westmarch</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -34.234512, 
            "Longitude": -96.547852
        },
        "Greyhollow Island": {
            "Id": 106,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 25,
            "FromLocationDescription": "Miles from the coast of <a href=\"?id=map_locations:Westmarch\">Westmarch</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -25.403585, 
            "Longitude": -98.217773
        },
        "Fractured Peaks": {
            "Id": 107,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 11,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -46.103709, 
            "Longitude": 156.445313
        },
        "Hawezar": {
            "Id": 108,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 26,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -48.806863, 
            "Longitude": 156.445313
        },
        "Ruins of Qara-Yisu": {
            "Id": 109,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 7,
            "FromLocationDescription": "Somewhere in the <a href=\"?id=map_locations:Dry Steppes\">Dry Steppes</a>.",
            "FromLocationSourceId": 25,
            "Latitude": 42.972502, 
            "Longitude": 58.359375
        },
        "Bilefen": {
            "Id": 110,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 26,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -51.563412, 
            "Longitude": 156.533203
        },
        "Nevesk": {
            "Id": 111,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 1,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -58.077876, 
            "Longitude": 169.584961
        },
        "Floating Sky Monastery": {
            "Id": 112,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 27,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": 38.719805, 
            "Longitude": -26.762695
        },
        "Middlewick": {
            "Id": 113,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 1,
            "FromLocationDescription": "Unknown",
            "FromLocationSourceId": 0,
            "Latitude": -60.457218, 
            "Longitude": 169.628906
        },
        "Zhou": {
            "Id": 114,
            "FirstActiveYear": -500,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 3,
            "FromLocationDescription": "Somewhere in the <a href=\"?id=map_locations:Guozhi Mountains\">Guozhi Mountain Range</a>.",
            "FromLocationSourceId": 1,
            "Latitude": 66.75725, 
            "Longitude": 31.640625
        },
        "Scovos": {
            "Id": 115,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 25,
            "FromLocationDescription": "Location shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -69.224997, 
            "Longitude": -48.208008
        },
        "Philios": {
            "Id": 116,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 25,
            "FromLocationDescription": "Location shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -64.529548, 
            "Longitude": -35.024414
        },
        "Lycander": {
            "Id": 117,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 25,
            "FromLocationDescription": "Location shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -68.989925, 
            "Longitude": -37.661133
        },
        "Skartara": {
            "Id": 118,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 25,
            "FromLocationDescription": "Location shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": -69.915214, 
            "Longitude": -82.353516
        },
        "Al Cut": {
            "Id": 119,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1272,
            "ClassificationTypeId": 7,
            "FromLocationDescription": "Below <a href=\"?id=map_locations:Gea Kul\">Gea Kul</a>.",
            "FromLocationSourceId": 22,
            "Latitude": -60.174306, 
            "Longitude": 90.131836
        },
        "Frozen Sea": {
            "Id": 120,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 28,
            "FromLocationDescription": "Region shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": 66.302205, 
            "Longitude": -37.265625
        },
        "Sea of Light": {
            "Id": 121,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 28,
            "FromLocationDescription": "Region shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -64.396938, 
            "Longitude": 59.589844
        },
        "The Great Ocean": {
            "Id": 122,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 28,
            "FromLocationDescription": "Region shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -63.074866, 
            "Longitude": -141.328125
        },
        "Twin Seas": {
            "Id": 123,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 28,
            "FromLocationDescription": "Region shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -42.163403, 
            "Longitude": -24.433594
        },
        "Gulf of Westmarch": {
            "Id": 124,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 28,
            "FromLocationDescription": "Region shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -23.32208, 
            "Longitude": -87.802734
        },
        "Swamplands": {
            "Id": 125,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": -21.330315, 
            "Longitude": 98.876953
        },
        "Westmarch (Region)": {
            "Id": 126,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -42.423457, 
            "Longitude": -91.494141
        },
        "Kehjistan": {
            "Id": 127,
            "FirstActiveYear": -1800,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Region shown on all maps.",
            "FromLocationSourceId": 26,
            "Latitude": -9.492408, 
            "Longitude": 14.941406
        },
        "Borderlands": {
            "Id": 128,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 8,
            "FromLocationDescription": "Around <a href=\"?id=map_locations:Caldeum\">Caldeum</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -4.82826, 
            "Longitude": 22.763672
        },
        "Marshlands": {
            "Id": 129,
            "FirstActiveYear": -3000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 26,
            "FromLocationDescription": "Region shown on newer maps.",
            "FromLocationSourceId": 27,
            "Latitude": -58.83649, 
            "Longitude": -19.467773
        },
        "High Heavens": {
            "Id": 130,
            "FirstActiveYear": -5000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 55,
            "FromLocationDescription": "The location of the <a href=\"?id=WorldFact:Seraphim\">Archangels</a>.",
            "FromLocationSourceId": 1,
            "Latitude": -48.166085, 
            "Longitude": 113.466797
        },
        "Burning Hells": {
            "Id": 131,
            "FirstActiveYear": -5000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 55,
            "FromLocationDescription": "The location of Demons.",
            "FromLocationSourceId": 1,
            "Latitude": -51.289406, 
            "Longitude": 104.326172
        },
        "Void": {
            "Id": 132,
            "FirstActiveYear": -5000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 9,
            "FromLocationDescription": "Simply called The Void. Nothingness. No defined location.",
            "FromLocationSourceId": 2,
            "Latitude": -54.033586, 
            "Longitude": 98.964844
        },
        "Treasure Realm": {
            "Id": 133,
            "FirstActiveYear": -5000,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 22,
            "FromLocationDescription": "A realm outside of the realm of the 3 main realms.",
            "FromLocationSourceId": 15,
            "Latitude": -62.975198, 
            "Longitude": 87.890625
        },
        "Realms of Fate": {
            "Id": 134,
            "FirstActiveYear": 1285,
            "LastActiveYear": 1500,
            "ClassificationTypeId": 22,
            "FromLocationDescription": "Realms that are the unintended consequence of the battle between the heroes of D3 and <a href=\"?id=Character:Diablo\">Diablo</a> in the <a href=\"?id=map_locations:High Heavens\">High Heavens</a>.",
            "FromLocationSourceId": 15,
            "Latitude": -65.928554, 
            "Longitude": 85.913086
        }
    },
    "ClassificationTypes": {
        "1": {
            "Label": "Village"
        },
        "2": {
            "Label": "City"
        },
        "3": {
            "Label": "Town"
        },
        "4": {
            "Label": "Temple/Cathedral"
        },
        "5": {
            "Label": "Jungle"
        },
        "6": {
            "Label": "Mountain"
        },
        "7": {
            "Label": "Ruins"
        },
        "8": {
            "Label": "Region"
        },
        "9": {
            "Label": "Void"
        },
        "10": {
            "Label": "River"
        },
        "11": {
            "Label": "Mountain Range"
        },
        "12": {
            "Label": "Port"
        },
        "13": {
            "Label": "Tomb"
        },
        "14": {
            "Label": "Camp"
        },
        "15": {
            "Label": "Citadel"
        },
        "16": {
            "Label": "Hill(s)"
        },
        "17": {
            "Label": "Fortress"
        },
        "18": {
            "Label": "College"
        },
        "19": {
            "Label": "Forest"
        },
        "20": {
            "Label": "Keep"
        },
        "21": {
            "Label": "Oasis"
        },
        "22": {
            "Label": "Unknown"
        },
        "23": {
            "Label": "Lake"
        },
        "24": {
            "Label": "Volcano"
        },
        "25": {
            "Label": "Island"
        },
        "26": {
            "Label": "Swamp/Marsh"
        },
        "27": {
            "Label": "Monastery"
        },
        "28": {
            "Label": "Ocean"
        },
        "29": {
            "Label": "Tavern/Inn"
        },
        "30": {
            "Label": "Farm"
        },
        "31": {
            "Label": "Trading Station"
        },
        "32": {
            "Label": "Guard Quarters"
        },
        "33": {
            "Label": "Town Square"
        },
        "34": {
            "Label": "Estate"
        },
        "35": {
            "Label": "Market"
        },
        "36": {
            "Label": "Garden"
        },
        "37": {
            "Label": "Arena"
        },
        "38": {
            "Label": "Cemetery"
        },
        "39": {
            "Label": "Blacksmith"
        },
        "40": {
            "Label": "Home"
        },
        "41": {
            "Label": "Road"
        },
        "42": {
            "Label": "Bridge"
        },
        "43": {
            "Label": "Church"
        },
        "44": {
            "Label": "Executioner's Block"
        },
        "45": {
            "Label": "Palace"
        },
        "46": {
            "Label": "Theater"
        },
        "47": {
            "Label": "Races"
        },
        "48": {
            "Label": "Cave"
        },
        "49": {
            "Label": "Tower"
        },
        "50": {
            "Label": "Hall"
        },
        "51": {
            "Label": "Plains"
        },
        "52": {
            "Label": "Mine"
        },
        "53": {
            "Label": "Outpost"
        },
        "54": {
            "Label": "Sanctum"
        },
        "55": {
            "Label": "N/A"
        },
        "56": {
            "Label": "Brewery"
        },
        "57": {
            "Label": "Courtyard"
        },
        "58": {
            "Label": "Tunnels"
        },
        "59": {
            "Label": "Building"
        },
        "60": {
            "Label": "Bunker"
        },
        "61": {
            "Label": "Prison"
        },
        "62": {
            "Label": "Desert"
        },
        "63": {
            "Label": "Quarters"
        },
        "64": {
            "Label": "Gates"
        },
        "65": {
            "Label": "School"
        },
        "66": {
            "Label": "Henhouse"
        },
        "67": {
            "Label": "Court"
        },
        "68": {
            "Label": "Month"
        },
        "69": {
            "Label": "Day"
        },
        "70": {
            "Label": "Tome(s)"
        },
        "71": {
            "Label": "Item"
        },
        "72": {
            "Label": "Object"
        },
        "73": {
            "Label": "Scriptures"
        },
        "74": {
            "Label": "Writings"
        },
        "75": {
            "Label": "Weapon"
        },
        "76": {
            "Label": "Gylph"
        },
        "77": {
            "Label": "Armor"
        },
        "78": {
            "Label": "Potion"
        },
        "79": {
            "Label": "Artifact"
        },
        "80": {
            "Label": "Relic"
        },
        "81": {
            "Label": "Gem"
        },
        "82": {
            "Label": "Pearl"
        },
        "83": {
            "Label": "Altar"
        },
        "84": {
            "Label": "Scroll(s)"
        },
        "85": {
            "Label": "General"
        },
        "86": {
            "Label": "Group / Being"
        },
        "87": {
            "Label": "Word / Translation"
        },
        "88": {
            "Label": "Diety"
        },
        "89": {
            "Label": "Religion"
        },
        "90": {
            "Label": "Flower"
        },
        "91": {
            "Label": "Title or Name"
        },
        "92": {
            "Label": "Animal"
        },
        "93": {
            "Label": "Plant"
        },
        "94": {
            "Label": "Guild"
        },
        "95": {
            "Label": "Drink"
        },
        "96": {
            "Label": "Event"
        },
        "97": {
            "Label": "War"
        },
        "98": {
            "Label": "Location"
        },
        "99": {
            "Label": "Ship"
        },
        "100": {
            "Label": "Song"
        },
        "101": {
            "Label": "Concept"
        },
        "102": {
            "Label": "Currency"
        },
        "103": {
            "Label": "Spell"
        },
        "104": {
            "Label": "Tree"
        },
        "105": {
            "Label": "Spirit"
        },
        "106": {
            "Label": "Creature"
        },
        "107": {
            "Label": "Clothing"
        },
        "108": {
            "Label": "Demon"
        },
        "109": {
            "Label": "Story"
        },
        "110": {
            "Label": "Material"
        },
        "111": {
            "Label": "Room"
        },
        "112": {
            "Label": "Card Game"
        },
        "113": {
            "Label": "Disease"
        },
        "114": {
            "Label": "Play"
        },
        "115": {
            "Label": "Undead"
        },
        "116": {
            "Label": "Human or humanoid"
        },
        "117": {
            "Label": "Golem"
        }
    }
}