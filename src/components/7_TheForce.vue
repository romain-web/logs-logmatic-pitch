<template>
  <div class="bg {{ 'state-' + state }}">
    <h1>The Force</h1>
    <p v-show="state === 0">{{ now }}</p>
    <p v-show="state === 1"></p>
    <p v-show="state === 2"></p>
    <p v-show="state === 3"></p>
  </div>
</template>

<script>
export default {
  ready() {
    const self = this;
    setInterval(() => {
      self.now = new Date().getTime();
    }, 1);
  },
  events: {
    top() {
      this.state += 1;
    },
    bottom() {
      if (this.state <= 0) {
        return;
      }
      this.state -= 1;
    },
  },
  data() {
    return {
      state: 0,
      now: new Date().getTime(),
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_vars.scss';

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes triforce {
  0% {
    height: 0;
    width: 0;
    margin-top: 0;
    margin-loft: 0; 
  }
  100% {
    height: 400px;
    width: 400px;
    margin-top: -200px;
    margin-loft: -200px;
  }
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  color: $logmatic-blue;
}
</style>
