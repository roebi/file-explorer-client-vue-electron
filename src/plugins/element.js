import Vue from 'vue'
// import VueI18n from 'vue-i18n'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import deLocale from 'element-ui/lib/locale/lang/de'

// Vue.use(VueI18n); // , { Locale: 'en' });
Vue.use(Element, { enLocale });

// Vue.config.lang = 'de';
// VueI18n.Locale = 'en';
// Vue.locale('en', enLocale);
// Vue.locale('de', deLocale);
