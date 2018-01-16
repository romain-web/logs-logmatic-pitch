<template>
  <div class="bg">
    <h1>Log Wars</h1>
    <div class="logs"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
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
  background-color: #09313B;

  .logs {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url('../assets/giphy.gif');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    transform-origin: 50% 100%;
    transform: perspective(350px) rotateX(25deg);
  }

  h1 {
    text-shadow: 0px 0px 30px #000000;
    color: $white; 
  }
}
</style>
