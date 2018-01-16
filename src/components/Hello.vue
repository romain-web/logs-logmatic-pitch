<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'What is Logmatic',
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/_vars.scss';

h1 {
  color: $logmatic-blue;
}
</style>
