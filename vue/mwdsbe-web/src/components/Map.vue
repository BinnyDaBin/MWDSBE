<template>
	<div id="map"></div>
</template>

<script>
import L from "leaflet";
// import {LMap, LTileLayer} from 'vue2-leaflet';

export default {
	name: "Map",
	data() {
		return {
			map: null,
			tileLayer: null,
			layers: [
				{
					id: 0,
					name: 'Company',
					features: []
				}
			]
			// mapOptions: {minZoom: 11, maxZoom:16},
			// zoom: 11,
			// bounds: [[39.86747186, -75.28030675], [40.13793484, -74.95574856]],
			// url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}@2x.png',
			// attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
			// subdomains: 'abcd'
		}
	},
	mounted() {
		this.initMap();
		this.initLaters();
		// var map = L.map("map").fitBounds([
		// 	[39.86747186, -75.28030675],
		// 	[40.13793484, -74.95574856]
	// ]);
		
	// L.tileLayer(
	// 	'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}@2x.png',
	// 	{
	// 		attribution:
	// 			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	// 		subdomains: 'abcd',
	// 		maxZoom: 18
	// 	}
	// ).addTo(map);

	// var layer = L.marker([39.940278, -75.153351]).addTo(map);
	// layer.bindTooltip('<b>Company Name</b>');

	// function onMapClick() {
	// 	L.popup()
	// 		.setLatLng(e.latlng)
	// 		.setContent('<b>Location: </b>' + e.latlng.toString())
	// 		.openOn(mymap);
	// }

	// map.on('click', onMapClick);
    },
    methods: {
		initMap() {
			this.map = L.map('map').fitBounds([[39.86747186, -75.28030675], [40.13793484, -74.95574856]]);
			this.tileLayer = L.tileLayer(
			'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}@2x.png',
			{
				maxZoom: 18,
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
				subdomains: 'abcd'
			}
			);
			this.tileLayer.addTo(this.map);
		},
		initLayers() {},
    }
}
</script>

<style scoped>
	#map {
		width: 600px;
		height: 400px;
	}
</style>