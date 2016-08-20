# jquery.randomElements

なるべく重ならないようにランダム配置する。

仕様
------
1. 指定したタグ内にランダムにタグを生成する。
3. 生成したタグが重なっている場合は指定の数分ランダムをやり直す。

デモ
------

[DEMO](http://github.develo.org/jquery.randomElements/)

インストール
---

### Npm

	npm install jquery.random-elements


使い方
------
	<script src="js/jquery.js"></script>
	<script src="js/jquery.randomElements.js"></script>
	<script>
		$(function(){
			$('body').randomElements('<img src="img/img.png">');

			$('body').randomElements(
				'<img src="img/img.png">',
				{
					className: 'randomContent',
					num: 20,
					stageWidthExpansion: 0,
					stageHeightExpansion: 0,
					width: 100,
					height: 100,
					min: 10,
					isSize: true,
					tryCount: 10,
					adjustment: 0
				}
			);
		});
	</script>


Options
------

| option name| type | Descriptions |default
|:-----------|:------------|:------------|:------------|
| className | `String` | 生成したタグにクラス名をつける |`'randomContent'`
| num | `Number` | 生成したいタグの個数 | `20`
| stageWidthExpansion | `Number` | 幅の配置範囲の拡張 | `0`
| stageHeightExpansion | `Number` | 高さの配置範囲の拡張 | `0`
| width | `Number` | 横幅最大値（画像の場合は画像のサイズになります） | `100`
| height | `Number` | 縦幅最大値（画像の場合は画像のサイズになります） | `100`
| min | `Number` | 画像の最小値 | `0`
| isRandomSize | `Boolean` | サイズをランダムにするか | `true`
| tryCount | `Number` | 配置が重なっていた時にランダムをやり直す回数 | `10`
| sameRatio | `Boolean` | 縦横を同じ比率にする | `0`
| adjustment | `Number` | 重なり具合をどのぐらい許容するか | `0`