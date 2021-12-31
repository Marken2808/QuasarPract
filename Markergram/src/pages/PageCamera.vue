<template>
  <q-page class="constrain q-pa-md">
    <div class="camera-frame text-center q-pa-md">
      <video
        ref="video"
        playsinline
        autoplay
      />
    </div>

    <div class="text-center q-pa-md">
      <q-btn
        round
        color="grey-10"
        icon="eva-camera"
        v-if="hasCameraSupport"
      />

      <q-file
        v-else
        label="Choose an image"
        outlined
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageCamera',
  data(){
    return{
      hasCameraSupport: true
    }
  },
  methods:{
    initCamera(){
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      }).catch(error => {
        this.hasCameraSupport = false
      })

    }
  },
  mounted() {
    this.initCamera()
  }

}
</script>

<style lang="sass">
  .camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>
