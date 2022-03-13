<template>
  <div>
    <v-row>
      <v-col v-for="(item, index) in listItem" :key="index" cols="4">
        <v-card min-height="600" @click="onGetDetail(item.id)">
          <v-img
            src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
            height="350px"
          >
          </v-img>
          <v-divider></v-divider>
          <v-card-title style="min-height: 125px; align-items: start">{{
            item.title
          }}</v-card-title>
          <v-card-subtitle>{{ item.body }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
      v-model="currentPage"
      class="mt-5"
      :length="listItem.length"
      total-visible="6"
      circle
      @input="onChangePage"
    ></v-pagination>
    <Item
      v-if="showModal"
      :dialog="showModal"
      @closeModal="showModal = false"
    />
    <Loader />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loader from '@/components/Loader';
import Item from '@/components/Item';

export default {
  name: 'List',
  components: {
    Loader,
    Item,
  },
  data: () => ({
    dialog: true,
    currentPage: 1,
    showModal: false,
  }),
  computed: {
    ...mapGetters({
      listItem: 'getList',
    }),
  },
  created() {
    this.setList(this.currentPage);
  },
  methods: {
    ...mapActions(['setList', 'setItem']),
    onGetDetail(id) {
      this.showModal = true;
      this.setItem(id);
    },
    onChangePage(page) {
      this.currentPage = page;
      this.setList(page);
    },
  },
};
</script>
