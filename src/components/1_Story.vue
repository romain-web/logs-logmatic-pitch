<template>
  <div class="bg">
    <h1>A Little Story</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/_vars.scss';

.bg {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-image: url('../assets/RaptorJesus.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  color: $white;
}
</style>
