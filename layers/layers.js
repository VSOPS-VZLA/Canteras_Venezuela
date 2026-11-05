var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LmitesInternacionales_1 = new ol.format.GeoJSON();
var features_LmitesInternacionales_1 = format_LmitesInternacionales_1.readFeatures(json_LmitesInternacionales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitesInternacionales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitesInternacionales_1.addFeatures(features_LmitesInternacionales_1);
var lyr_LmitesInternacionales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmitesInternacionales_1, 
                style: style_LmitesInternacionales_1,
                popuplayertitle: 'Límites Internacionales',
                interactive: false,
                title: '<img src="styles/legend/LmitesInternacionales_1.png" /> Límites Internacionales'
            });
var format_ConcentraciondeCanteras_2 = new ol.format.GeoJSON();
var features_ConcentraciondeCanteras_2 = format_ConcentraciondeCanteras_2.readFeatures(json_ConcentraciondeCanteras_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConcentraciondeCanteras_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConcentraciondeCanteras_2.addFeatures(features_ConcentraciondeCanteras_2);
var lyr_ConcentraciondeCanteras_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConcentraciondeCanteras_2, 
                style: style_ConcentraciondeCanteras_2,
                popuplayertitle: 'Concentracion de Canteras',
                interactive: true,
    title: 'Concentracion de Canteras<br />\
    <img src="styles/legend/ConcentraciondeCanteras_2_0.png" /> <5<br />\
    <img src="styles/legend/ConcentraciondeCanteras_2_1.png" /> 5 - 10<br />\
    <img src="styles/legend/ConcentraciondeCanteras_2_2.png" /> 10-15<br />\
    <img src="styles/legend/ConcentraciondeCanteras_2_3.png" /> > 15<br />' });
var format_LmitesEstadales_3 = new ol.format.GeoJSON();
var features_LmitesEstadales_3 = format_LmitesEstadales_3.readFeatures(json_LmitesEstadales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitesEstadales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitesEstadales_3.addFeatures(features_LmitesEstadales_3);
var lyr_LmitesEstadales_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmitesEstadales_3, 
                style: style_LmitesEstadales_3,
                popuplayertitle: 'Límites Estadales',
                interactive: false,
                title: '<img src="styles/legend/LmitesEstadales_3.png" /> Límites Estadales'
            });
var format_LmitesMunicipales_4 = new ol.format.GeoJSON();
var features_LmitesMunicipales_4 = format_LmitesMunicipales_4.readFeatures(json_LmitesMunicipales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitesMunicipales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitesMunicipales_4.addFeatures(features_LmitesMunicipales_4);
var lyr_LmitesMunicipales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmitesMunicipales_4, 
                style: style_LmitesMunicipales_4,
                popuplayertitle: 'Límites Municipales',
                interactive: false,
                title: '<img src="styles/legend/LmitesMunicipales_4.png" /> Límites Municipales'
            });
var format_MINEC_SIGOT042022Vialidad_5 = new ol.format.GeoJSON();
var features_MINEC_SIGOT042022Vialidad_5 = format_MINEC_SIGOT042022Vialidad_5.readFeatures(json_MINEC_SIGOT042022Vialidad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINEC_SIGOT042022Vialidad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINEC_SIGOT042022Vialidad_5.addFeatures(features_MINEC_SIGOT042022Vialidad_5);
var lyr_MINEC_SIGOT042022Vialidad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINEC_SIGOT042022Vialidad_5, 
                style: style_MINEC_SIGOT042022Vialidad_5,
                popuplayertitle: 'MINEC_SIGOT 04 2022 — Vialidad',
                interactive: false,
                title: '<img src="styles/legend/MINEC_SIGOT042022Vialidad_5.png" /> MINEC_SIGOT 04 2022 — Vialidad'
            });
var format_Canteras_6 = new ol.format.GeoJSON();
var features_Canteras_6 = format_Canteras_6.readFeatures(json_Canteras_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canteras_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canteras_6.addFeatures(features_Canteras_6);
var lyr_Canteras_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Canteras_6, 
                style: style_Canteras_6,
                popuplayertitle: 'Canteras',
                interactive: true,
                title: '<img src="styles/legend/Canteras_6.png" /> Canteras'
            });
var format_Construpatria_7 = new ol.format.GeoJSON();
var features_Construpatria_7 = format_Construpatria_7.readFeatures(json_Construpatria_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Construpatria_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Construpatria_7.addFeatures(features_Construpatria_7);
var lyr_Construpatria_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Construpatria_7, 
                style: style_Construpatria_7,
                popuplayertitle: 'Construpatria',
                interactive: true,
                title: '<img src="styles/legend/Construpatria_7.png" /> Construpatria'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_LmitesInternacionales_1.setVisible(true);lyr_ConcentraciondeCanteras_2.setVisible(true);lyr_LmitesEstadales_3.setVisible(true);lyr_LmitesMunicipales_4.setVisible(true);lyr_MINEC_SIGOT042022Vialidad_5.setVisible(true);lyr_Canteras_6.setVisible(true);lyr_Construpatria_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_LmitesInternacionales_1,lyr_ConcentraciondeCanteras_2,lyr_LmitesEstadales_3,lyr_LmitesMunicipales_4,lyr_MINEC_SIGOT042022Vialidad_5,lyr_Canteras_6,lyr_Construpatria_7];
lyr_LmitesInternacionales_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'NOMBRE_OFC': 'NOMBRE_OFC', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_ConcentraciondeCanteras_2.set('fieldAliases', {'ESTADO': 'ESTADO', 'iden': 'iden', 'Area_KM2': 'Area_KM2', 'Canteras': 'Canteras', });
lyr_LmitesEstadales_3.set('fieldAliases', {'ESTADO': 'ESTADO', 'iden': 'iden', 'Area_KM2': 'Area_KM2', });
lyr_LmitesMunicipales_4.set('fieldAliases', {'COD_ESTADO': 'COD_ESTADO', 'ESTADO': 'ESTADO', 'CAP_ESTADO': 'CAP_ESTADO', 'COD_MUNIC': 'COD_MUNIC', 'CI_MUNICI': 'CI_MUNICI', 'MUNICIPIO': 'MUNICIPIO', 'CAP_MUNIC': 'CAP_MUNIC', 'NOTA': 'NOTA', 'Area_Km2': 'Area_Km2', });
lyr_MINEC_SIGOT042022Vialidad_5.set('fieldAliases', {'OBJECTID_12': 'OBJECTID_12', 'Nb_via': 'Nb_via', 'Co_tipo_vi': 'Co_tipo_vi', 'Tipo_v�a': 'Tipo_v�a', 'Fuente_via': 'Fuente_via', 'Shape_Length': 'Shape_Length', });
lyr_Canteras_6.set('fieldAliases', {'Nombre': 'Nombre', 'ESTADO': 'Estado', 'MUNICIPIO_': 'Municipio', 'Sitio___Ya': 'Sitio / Yacimietno', 'Direccion': 'Dirección', 'Propiedad': 'Propiedad', 'Tipo_Yacim': 'Tipo de Yacimiento', 'Capacidad': 'Capacidad m3', 'Producció': 'Producción m3', 'Estatus_Op': 'Estatus Operativo', 'Calidad__': 'Calidad', 'Potencial': 'Potencial', 'Vinculado': 'Vinculado a Construpatria', 'Requerimie': 'Observaciones / Requerimientos', 'CORD_ESTE': 'Coordenadas Este', 'CORD_NORTE': 'Coordenadas Norte', 'FICHA': 'Dispone Ficha', 'Link': 'Enlace WEB', 'Tipo_Elem': 'Tipo de Elemento', });
lyr_Construpatria_7.set('fieldAliases', {'Nombre': 'Nombre', 'ESTADO': 'Estado', 'MUNICIPIO_': 'Municipio', 'Sitio___Ya': 'Sitio / Yacimietno', 'Direccion': 'Dirección', 'Propiedad': 'Propiedad', 'Tipo_Yacim': 'Tipo de Yacimiento', 'Capacidad': 'Capacidad m3', 'Producció': 'Producción m3', 'Estatus_Op': 'Estatus Operativo', 'Calidad__': 'Calidad', 'Potencial': 'Potencial', 'Vinculado': 'Vinculado a Construpatria', 'Requerimie': 'Observaciones / Requerimientos', 'CORD_ESTE': 'Coordenadas Este', 'CORD_NORTE': 'Coordenadas Norte', 'FICHA': 'Dispone Ficha', 'Link': 'Enlace WEB', 'Tipo_Elem': 'Tipo de Elemento', });
lyr_LmitesInternacionales_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'NOMBRE_OFC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ConcentraciondeCanteras_2.set('fieldImages', {'ESTADO': 'TextEdit', 'iden': 'TextEdit', 'Area_KM2': 'TextEdit', 'Canteras': 'Range', });
lyr_LmitesEstadales_3.set('fieldImages', {'ESTADO': 'TextEdit', 'iden': 'TextEdit', 'Area_KM2': 'TextEdit', });
lyr_LmitesMunicipales_4.set('fieldImages', {'COD_ESTADO': 'TextEdit', 'ESTADO': 'TextEdit', 'CAP_ESTADO': 'TextEdit', 'COD_MUNIC': 'TextEdit', 'CI_MUNICI': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CAP_MUNIC': 'TextEdit', 'NOTA': 'TextEdit', 'Area_Km2': 'TextEdit', });
lyr_MINEC_SIGOT042022Vialidad_5.set('fieldImages', {'OBJECTID_12': 'Range', 'Nb_via': 'TextEdit', 'Co_tipo_vi': 'TextEdit', 'Tipo_v�a': 'TextEdit', 'Fuente_via': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_Canteras_6.set('fieldImages', {'Nombre': 'TextEdit', 'ESTADO': 'TextEdit', 'MUNICIPIO_': 'TextEdit', 'Sitio___Ya': 'TextEdit', 'Direccion': 'TextEdit', 'Propiedad': 'TextEdit', 'Tipo_Yacim': 'TextEdit', 'Capacidad': 'TextEdit', 'Producció': 'TextEdit', 'Estatus_Op': 'TextEdit', 'Calidad__': 'TextEdit', 'Potencial': 'TextEdit', 'Vinculado': 'TextEdit', 'Requerimie': 'TextEdit', 'CORD_ESTE': 'TextEdit', 'CORD_NORTE': 'TextEdit', 'FICHA': 'TextEdit', 'Link': 'TextEdit', 'Tipo_Elem': 'TextEdit', });
lyr_Construpatria_7.set('fieldImages', {'Nombre': 'TextEdit', 'ESTADO': 'TextEdit', 'MUNICIPIO_': 'TextEdit', 'Sitio___Ya': 'TextEdit', 'Direccion': 'TextEdit', 'Propiedad': 'TextEdit', 'Tipo_Yacim': 'TextEdit', 'Capacidad': 'TextEdit', 'Producció': 'TextEdit', 'Estatus_Op': 'TextEdit', 'Calidad__': 'TextEdit', 'Potencial': 'TextEdit', 'Vinculado': 'TextEdit', 'Requerimie': 'TextEdit', 'CORD_ESTE': 'TextEdit', 'CORD_NORTE': 'TextEdit', 'FICHA': 'TextEdit', 'Link': 'TextEdit', 'Tipo_Elem': 'TextEdit', });
lyr_LmitesInternacionales_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'NOMBRE': 'no label', 'NOMBRE_OFC': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_ConcentraciondeCanteras_2.set('fieldLabels', {'ESTADO': 'no label', 'iden': 'no label', 'Area_KM2': 'no label', 'Canteras': 'no label', });
lyr_LmitesEstadales_3.set('fieldLabels', {'ESTADO': 'no label', 'iden': 'no label', 'Area_KM2': 'no label', });
lyr_LmitesMunicipales_4.set('fieldLabels', {'COD_ESTADO': 'no label', 'ESTADO': 'no label', 'CAP_ESTADO': 'no label', 'COD_MUNIC': 'no label', 'CI_MUNICI': 'no label', 'MUNICIPIO': 'no label', 'CAP_MUNIC': 'no label', 'NOTA': 'no label', 'Area_Km2': 'no label', });
lyr_MINEC_SIGOT042022Vialidad_5.set('fieldLabels', {'OBJECTID_12': 'no label', 'Nb_via': 'no label', 'Co_tipo_vi': 'no label', 'Tipo_v�a': 'no label', 'Fuente_via': 'no label', 'Shape_Length': 'no label', });
lyr_Canteras_6.set('fieldLabels', {'Nombre': 'header label - visible with data', 'ESTADO': 'header label - visible with data', 'MUNICIPIO_': 'header label - visible with data', 'Sitio___Ya': 'header label - visible with data', 'Direccion': 'header label - visible with data', 'Propiedad': 'header label - visible with data', 'Tipo_Yacim': 'header label - visible with data', 'Capacidad': 'header label - visible with data', 'Producció': 'header label - visible with data', 'Estatus_Op': 'header label - visible with data', 'Calidad__': 'header label - visible with data', 'Potencial': 'header label - visible with data', 'Vinculado': 'header label - visible with data', 'Requerimie': 'header label - visible with data', 'CORD_ESTE': 'header label - visible with data', 'CORD_NORTE': 'header label - visible with data', 'FICHA': 'hidden field', 'Link': 'header label - visible with data', 'Tipo_Elem': 'no label', });
lyr_Construpatria_7.set('fieldLabels', {'Nombre': 'header label - visible with data', 'ESTADO': 'header label - visible with data', 'MUNICIPIO_': 'header label - visible with data', 'Sitio___Ya': 'header label - visible with data', 'Direccion': 'header label - visible with data', 'Propiedad': 'header label - visible with data', 'Tipo_Yacim': 'header label - visible with data', 'Capacidad': 'header label - visible with data', 'Producció': 'header label - visible with data', 'Estatus_Op': 'header label - visible with data', 'Calidad__': 'header label - visible with data', 'Potencial': 'header label - visible with data', 'Vinculado': 'header label - visible with data', 'Requerimie': 'header label - visible with data', 'CORD_ESTE': 'header label - visible with data', 'CORD_NORTE': 'header label - visible with data', 'FICHA': 'hidden field', 'Link': 'header label - visible with data', 'Tipo_Elem': 'no label', });
lyr_Construpatria_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});