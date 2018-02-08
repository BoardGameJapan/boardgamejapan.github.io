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

var app = new Vue({
	el: '#app',
	data: data,
});

// feedを読み込む
function getFeedEntries(url) {
	fetch(url)
		.then(res => res.text())
		.then(text => {
			var parser = new DOMParser();
			var xml = parser.parseFromString(text, "text/xml");
			var entries = xml.querySelectorAll("entry");
			[].forEach.call(entries, e => {
				data.news.push({
					title: e.querySelector("title").textContent,
					link: e.querySelector("link").getAttribute("href"),
					updated: e.querySelector("updated").textContent.split('T')[0],
					summary: e.querySelector("summary").textContent,
				});
			});
		});
}
getFeedEntries("./feed.atom");
