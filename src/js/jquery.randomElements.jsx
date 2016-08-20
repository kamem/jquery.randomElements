import {RandomElements} from './randomElements/RandomElements';

$.fn.randomElements = function(contents, options = {}) {
	options.stageWidth = this.width();
	options.stageHeight = this.height();
	const randomElements = new RandomElements(contents, options);
	randomElements.createRandomElement(this);
}