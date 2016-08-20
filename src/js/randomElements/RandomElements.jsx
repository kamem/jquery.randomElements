export class RandomElements {
	constructor(
		contents,
		{
			className = 'randomContent',
			num = 20,
			stageWidth = 0,
			stageHeight = 0,
			stageWidthExpansion = 0,
			stageHeightExpansion = 0,
			width = 100,
			height = 100,
			min = 0,
			isRandomSize = true,
			tryCount = 10,
			adjustment = 0,
			sameRatio = true
		}) {
			this.contents = contents;
			this.className = className;
			this.num = num;
			this.stageWidthExpansion = stageWidthExpansion;
			this.stageHeightExpansion = stageHeightExpansion;
			this.stageWidth = stageWidth + (stageWidthExpansion * 2);
			this.stageHeight = stageHeight + (stageHeightExpansion * 2);
			this.width = width;
			this.height = height;
			this.min = min;
			this.isRandomSize = isRandomSize;
			this.tryCount = tryCount;
			this.sameRatio = sameRatio;
			this.adjustment = adjustment;

			this.randomElements = [];
	}

	createRandomElement($content) {
		for (var i = 0; i < this.num; i++) {
			const contentRandomNum = Math.floor(Math.random() * this.contents.length);
			const $el = $(this.contents[contentRandomNum]);

			this.randomTry($el.get(), i, this.tryCount);
			$el.css(this.randomElements[i]).addClass(this.className);
			$content.append($el);
		}
	}

	randomTry(el, num, maxCount) {
		let count = 0;
		const test = () => {
			this.randomElements[num] = this.getRandomCssValue(el)
			count++;
			if(this.isInRange(num) && count <= maxCount) test();
		}
		test();
	};

	getRandomCssValue(el) {
		const width = el.naturalWidth || this.width;
		const height = el.naturalHeight || this.height;

		const randomWidth = this.isRandomSize ? Math.random() * (width - this.min) + this.min : width;
		const percent = randomWidth / width;
		const randomHeight = this.sameRatio ? height * percent : this.isRandomSize ? Math.random() * (height - this.min) + this.min : height;

		return {
			width: randomWidth,
			height: randomHeight,
			left: Math.random() * (this.stageWidth - randomWidth) - Math.random() * this.stageWidthExpansion,
			top: Math.random() * (this.stageHeight - randomHeight) - Math.random() * this.stageHeightExpansion
		}
	}

 isInRange(num) {
	 	let isCheck = true;

		for (let i = 0; i < this.randomElements.length; i++) {
			if(i === num) continue;

			const _this = this.randomElements[num];
			const _that = this.randomElements[i];

			const rangeY =
			_this.top > (_that.top - _this.height + this.adjustment) &&
			_this.top < (_that.top + _that.height - this.adjustment);
			const rangeX =
			_this.left > (_that.left - _this.width + this.adjustment) &&
			_this.left < (_that.left + _that.width - this.adjustment);

			isCheck = rangeY && rangeX;

			if(isCheck) break;
		}

	 return isCheck;
	}
}