<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white text-grey-10"
      bordered
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="text-center">
          Markergram
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="eva-paper-plane-outline"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-footer
      class="bg-white"
      bordered
    >
      <q-tabs
        class="text-grey-10"
        active-color="primary"
        indicator-color="transparent"
      >
        <q-route-tab
          to="/"
          icon="eva-home-outline"
        />
        <q-route-tab
          to="#"
          icon="eva-search-outline"
        />
        <q-route-tab
          to="/camera"
          icon="eva-camera-outline"
        />
        <q-route-tab
          to=""
          icon="eva-heart-outline"
        />
        <q-route-tab
          to=""
          icon="eva-person-outline"
        />
      </q-tabs>
    </q-footer>


    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
  .q-footer
    .q-tab__icon
      font-size: 30px
</style>
