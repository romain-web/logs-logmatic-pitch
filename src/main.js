import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  history: true,
  saveScrollPosition: true,
});

import Hello from 'components/Hello';

import LittleStory from 'components/1_Story';
import TriForce from 'components/2_TriForce';
import SaintGrale from 'components/3_SaintGrale';
import TheDragon from 'components/4_TheDragon';

import FeelInLog from 'components/5_CryInLog';
import LogWars from 'components/6_LogWars';
import TheForce from 'components/7_TheForce';
// normal routes
router.map({
  '/home': {
    name: 'home',
    component: Hello,
  },
  '/1-a-little-story': {
    name: '1_story',
    component: LittleStory,
  },
  '/2-triforce': {
    name: '2_triforce',
    component: TriForce,
  },
  '/3-saint-grale': {
    name: '3_saintgrale',
    component: SaintGrale,
  },
  '/4-the-dragon': {
    name: '4_thedragon',
    component: TheDragon,
  },
  '/5-feellog': {
    name: '5_feellog',
    component: FeelInLog,
  },
  '/6-logwars': {
    name: '6_logwars',
    component: LogWars,
  },
  '/7-theforce': {
    name: '7_theforce',
    component: TheForce,
  },
});

// redirect
router.redirect({
  '*': '/home',
});


import App from './App';
router.start(App, '#app');
