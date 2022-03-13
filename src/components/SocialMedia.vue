<template>
  <v-dialog v-model="modal" max-width="400" @click:outside="$emit('close')">
    <v-card>
      <v-card-title class="text-h5">
        <span>Share to Social Media</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-4">
        <v-btn
          v-for="(item, index) in listSocialMedia"
          :key="index"
          :href="`${item.link}`"
          target="_blank"
          class="mr-5"
          icon
        >
          <v-icon size="40">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'SocialMedia',
  props: {
    modal: {
      type: Boolean,
    },
  },
  data: () => ({
    listSocialMedia: [
      {
        name: 'Facebook',
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/',
      },
      { name: 'Twitter', icon: 'mdi-twitter', link: 'https://twitter.com/' },
      {
        name: 'Instagram',
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/',
      },
    ],
  }),
};
</script>
