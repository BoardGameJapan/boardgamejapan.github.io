var data = {
	page: location.hash == '' ? 'top' : location.hash.substr(1),
	pages: [
		'top',
		'genre',
		'judge',
		'entry',
		'result',
	],
	news: [],
};

const app = {
	data() {
		return data;
	}
};
Vue.createApp(app).mount('#app');
