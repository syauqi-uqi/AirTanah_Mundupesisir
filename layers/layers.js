var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_IDW_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW<br />\
    <img src="styles/legend/IDW_1_0.png" /> -1,7168<br />\
    <img src="styles/legend/IDW_1_1.png" /> 1,2103<br />\
    <img src="styles/legend/IDW_1_2.png" /> 4,1374<br />\
    <img src="styles/legend/IDW_1_3.png" /> 7,0645<br />\
    <img src="styles/legend/IDW_1_4.png" /> 9,9916<br />\
    <img src="styles/legend/IDW_1_5.png" /> 12,9188<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12087106.521451, -755510.191471, 12089065.547231, -752401.170680]
        })
    });
var format_PotensialHidrogen_2 = new ol.format.GeoJSON();
var features_PotensialHidrogen_2 = format_PotensialHidrogen_2.readFeatures(json_PotensialHidrogen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensialHidrogen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensialHidrogen_2.addFeatures(features_PotensialHidrogen_2);
var lyr_PotensialHidrogen_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotensialHidrogen_2, 
                style: style_PotensialHidrogen_2,
                popuplayertitle: 'Potensial Hidrogen',
                interactive: false,
    title: 'Potensial Hidrogen<br />\
    <img src="styles/legend/PotensialHidrogen_2_0.png" /> 7,00 - 7,33 (Netral)<br />\
    <img src="styles/legend/PotensialHidrogen_2_1.png" /> 7,33 - 7,66 (Netral)<br />\
    <img src="styles/legend/PotensialHidrogen_2_2.png" /> 7,66 - 7,99 (Netral)<br />\
    <img src="styles/legend/PotensialHidrogen_2_3.png" /> 7,99 - 8,33 (Basa)<br />\
    <img src="styles/legend/PotensialHidrogen_2_4.png" /> 8,33 - 8,66 (Basa)<br />\
    <img src="styles/legend/PotensialHidrogen_2_5.png" /> 8,66 - 8,99 (Basa)<br />' });
var format_Kontur_3 = new ol.format.GeoJSON();
var features_Kontur_3 = format_Kontur_3.readFeatures(json_Kontur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_3.addFeatures(features_Kontur_3);
var lyr_Kontur_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kontur_3, 
                style: style_Kontur_3,
                popuplayertitle: 'Kontur',
                interactive: false,
                title: '<img src="styles/legend/Kontur_3.png" /> Kontur'
            });
var format_LokasiSampelSumur_4 = new ol.format.GeoJSON();
var features_LokasiSampelSumur_4 = format_LokasiSampelSumur_4.readFeatures(json_LokasiSampelSumur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiSampelSumur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiSampelSumur_4.addFeatures(features_LokasiSampelSumur_4);
var lyr_LokasiSampelSumur_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiSampelSumur_4, 
                style: style_LokasiSampelSumur_4,
                popuplayertitle: 'Lokasi Sampel Sumur',
                interactive: false,
                title: '<img src="styles/legend/LokasiSampelSumur_4.png" /> Lokasi Sampel Sumur'
            });
var format_BatasDusun_5 = new ol.format.GeoJSON();
var features_BatasDusun_5 = format_BatasDusun_5.readFeatures(json_BatasDusun_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDusun_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDusun_5.addFeatures(features_BatasDusun_5);
var lyr_BatasDusun_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDusun_5, 
                style: style_BatasDusun_5,
                popuplayertitle: 'Batas Dusun',
                interactive: false,
                title: '<img src="styles/legend/BatasDusun_5.png" /> Batas Dusun'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_IDW_1.setVisible(true);lyr_PotensialHidrogen_2.setVisible(true);lyr_Kontur_3.setVisible(true);lyr_LokasiSampelSumur_4.setVisible(true);lyr_BatasDusun_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_IDW_1,lyr_PotensialHidrogen_2,lyr_Kontur_3,lyr_LokasiSampelSumur_4,lyr_BatasDusun_5];
lyr_PotensialHidrogen_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Kontur_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Contour': 'Contour', 'Shape_Leng': 'Shape_Leng', });
lyr_LokasiSampelSumur_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'TotalHead': 'TotalHead', 'Id': 'Id', 'TH': 'TH', 'Easting': 'Easting', 'OID_': 'OID_', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'TimeSpan': 'TimeSpan', 'TimeStamp': 'TimeStamp', 'BeginTime': 'BeginTime', 'EndTime': 'EndTime', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'ph': 'ph', 'Title': 'Title', 'X': 'X', 'Y': 'Y', });
lyr_BatasDusun_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'Dusun': 'Dusun', 'Batas_RW': 'Batas_RW', 'Luas_1': 'Luas_1', 'J_Penduduk': 'J_Penduduk', 'JP_LK': 'JP_LK', 'JP_PR': 'JP_PR', 'U_15_11': 'U_15_11', 'U_12_60': 'U_12_60', 'U___60': 'U___60', 'Disabilita': 'Disabilita', 'p_p__600': 'p_p__600', 'J_Pengangg': 'J_Pengangg', 'Rasio_Jeni': 'Rasio_Jeni', 'Rasio_Kepa': 'Rasio_Kepa', 'Rasio_PM': 'Rasio_PM', 'Rasio_Umur': 'Rasio_Umur', 'Rasio_Disa': 'Rasio_Disa', 'IKS': 'IKS', });
lyr_PotensialHidrogen_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Kontur_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Contour': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_LokasiSampelSumur_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'TotalHead': 'TextEdit', 'Id': 'TextEdit', 'TH': 'TextEdit', 'Easting': 'TextEdit', 'OID_': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'TimeSpan': 'TextEdit', 'TimeStamp': 'TextEdit', 'BeginTime': 'TextEdit', 'EndTime': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'TextEdit', 'LabelID': 'TextEdit', 'ph': 'TextEdit', 'Title': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_BatasDusun_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'Dusun': 'TextEdit', 'Batas_RW': 'TextEdit', 'Luas_1': 'TextEdit', 'J_Penduduk': 'TextEdit', 'JP_LK': 'TextEdit', 'JP_PR': 'TextEdit', 'U_15_11': 'TextEdit', 'U_12_60': 'Range', 'U___60': 'TextEdit', 'Disabilita': 'TextEdit', 'p_p__600': 'TextEdit', 'J_Pengangg': 'TextEdit', 'Rasio_Jeni': 'TextEdit', 'Rasio_Kepa': 'TextEdit', 'Rasio_PM': 'TextEdit', 'Rasio_Umur': 'TextEdit', 'Rasio_Disa': 'TextEdit', 'IKS': 'TextEdit', });
lyr_PotensialHidrogen_2.set('fieldLabels', {'Id': 'inline label - visible with data', 'gridcode': 'inline label - visible with data', });
lyr_Kontur_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Contour': 'no label', 'Shape_Leng': 'no label', });
lyr_LokasiSampelSumur_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'TotalHead': 'no label', 'Id': 'no label', 'TH': 'no label', 'Easting': 'no label', 'OID_': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'TimeSpan': 'no label', 'TimeStamp': 'no label', 'BeginTime': 'no label', 'EndTime': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'ph': 'no label', 'Title': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_BatasDusun_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'Dusun': 'no label', 'Batas_RW': 'no label', 'Luas_1': 'no label', 'J_Penduduk': 'no label', 'JP_LK': 'no label', 'JP_PR': 'no label', 'U_15_11': 'no label', 'U_12_60': 'no label', 'U___60': 'no label', 'Disabilita': 'no label', 'p_p__600': 'no label', 'J_Pengangg': 'no label', 'Rasio_Jeni': 'no label', 'Rasio_Kepa': 'no label', 'Rasio_PM': 'no label', 'Rasio_Umur': 'no label', 'Rasio_Disa': 'no label', 'IKS': 'no label', });
lyr_BatasDusun_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});