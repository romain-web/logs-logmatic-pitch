<template>
  <div class="bg">
    <h1>Meet the Dragon and his treasure</h1>
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
  background-image: url('../assets/1374363610128.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  h1 {
    text-shadow: 0px 0px 30px #000000;
    color: $white; 
  }
}
</style>
