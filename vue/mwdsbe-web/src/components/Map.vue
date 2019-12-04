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

    var MSAStyle = {
      color: "#949190",
      weight: 5,
      opacity: 0.65
    };

    //     var nhoodsStyle = {
    //       color: "#0B0B0A",
    //       fillColor: "#80CC10",
    //       weight: 5,
    //       opacity: 0.8
    //     };

    L.geoJson(PhillyMSA, {
      style: MSAStyle
    }).addTo(map);
    //     L.geoJson(numberByNhoods, {
    //       style: nhoodsStyle
    //     }).addTo(map);

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

    L.geoJson(numberByNhoods, {
      style: style
    }).addTo(map);

    var geojsonMarkerOptions = {
      radius: 8,
      fillColor: "#DAF7A6",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.6
    };

    L.geoJSON(CompanyData, {
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
      }
    })
      .bindTooltip(function(layer) {
        return layer.feature.properties.company_name;
      })
      .addTo(map);

    //     L.geoJson(CompanyData, {
    //       style: {
    //         color: "#ff7800"
    //       }
    //     })
    //       .bindTooltip(function(layer) {
    //         return layer.feature.properties.company_name;
    //       })
    //       .addTo(map);
  }

  // circle markers

  //     var geojsonMarkerOptions = {
  //       radius: 8,
  //       fillColor: "#DAF7A6",
  //       color: "#000",
  //       weight: 1,
  //       opacity: 1,
  //       fillOpacity: 0.8
  //     };

  //   L.geoJSON(this.geojsonFeature, {
  //     pointToLayer: function(feature, latlng) {
  //       return L.circleMarker(latlng, geojsonMarkerOptions);
  //     }
  //   }).bindTooltip(function(layer) {
  //   return layer.feature.properties.company_name;
  // })
  // .addTo(map);
};
</script>

<style scoped>
#map {
  width: 600px;
  height: 400px;
}
</style>