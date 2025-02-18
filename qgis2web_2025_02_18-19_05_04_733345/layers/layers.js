var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_name__1 = new ol.format.GeoJSON();
var features_name__1 = format_name__1.readFeatures(json_name__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_name__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_name__1.addFeatures(features_name__1);
var lyr_name__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_name__1, 
                style: style_name__1,
                popuplayertitle: 'name_Севастополь',
                interactive: true,
                title: '<img src="styles/legend/name__1.png" /> name_Севастополь'
            });

lyr_OSMStandard_0.setVisible(true);lyr_name__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_name__1];
lyr_name__1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'railway': 'railway', 'public_transport': 'public_transport', 'train': 'train', 'station': 'station', 'description': 'description', 'building:use': 'building:use', 'building': 'building', 'addr:city': 'addr:city', 'name:qt': 'name:qt', 'wikipedia:ru': 'wikipedia:ru', 'wikipedia:pl': 'wikipedia:pl', 'population:date': 'population:date', 'population': 'population', 'place': 'place', 'name:sr': 'name:sr', 'name:kn': 'name:kn', 'name:io': 'name:io', 'addr:region:ru': 'addr:region:ru', 'addr:region': 'addr:region', 'addr:postcode': 'addr:postcode', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'timezone': 'timezone', 'ref:uk': 'ref:uk', 'official_status': 'official_status', 'name:zh-Hant': 'name:zh-Hant', 'name:zh-Hans': 'name:zh-Hans', 'name:zh': 'name:zh', 'name:uk': 'name:uk', 'name:tr': 'name:tr', 'name:sk': 'name:sk', 'name:ru': 'name:ru', 'name:ro': 'name:ro', 'name:pt': 'name:pt', 'name:pl': 'name:pl', 'name:nl': 'name:nl', 'name:lv': 'name:lv', 'name:lt': 'name:lt', 'name:la': 'name:la', 'name:ko': 'name:ko', 'name:it': 'name:it', 'name:hu': 'name:hu', 'name:hr': 'name:hr', 'name:fr': 'name:fr', 'name:es': 'name:es', 'name:eo': 'name:eo', 'name:en': 'name:en', 'name:el': 'name:el', 'name:de': 'name:de', 'name:cs': 'name:cs', 'name:crh': 'name:crh', 'name:ca': 'name:ca', 'name:be-tarask': 'name:be-tarask', 'name:be': 'name:be', 'koatuu': 'koatuu', 'katotth': 'katotth', 'is_in:country_code': 'is_in:country_code', 'is_in:country': 'is_in:country', 'int_name': 'int_name', 'boundary': 'boundary', 'admin_level': 'admin_level', 'addr:country': 'addr:country', 'ISO3166-2': 'ISO3166-2', });
lyr_name__1.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'railway': 'TextEdit', 'public_transport': 'TextEdit', 'train': 'TextEdit', 'station': 'TextEdit', 'description': 'TextEdit', 'building:use': 'TextEdit', 'building': 'TextEdit', 'addr:city': 'TextEdit', 'name:qt': 'TextEdit', 'wikipedia:ru': 'TextEdit', 'wikipedia:pl': 'TextEdit', 'population:date': 'TextEdit', 'population': 'TextEdit', 'place': 'TextEdit', 'name:sr': 'TextEdit', 'name:kn': 'TextEdit', 'name:io': 'TextEdit', 'addr:region:ru': 'TextEdit', 'addr:region': 'TextEdit', 'addr:postcode': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'timezone': 'TextEdit', 'ref:uk': 'TextEdit', 'official_status': 'TextEdit', 'name:zh-Hant': 'TextEdit', 'name:zh-Hans': 'TextEdit', 'name:zh': 'TextEdit', 'name:uk': 'TextEdit', 'name:tr': 'TextEdit', 'name:sk': 'TextEdit', 'name:ru': 'TextEdit', 'name:ro': 'TextEdit', 'name:pt': 'TextEdit', 'name:pl': 'TextEdit', 'name:nl': 'TextEdit', 'name:lv': 'TextEdit', 'name:lt': 'TextEdit', 'name:la': 'TextEdit', 'name:ko': 'TextEdit', 'name:it': 'TextEdit', 'name:hu': 'TextEdit', 'name:hr': 'TextEdit', 'name:fr': 'TextEdit', 'name:es': 'TextEdit', 'name:eo': 'TextEdit', 'name:en': 'TextEdit', 'name:el': 'TextEdit', 'name:de': 'TextEdit', 'name:cs': 'TextEdit', 'name:crh': 'TextEdit', 'name:ca': 'TextEdit', 'name:be-tarask': 'TextEdit', 'name:be': 'TextEdit', 'koatuu': 'TextEdit', 'katotth': 'TextEdit', 'is_in:country_code': 'TextEdit', 'is_in:country': 'TextEdit', 'int_name': 'TextEdit', 'boundary': 'TextEdit', 'admin_level': 'TextEdit', 'addr:country': 'TextEdit', 'ISO3166-2': 'TextEdit', });
lyr_name__1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'railway': 'no label', 'public_transport': 'no label', 'train': 'no label', 'station': 'no label', 'description': 'no label', 'building:use': 'no label', 'building': 'no label', 'addr:city': 'no label', 'name:qt': 'no label', 'wikipedia:ru': 'no label', 'wikipedia:pl': 'no label', 'population:date': 'no label', 'population': 'no label', 'place': 'no label', 'name:sr': 'no label', 'name:kn': 'no label', 'name:io': 'no label', 'addr:region:ru': 'no label', 'addr:region': 'no label', 'addr:postcode': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'timezone': 'no label', 'ref:uk': 'no label', 'official_status': 'no label', 'name:zh-Hant': 'no label', 'name:zh-Hans': 'no label', 'name:zh': 'no label', 'name:uk': 'no label', 'name:tr': 'no label', 'name:sk': 'no label', 'name:ru': 'no label', 'name:ro': 'no label', 'name:pt': 'no label', 'name:pl': 'no label', 'name:nl': 'no label', 'name:lv': 'no label', 'name:lt': 'no label', 'name:la': 'no label', 'name:ko': 'no label', 'name:it': 'no label', 'name:hu': 'no label', 'name:hr': 'no label', 'name:fr': 'no label', 'name:es': 'no label', 'name:eo': 'no label', 'name:en': 'no label', 'name:el': 'no label', 'name:de': 'no label', 'name:cs': 'header label - visible with data', 'name:crh': 'header label - visible with data', 'name:ca': 'no label', 'name:be-tarask': 'no label', 'name:be': 'no label', 'koatuu': 'no label', 'katotth': 'no label', 'is_in:country_code': 'no label', 'is_in:country': 'no label', 'int_name': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'addr:country': 'no label', 'ISO3166-2': 'no label', });
lyr_name__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});