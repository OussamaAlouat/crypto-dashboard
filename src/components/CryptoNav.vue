<template>
  <div class="crypto-header">
    <span class="crypto-title">{{ title }}</span>
    <div class="crypto-bell-container">
      <i class="crypto-bell k-icon-bell"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.crypto-header {
  background: var(--main-blue);
  min-height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.crypto-title {
  color: var(--main-white);
  font-weight: 500;
  font-size: var(--text-3);
  line-height: 20px;
}
.crypto-bell {
  color: var(--main-white)
}

.crypto-bell-container {
  min-height: 60px;
  width: auto;
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
}
</style>
