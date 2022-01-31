<template>
  <div class="crypto-dashboard-container">
    <crypto-header-card :balance="balance" />
    <div class="crypto-dashboard-list">
      <p class="crypto-dashboard-description">Recent</p>
      <crypto-list />
      <div class="button-container">
        <button class="crypto-btn">show all transaction</button>
      </div>
      <div>
        <crypto-footer />
      </div>
    </div>
  </div>
</template>

<script>
import CryptoFooter from '../components/CryptoFooter.vue';
import CryptoHeaderCard from '../components/CryptoHeaderCard.vue';
import CryptoList from '../components/CryptoList.vue';

export default {
  components: { CryptoHeaderCard, CryptoList, CryptoFooter },
  data() {
    return {
      balance: 890000,
    };
  },
};
</script>

<style lang="scss">
.crypto-dashboard-container {
  background: var(--main-blue);
  height: 100%;
}
.crypto-dashboard-list{
  background: var(--main-white);
  border-radius: var(--second-border) var(--second-border) 0px  0px;
}

.crypto-dashboard-description {
  display: flex;
  padding-top: 32px;
  justify-content: center;
  color: var(--main-gray)
}

.button-container {
  display: flex;
  justify-content: center;
  padding: 32px 16px 0;
}
.crypto-btn {
  background: var(--main-blue);
  border-radius: var(--first-border);
  color: var(--main-white);
  border: none;
  min-height: 64px;
  width: 100%;
}
</style>
