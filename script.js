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
			var entries = xml.getElementsByTagName("entry");
			for (var i = 0; i < entries.length; i++) {
				data.news.push({
					title: getChildTag(entries, i, "title").textContent,
					link: getChildTag(entries, i, "link").getAttribute("href"),
					updated: getChildTag(entries, i, "updated").textContent.split('T')[0],
					summary: getChildTag(entries, i, "summary").textContent,
				});
			}
		});
}
getFeedEntries("./feed.atom");

function getChildTag(e, i, tagname) {
	return e[i].getElementsByTagName(tagname)[0];
}