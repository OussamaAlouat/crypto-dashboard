import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cryptos:
      [
        {
          id: 'c059026a-222e-4ac3-ab10-e4e513c0c546',
          name: 'Bitcoin',
          sku: 'BTC',
          stock: 38729.01,
          variant: 1.34,
        },
        {
          id: 'd3ac6377-9a0a-45a9-8bac-d75f9f056536',
          name: 'Ethereum',
          sku: 'ETH',
          stock: 2613.72,
          variant: -8.02,
        },
        {
          id: '59b2872d-5c40-47c3-9716-3910095aa23b',
          name: 'Cardano',
          sku: 'ADA',
          stock: 874.31,
          variant: 10.77,
        },
        {
          id: '4124eeb5-13f6-4e8b-9a57-f458549a1aee',
          name: 'Terra',
          sku: 'LUNA',
          stock: 41198.56,
          variant: -20.03,
        },
      ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
