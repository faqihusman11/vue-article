import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listItem: [],
    item: {},
    isLoading: false,
  },
  mutations: {
    setList(state, payload) {
      state.listItem = [];
      state.listItem.push(...payload);
    },
    setItem(state, payload) {
      state.item = {};
      state.item = payload;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async setList({ commit }, page) {
      let currentPage = page;
      commit('setLoading', true);
      await axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`,
      })
        .then((response) => {
          commit('setList', response.data);
          commit('setLoading', false);
        })
        .catch((error) => {
          throw new Error(`${error}`);
        });
    },
    async setItem({ commit }, id) {
      commit('setLoading', true);
      await axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      })
        .then((response) => {
          commit('setItem', response.data);
          commit('setLoading', false);
        })
        .catch((error) => {
          throw new Error(`${error}`);
        });
    },
  },
  getters: {
    getList: (state) => state.listItem,
    getItem: (state) => state.item,
    getLoading: (state) => state.isLoading,
  },
});
