<template>
  <div id="map">
    <div id="left" class="sidebar flex-center left collapsed">
      <div class="sidebar-content rounded-rect flex-center">
        Left Sidebar
        <div
          class="sidebar-toggle rounded-rect left"
          @click="toggleSidebar('left')"
        >
          &rarr;
        </div>
      </div>
    </div>
    <div id="right" class="sidebar flex-center right collapsed">
      <div class="sidebar-content rounded-rect flex-center">
        Right Sidebar
        <div
          class="sidebar-toggle rounded-rect right"
          @click="toggleSidebar('right')"
        >
          &larr;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
export default {
  setup() {
    
    const toggleSidebar = function(id) {
      const elem = document.getElementById(id);
      // Add or remove the 'collapsed' CSS class from the sidebar element.
      // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
      const collapsed = elem.classList.toggle("collapsed");
      const padding = {};
      // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
      padding[id] = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
      // Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
      map.easeTo({
        padding: padding,
        duration: 1000, // In ms. This matches the CSS transition duration property.
      });
    }

    onMounted(() => {
      mapboxgl.accessToken = import.meta.env.VITE_MAP_ACCESS_TOKEN;
      const center = [-77.01866, 38.888];
      const map = new mapboxgl.Map({
        container: "map",
        zoom: 12.5,
        center: center,
        pitch: 60,
        style: "mapbox://styles/mapbox/streets-v11",
      });

      new mapboxgl.Marker().setLngLat(center).addTo(map);

      map.on("load", () => {
       
      });
    });
    return {
        toggleSidebar
    }
  },
};
</script>

<style>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
.rounded-rect {
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 50px -25px black;
}

.flex-center {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-center.left {
  left: 0px;
}

.flex-center.right {
  right: 0px;
}

.sidebar-content {
  position: absolute;
  width: 95%;
  height: 95%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  color: gray;
}

.sidebar-toggle {
  position: absolute;
  width: 1.3em;
  height: 1.3em;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar-toggle.left {
  right: -1.5em;
}

.sidebar-toggle.right {
  left: -1.5em;
}

.sidebar-toggle:hover {
  color: #0aa1cf;
  cursor: pointer;
}

.sidebar {
  transition: transform 1s;
  z-index: 1;
  width: 300px;
  height: 100%;
}

/*
The sidebar styling has them "expanded" by default, we use CSS transforms to push them offscreen
The toggleSidebar() function removes this class from the element in order to expand it.
*/
.left.collapsed {
  transform: translateX(-295px);
}

.right.collapsed {
  transform: translateX(295px);
}
</style>