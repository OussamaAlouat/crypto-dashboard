<template>
  <div class="content">
    <div class="align-start crypto-details">
      <div class="crypto-img-container"><img class="crypto-img" /></div>
      <div class="crypto-container">
        <span class="crypto-name">{{ name }}</span>
        <span class="crypto-short-name">{{ sku }}</span>
      </div>

    </div>

    <div class="crypto-container align-end">
      <span>${{ stock }}</span>
      <span
        :class="[variant > 0 ? 'green-color' : 'red-color', 'crypto-percentage']"
      >
        {{ getVariantWithSign }}%
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CryptoCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    variant: {
      type: Number,
      required: true,
    },
  },

  computed: {
    getVariantWithSign() {
      return this.variant > 0 ? `+${this.variant}` : this.variant;
    },
  },
};
</script>

<style>
.red-color {
  color: var(--main-red)
}

.green-color {
  color: var(--main-green)
}

.crypto-percentage{
  font-size: var(--text-3);
}

.crypto-short-name {
  color: var(--main-gray);
  font-weight: 400;
}
.crypto-name {
  font-weight: 700;
  font-size: var(--text-2);
}

.crypto-img-container {
  padding-right: 2rem;
}
.crypto-details {
  display: flex;
  flex-direction: row;
}

.crypto-img {
  background: var(--main-gray);
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.content {
  display: flex;
  justify-content: space-around;
}

.crypto-container {
  display: flex;
  flex-direction: column;
  min-width: 100px;
}

.align-end {
  text-align: end;
}

.align-start {
  text-align: start;
}
</style>
