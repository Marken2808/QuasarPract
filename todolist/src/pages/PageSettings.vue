<template>
  <q-page padding>
    <p>Settings Page</p>
    <div class="app">
      <div id="map"></div>
    </div>
  </q-page>
</template>

<script>
import { Loader } from "google-maps";

export default {
  name: "Contact",
  methods: {
    initMap() {
      const loader = new Loader("AIzaSyCEkXVCRCM5tjps2nEhJE2HT-vK5KXqh3U");
      let map;
      loader.load().then(function(google) {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 20.9936122, lng: 105.7841426 },
          zoom: 16,
          mapTypeControl: false,
          disableDefaultUI: true,
          zoomControl: true,
          scrollwheel: true
        });
        // new google.maps.Marker({
        //   position: { lat: 20.9936122, lng: 105.7841426 },
        //   map: map,
        //   title: "We are here!"
        // });
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
          });
        }
        google.maps.event.addListener(map, "click", function(event) {
          alert(
            "Latitude: " +
              event.latLng.lat() +
              " " +
              ", longitude: " +
              event.latLng.lng()
          );
        });
      });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style scoped>
.contact {
  border-bottom: 2px solid #f8f9fa;
}
.contact p {
  font-weight: 300;
  text-align: center;
  font-size: 32px;
}
.contact p b {
  font-weight: 700;
}
.contact span {
  margin-left: 12px;
}
#map {
  position: relative;
  width: 100%;
  height: 450px;
}
.detail {
  margin-top: 20px;
}
</style>
