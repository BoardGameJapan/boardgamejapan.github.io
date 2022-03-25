var data = {
	page: location.hash == '' ? 'top' : location.hash.substr(1),
	pages: [
		'top',
		'about',
		'works',
		'contact',
	],
	news: [],
};

const app = {
	data() {
		return data;
	}
};
Vue.createApp(app).mount('#app');

// feedを読み込む
function getFeedEntries(url) {
	fetch(url)
		.then(res => res.text())
		.then(text => {
			var parser = new DOMParser();
			var xml = parser.parseFromString(text, "text/xml");
			var entries = xml.getElementsByTagName("entry");
			[].forEach.call(entries, e => {
				data.news.push({
					//title: e.getElementsByTagName("title")[0].textContent,
					link: e.getElementsByTagName("link")[0].getAttribute("href"),
					updated: e.getElementsByTagName("updated")[0].textContent.split('T')[0],
					summary: e.getElementsByTagName("summary")[0].textContent,
				});
			});
		});
}
getFeedEntries("./feed.atom");
