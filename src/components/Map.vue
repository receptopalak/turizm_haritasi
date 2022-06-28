<template>
  <button @click="title = 'Changed Popup Title'">Change Title</button>
  <div id="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted } from "vue";
import { createApp, defineComponent, ref, nextTick } from "vue";
export default {
  setup() {
    const title = ref("Unchanged Popup Title");
    onMounted(() => {
      mapboxgl.accessToken = "pk.eyJ1IjoiZGluY2VydXlndW4iLCJhIjoiY2p2cW1wNXMzMGxobTQ0bzg1d2xsMGx2ciJ9.J9sLGczVT3cT3yM4U_-DaA";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v9",
      });
      map.on("load", () => {
        // Here we want to load a layer
        map.addSource("usa", {
          type: "geojson",
          data:
            "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA.geo.json",
        });
        map.addLayer({
          id: "usa-fill",
          type: "fill",
          source: "usa",
          paint: {
            "fill-color": "red",
          },
        });
        // Here we want to setup the dropdown
       
      });
    });
    return { title };
  },
};
</script>

<style>
#map {
  height: 100vh;
}
</style>