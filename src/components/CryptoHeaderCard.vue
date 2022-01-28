<template>
  <div class="header-card">
    <p class="crypto-header-title">
      Your balance
    </p>
    <div class="crypto-balance">$ {{ balance }}</div>
  </div>
</template>

<script>
export default {
  props: {
    balance: {
      type: Number,
      require: true,
      default: 0,
    },
  },
};
</script>

<style>
.header-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: var(--main-blue);
  padding-top: 32px;
  padding-bottom: 32px;
}

.crypto-balance {
  color: var(--main-white);
  font-weight: 500;
  font-size: var(--text-1);
  line-height: 42px;
}

.crypto-header-title {
  color: var(--main-purple);
  font-weight: normal;
  font-size: var(--text-3);
  line-height: 20px;
  letter-spacing: 0.1em;
}
</style>
