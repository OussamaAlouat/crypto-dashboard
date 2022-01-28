<template>
  <div class="content">
    <div class="align-start crypto-details">
      <div class="crypto-img-container"><img class="crypto-img" /></div>
      <div class="crypto-container">
        <span class="crypto-name">Bitcoin</span>
        <span class="crypto-short-name">BTC</span>
      </div>

    </div>

    <div class="crypto-container align-end">
      <span>$38.729</span>
      <span class="crypto-percentage">+1,34%</span>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.crypto-percentage{
  font-size: var(--text-3);
  color: var(--main-green)
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
}

.align-end {
  text-align: end;
}

.align-start {
  text-align: start;
}
</style>
