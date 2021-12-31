<template>
  <q-page class="flex column">
    <div class="constrain q-pa-md">
      <q-icon
        name="my_location"
        @click="getLocation"
        size="30px"
        />
    </div>

    <div class="app">
      <div id="map"></div>
    </div>
  </q-page>
</template>

<script>
import { Loader } from "google-maps";

export default {
  name: "Contact",
  data() {
    return{
      lat: null,
      lon: null,
    }

  },
  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log('position: ', position)
          this.lat = position.coords.latitude
          this.lon = position.coords.longitude
        },
      )
    },
  },

}
</script>

<style scoped>
.constrain {
  margin: 0 auto;
}
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
