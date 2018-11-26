'use strict';
alert('alert');
import './scss/site.scss';
import App from './vue/App.vue';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';


Vue.use(BootstrapVue);

window.onload = function() {
	new Vue({
		el: '#app',
		render: h => h(App),
	});
};
