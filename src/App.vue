<template>
  <div id="app">
    <crypto-nav :title="title"/>
    <dashboard />
  </div>
</template>

<script>
import CryptoNav from './components/CryptoNav.vue';
import Dashboard from './views/Dashboard.vue';

export default {
  components: { CryptoNav, Dashboard },
  name: 'App',
  data() {
    return {
      title: 'Hi Oussama',
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Roboto';
  font-style: normal;
}

body {
  margin: 0;
}
</style>
