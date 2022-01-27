<template>
  <div class="content">
    <img class="crypto-img" />
    <div class="crypto-container align-start">
      <span>Cripto</span>
      <span>Description</span>
    </div>

    <div class="crypto-container align-end">
      <span>$38.729</span>
      <span>+1,34%</span>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.crypto-img {
  background: var(--main-blue);
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
