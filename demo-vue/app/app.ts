import Vue from 'nativescript-vue';
import App from './components/App.vue';

import { install } from '@nativescript-community/ui-drawer';
install();

import DrawerPlugin from '@nativescript-community/ui-drawer/vue';
Vue.use(DrawerPlugin);

Vue.config.silent = true;
// Vue.config.silent = (TNS_ENV === 'production')

new Vue({
    render: h => h('frame', [h(App)]),
}).$start();
