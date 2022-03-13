<template>
  <v-dialog v-model="isLoading" persistent width="300">
    <v-card color="primary" dark>
      <v-card-text class="pt-3">
        Please wait
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0 mt-3"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Loader',
  computed: {
    ...mapGetters({
      isLoading: 'getLoading',
    }),
  },
};
</script>
