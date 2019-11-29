var app = new Vue({
	el: '#app',
	data: {
		todos: [
			{ text: 'Plotting Map' },
			{ text: 'Set view in Philadelphia' },
			{ text: 'Plot compnay locations using markers' }
		],
		mymap: null
	},
	mounted() {
		var mymap = L.map('mapid').fitBounds([
			[39.86747186, -75.28030675],
			[40.13793484, -74.95574856]
		]);

		L.tileLayer(
			'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}@2x.png',
			{
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
				subdomains: 'abcd'
			}
		).addTo(mymap);

		L.marker([51.5, -0.09]).addTo(mymap);
		// marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

		function onMapClick(e) {
			L.popup()
				.setLatLng(e.latlng)
				.setContent('<b>Location: </b>' + e.latlng.toString())
				.openOn(mymap);
		}

		mymap.on('click', onMapClick);
	}
});
