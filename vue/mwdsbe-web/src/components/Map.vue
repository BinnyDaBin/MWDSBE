<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";
// import {LMap, LTileLayer} from 'vue2-leaflet';
import CompanyData from "../data/company.json";
import PhillyMSA from "../data/Philly_MSA.json";
// import Neighborhoods from "../data/neighborhoods.json";
import numberByNhoods from "../data/n_neighborhoods.json";
import markerIcon from "../assets/marker.png";

export default {
  name: "Map",
  data() {
    return {
      map: null
    };
  },
  mounted() {
    var map = L.map("map").fitBounds([
      [39.86747186, -75.28030675],
      [40.13793484, -74.95574856]
    ]);

    L.tileLayer(
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}@2x.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 18
      }
    ).addTo(map);

    // Philadelphia MSA boundary
    var MSAStyle = {
      color: "#949190",
      weight: 5,
      opacity: 0.65
    };

    L.geoJson(PhillyMSA, {
      style: MSAStyle
    }).addTo(map);

    // Company Locations
    function getColor(n) {
      return n > 1000
        ? "#800026"
        : n > 500
        ? "#BD0026"
        : n > 200
        ? "#E31A1C"
        : n > 100
        ? "#FC4E2A"
        : n > 50
        ? "#FD8D3C"
        : n > 20
        ? "#FEB24C"
        : n > 10
        ? "#FED976"
        : "#FFEDA0";
    }

    function style(feature) {
      return {
        fillColor: getColor(feature.properties.N),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7
      };
    }

    // Neighborhoods
    L.geoJson(numberByNhoods, {
      style: style
    }).addTo(map);

    var marker = L.icon({
      iconUrl: markerIcon,

      iconSize: [20, 20]
    });

    L.geoJSON(CompanyData, {
      pointToLayer: function(feature, latlng) {
        return L.marker(latlng, { icon: marker });
      }
    })
      .bindTooltip(function(layer) {
        return layer.feature.properties.company_name;
      })
      .addTo(map);
  }
};
</script>

<style scoped>
#map {
  width: 600px;
  height: 400px;
}
</style>