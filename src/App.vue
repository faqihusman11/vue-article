<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-img
        :aspect-ratio="16 / 9"
        max-height="500"
        src="https://png.pngtree.com/thumb_back/fh260/back_pic/02/51/79/3957837a1b1e0d0.jpg"
      ></v-img>
      <v-container fluid>
        <div
          style="
            text-align: center;
            font-size: 32px;
            border-top: 1px solid #eaeaea;
            border-bottom: 1px solid #eaeaea;
            margin: 20px 0;
            padding: 20px 0;
          "
        >
          <h1>Article List</h1>
        </div>
        <List />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar';
import List from '@/components/List';

export default {
  name: 'App',
  components: {
    AppBar,
    List,
  },
};
</script>
