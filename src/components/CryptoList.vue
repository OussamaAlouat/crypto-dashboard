<template>
  <div>
    <div v-for="crypto in cryptos" :key="crypto.id">
      <crypto-card
        :name="crypto.name"
        :sku="crypto.sku"
        :stock="crypto.stock"
        :variant="crypto.variant"
      ></crypto-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CryptoCard from './CryptoCard.vue';

export default {
  components: { CryptoCard },
  name: 'CriptoList',
  computed: {
    ...mapState(['cryptos']),
  },
};
</script>

<style>

</style>
