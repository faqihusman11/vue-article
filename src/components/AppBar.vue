<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-5"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
      <h2>Vue Article</h2>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
};
</script>
