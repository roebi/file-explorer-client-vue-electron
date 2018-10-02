import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import router from './router';
import './plugins/element.js';
import i18n from './i18n.js';

/*
import FileExplorer from 'file_explorer';

var fileApi = new FileExplorer.FileApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listFiles(callback);
*/

Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
