var data = {
	page: location.hash == '' ? 'top' : location.hash.substr(1),
	pages: [
		'top',
		'about',
		'works',
		'contact',
	],
};

var app = new Vue({
	el: '#app',
	data: data,
});
