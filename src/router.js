import Vue from 'vue';
import Router from 'vue-router';
import FileExplorer from './components/FileExplorer.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fileexplorer',
      component: FileExplorer
    },
    {
        path: '/about',
        name: 'about',
        component: About
      }
  ]
})
