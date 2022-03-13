<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="$emit('closeModal')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="socialMediaModal = true">Share</v-btn>
          <SocialMedia
            v-if="socialMediaModal"
            :modal="socialMediaModal"
            @close="socialMediaModal = false"
          />
        </v-toolbar-items>
      </v-toolbar>
      <v-img
        height="500"
        src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
      ></v-img>
      <v-divider></v-divider>
      <v-card-title style="min-height: 125px">
        {{ item.title }}
      </v-card-title>
      <v-card-subtitle>{{ item.body }}</v-card-subtitle>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';
import SocialMedia from '@/components/SocialMedia';

export default {
  name: 'Item',
  components: {
    SocialMedia,
  },
  props: {
    dialog: {
      type: Boolean,
    },
  },
  data: () => ({
    socialMediaModal: false,
  }),
  computed: {
    ...mapGetters({
      item: 'getItem',
    }),
  },
};
</script>
