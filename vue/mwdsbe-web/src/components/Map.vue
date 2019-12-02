<template>
    <div id="map"></div>
</template>

<script>
import L from "leaflet";

export default {
    name: "Map",
    data() {
        return {
            map: null
        }
    },
    mounted() {
	var map = L.map("map").fitBounds([
			[39.86747186, -75.28030675],
			[40.13793484, -74.95574856]
	]);
		
	L.tileLayer(
		'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}@2x.png',
		{
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
			subdomains: 'abcd',
			maxZoom: 18
		}
	).addTo(map);

	var layer = L.marker([39.940278, -75.153351]).addTo(map);
	layer.bindTooltip('<b>Hello world!</b><br>I am a popup.');

	// function onMapClick() {
	// 	L.popup()
	// 		.setLatLng(e.latlng)
	// 		.setContent('<b>Location: </b>' + e.latlng.toString())
	// 		.openOn(mymap);
	// }

	// map.on('click', onMapClick);
    }
}
</script>

<style scoped>
	#map {
		width: 600px;
		height: 400px;
	}
</style>