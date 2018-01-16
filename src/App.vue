<template>
  <div class="main">
    <nav>
      <a class="btn-circle" href="javascript: void(0);" @click="navigation = true"><i class="mdi mdi-menu"></i></a>
      <ul v-show="navigation">
        <li>
          <a class="btn-circle" href="javascript: void(0);" @click="navigation = false"><i class="mdi mdi-close"></i></a>
        </li>
        <li v-for="s in steps"><a class="btn" @click="setStep(s.name)">{{ s.label }}</a></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Waves from 'node-waves';
import _ from 'lodash';

export default {
  created() {
    window.addEventListener('keyup', this.go);
    this.step = _.indexOf(this.steps, _.find(this.steps, { name: this.$route.name }));
  },
  ready() {
    Waves.attach('.btn', ['waves-button', 'waves-float']);
    Waves.attach('.btn-circle', ['waves-circle']);
    Waves.init();
  },
  methods: {
    fullscreen() {
      const el = document.documentElement;
      const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
      rfs.call(el);
    },
    setStep(n) {
      console.log(n);
      this.step = _.indexOf(this.steps, _.find(this.steps, { name: n }));
      this.$router.go({ name: n });
    },
    go(e) {
      if (e.keyCode === 37) {
        this.left();
      }
      if (e.keyCode === 39) {
        this.right();
      }
      if (e.keyCode === 40) {
        this.bottom();
      }
      if (e.keyCode === 38) {
        this.top();
      }
      if (e.keyCode === 32) {
        this.fullscreen();
      }
    },
    top() {
      this.$broadcast('top');
    },
    bottom() {
      this.$broadcast('bottom');
    },
    left() {
      if (this.step <= 0) {
        return;
      }
      this.step -= 1;
      this.$router.go({
        name: this.steps[this.step].name,
      });
    },
    right() {
      if (this.step >= this.steps.length - 1) {
        return;
      }
      this.step += 1;
      this.$router.go({
        name: this.steps[this.step].name,
      });
    },
  },
  data() {
    return {
      navigation: false,
      steps: [
        { name: 'home', label: 'Home' },
        { name: '1_story', label: 'A little Story' },
        { name: '2_triforce', label: 'The Tri Force' },
        { name: '3_saintgrale', label: 'The Quest of the Holy Grail' },
        { name: '4_thedragon', label: 'The Dragon' },
        { name: '5_feellog', label: 'Feel in Log' },
        { name: '6_logwars', label: 'Log Wars' },
        { name: '7_theforce', label: 'The Force' },
      ],
      step: 0,
    };
  },
};
</script>

<style lang="scss">
$mdi-font-path: "~mdi/fonts" !default;
@import '~mdi/scss/materialdesignicons.scss';
@import '~node-waves/src/scss/waves.scss';
@import 'assets/theme';

.main {
  color: $dark;
  margin-top: -100px;
  max-width: 600px;
  font-family: Moon-Bold, Source Sans Pro, Helvetica, sans-serif;
  text-align: center;

  nav {
    position: absolute;
    z-index: 999;
    top: 2rem;
    left: 2rem;

    width: 2.5rem;
    height: 2.5rem; 
    border-radius: 50%;

    a {
      color: $logmatic-blue;
    }

    ul {
      position: fixed;
      padding: 15px;
      top: 0;
      left: 0;
      width: 200px;
      height: 100%;
      background-color: $logmatic-blue;
      color: $white;
      list-style: none;

      a {
        color: $white;
      }
    }
  }
}
</style>
