import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
      state: {
          user: []
      },
      mutations: {
          init(state, payload) {
              state.user = payload;
          }
      },
      actions: {
          init({commit}, endpoint) {
              return new Promise(async(res, rej) => {
                  try {
                      const {data} = await axios.get(`https://5fa25f72ba0736001613b895.mockapi.io/${endpoint}`);
                      commit('init', data);
                      res(true);
                  } catch (error) {
                      rej(false);
                  }
              });
          }
      },
      modules: {}
  });
