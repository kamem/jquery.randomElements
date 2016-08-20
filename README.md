# jquery.randomElements

Randomly placed so as not to overlap with each other as possible.

Description
------
1. Randomly generate a tag in the tag.
3. If generated tags are overlapped, redone a few minutes random for the specified.

Demo
------

[DEMO](http://github.develo.org/jquery.randomElements/)

Install
---

### Npm

	npm install jquery.random-elements


Usage
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
| className | `String` | Give the name of the class to the generated tag |`'randomContent'`
| num | `Number` | The number of tags | `20`
| stageWidthExpansion | `Number` | Extension of the arrangement range of width | `0`
| stageHeightExpansion | `Number` | Extension of the arrangement range of height | `0`
| width | `Number` | Width maximum value. The case of the image will be the size of the image | `100`
| height | `Number` | Height maximum value. The case of the image will be the size of the image | `100`
| min | `Number` | The minimum value of the image | `0`
| isRandomSize | `Boolean` | The image to a random size | `true`
| tryCount | `Number` | Number of times to restart the random when the tag is overlapped | `10`
| sameRatio | `Boolean` | The vertical and horizontal in the same ratio | `0`
| adjustment | `Number` | Specify the range to allow the overlap | `0`