# Board Game Japan公式サイト設計方針

## 構成をシンプルに

保守性向上のため、できるだけ*シンプルな構成*とし、ファイル数を減らす

- SPAに使われる[Vue.js](https://vuejs.org)を採用した
- index.htmlのarticleタグの表示を切り替えてSPA型のサイトとした

## 検索エンジン最適化(SEO)

検索エンジン最適化(SEO)のため、Vue.jsの*テンプレート記法などがクローラから見えないように*する

- CSSのflexboxとorderを用いて、上部にあるnavタグのメニューをHTMLファイルの最下部に記述した

## スクリプト利用不可の環境での閲覧

クローラを含む*JavaScript非対応の環境*や、外部サーバから*のスクリプト(Vue.js)読み込みを拒否*した場合でも閲覧できるようにする

- スクリプトなしでもindex.htmlを閲覧可能にした

## レスポンシブデザイン

PCだけでなく*スマートフォンにも対応*する

- CSSのflexboxによるレスポンシブデザインを採用した

## 各ページに固有のURLを付与

各ページに固有のURLを付与し、*URL直打ちでも各ページを参照可能*にする

- 「index.html#xxx」などhash付きのURLで、各ページを参照可能とした
- script.jsにhashの一覧を記述し、articleタグのv-showにページ切り替え条件を記述した
- articleタグのidにhashを記述できれば綺麗だが、ページ切替時に見出しの位置に移動してしまう

## 配色

配色をBoard Game Japanに合わせたものとする

- [和色大辞典](https://www.colordic.org/w)を参照し、紺藍(#4a488e)を基調色にした
- 「勝負」なので菖蒲色(#674196)を使うのが理想だが、やや紫色が強く使いづらい
- style.cssではCSS3の変数を用い、色のハードコードを除去した
