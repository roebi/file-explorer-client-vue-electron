import Vue from 'vue'
import ElementPlus from 'element-plus'
// import 'element-plus/lib/locales.js'
// import 'element-plus/lib/locale/index.js'

// TODO: theme
// import 'element-ui/lib/theme-chalk/index.css

import i18n from '../i18n.js';

Vue.use(ElementPlus, {
    i18n: (key, value) => i18n.t(key, value)
})
