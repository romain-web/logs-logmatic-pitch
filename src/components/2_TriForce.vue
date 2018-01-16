<template>
  <div>
    <div class="bg {{ 'state-' + state }}">
      <div id="a" class="circle" v-show="state < 3"></div>
      <div id="r" class="circle" v-show="state < 3"></div>
      <div id="e" class="circle" v-show="state < 3"></div>
      <div id="triforce" v-show="state >= 3"></div>
    </div>
  </div>
</template>

<script>
export default {
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

#triforce {
  position: absolute;
  margin-top: -150px;
  margin-left: -150px;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  background-image: url('../assets/triforce.svg.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  transition: width 1s ease, height 1s ease;
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

  color: $white;

  transform: rotate(0deg);
  &.state-0,&.state-1, &.state-2 {
    animation: rotation 4s linear 0s infinite, neon2;
  }
}

.circle {
  position: absolute;
  margin-top: -100px;
  margin-left: -100px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: $logmatic-green;
  background-image: url('../assets/inter.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  animation: rotation 4s linear 0s infinite reverse;
  transition: background-image .3s linear, top .3s ease, left .4s ease, opacity 1s linear, width .3s ease, height .3s ease;
}

#a {
  top: 35%;
  left: 50%;

  .state-1 &, .state-2 & {
    background-image: url('../assets/Amir.png');
  }
  .state-2 & {
    top: 50%;
    left: 50%;
    opacity: 0.3;
    height: 0px;
    width: 0px;
  }
  .state-3 & {
  }
}
#r {
  top: 65%;
  left: 44%;

  .state-1 &, .state-2 & {
    background-image: url('../assets/renaud.png');
  }
  .state-2 & {
    top: 50%;
    left: 50%;
    opacity: 0.3;
    height: 0px;
    width: 0px;
  }
  .state-3 & {
  }
}
#e {
  top: 65%;
  left: 66%;

  .state-1 &, .state-2 & {
    background-image: url('../assets/Emmanuel.png');
  }
  .state-2 & {
    top: 50%;
    left: 50%;
    opacity: 0.3;
    height: 0px;
    width: 0px;
  }
  .state-3 & {
  }
}
</style>
