<template>
  <div class="icon-container">
    <div class="icon-box">
      <i class="k-icon-dashboard"></i>
    </div>

    <div class="icon-box">
      <i class="k-icon-card"></i>
    </div>

    <div class="icon-box">
        <i class=" k-icon-refresh"></i>
    </div>

    <div class="icon-box">
      <i class="k-icon-settings"></i>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.icon-box {
  height: 64px;
  width: 64px;
  background: var(--main-blue);
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-container {
  display: flex;
  justify-content: space-evenly;
}
i {
  color: var(--main-white);
  size: 32px;
}

</style>
