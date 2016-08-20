/*!
 * jquery.randomElements (2016-8-20)
 * Placing a random one image, so as not to overlap as much as possible.
 * https://github.com/kamem/jquery.randomElements.git
 * (c) 2016 kamem (@kamem)
 *
 * @version 0.1.0
 * @license Released under the MIT license
 * @author kamem
 */
(function (global, factory) {
	if (typeof exports !== 'undefined') {
		module.exports = factory(require('jquery'), global);
	}	else if (typeof define === 'function' && define.amd) {
			define(['jquery'], function() {factory($, global)});
	}  else {
		factory($, global);
	}
} (typeof window !== "undefined" ? window : this, function ($, global) {
;(function() {
var randomElements_RandomElements = {}, jqueryrandomElementsjs;
randomElements_RandomElements = function (exports) {
  Object.defineProperty(exports, '__esModule', { value: true });
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var RandomElements = exports.RandomElements = function () {
    function RandomElements(contents, _ref) {
      var _ref$className = _ref.className;
      var className = _ref$className === undefined ? 'randomContent' : _ref$className;
      var _ref$num = _ref.num;
      var num = _ref$num === undefined ? 20 : _ref$num;
      var _ref$stageWidth = _ref.stageWidth;
      var stageWidth = _ref$stageWidth === undefined ? 0 : _ref$stageWidth;
      var _ref$stageHeight = _ref.stageHeight;
      var stageHeight = _ref$stageHeight === undefined ? 0 : _ref$stageHeight;
      var _ref$stageWidthExpans = _ref.stageWidthExpansion;
      var stageWidthExpansion = _ref$stageWidthExpans === undefined ? 0 : _ref$stageWidthExpans;
      var _ref$stageHeightExpan = _ref.stageHeightExpansion;
      var stageHeightExpansion = _ref$stageHeightExpan === undefined ? 0 : _ref$stageHeightExpan;
      var _ref$width = _ref.width;
      var width = _ref$width === undefined ? 100 : _ref$width;
      var _ref$height = _ref.height;
      var height = _ref$height === undefined ? 100 : _ref$height;
      var _ref$min = _ref.min;
      var min = _ref$min === undefined ? 0 : _ref$min;
      var _ref$isRandomSize = _ref.isRandomSize;
      var isRandomSize = _ref$isRandomSize === undefined ? true : _ref$isRandomSize;
      var _ref$tryCount = _ref.tryCount;
      var tryCount = _ref$tryCount === undefined ? 10 : _ref$tryCount;
      var _ref$adjustment = _ref.adjustment;
      var adjustment = _ref$adjustment === undefined ? 0 : _ref$adjustment;
      var _ref$sameRatio = _ref.sameRatio;
      var sameRatio = _ref$sameRatio === undefined ? true : _ref$sameRatio;
      _classCallCheck(this, RandomElements);
      this.contents = contents;
      this.className = className;
      this.num = num;
      this.stageWidthExpansion = stageWidthExpansion;
      this.stageHeightExpansion = stageHeightExpansion;
      this.stageWidth = stageWidth + stageWidthExpansion * 2;
      this.stageHeight = stageHeight + stageHeightExpansion * 2;
      this.width = width;
      this.height = height;
      this.min = min;
      this.isRandomSize = isRandomSize;
      this.tryCount = tryCount;
      this.sameRatio = sameRatio;
      this.adjustment = adjustment;
      this.randomElements = [];
    }
    _createClass(RandomElements, [
      {
        key: 'createRandomElement',
        value: function createRandomElement($content) {
          for (var i = 0; i < this.num; i++) {
            var contentRandomNum = Math.floor(Math.random() * this.contents.length);
            var $el = $(this.contents[contentRandomNum]);
            this.randomTry($el.get(), i, this.tryCount);
            $el.css(this.randomElements[i]).addClass(this.className);
            $content.append($el);
          }
        }
      },
      {
        key: 'randomTry',
        value: function randomTry(el, num, maxCount) {
          var _this2 = this;
          var count = 0;
          var test = function test() {
            _this2.randomElements[num] = _this2.getRandomCssValue(el);
            count++;
            if (_this2.isInRange(num) && count <= maxCount)
              test();
          };
          test();
        }
      },
      {
        key: 'getRandomCssValue',
        value: function getRandomCssValue(el) {
          var width = el.naturalWidth || this.width;
          var height = el.naturalHeight || this.height;
          var randomWidth = this.isRandomSize ? Math.random() * (width - this.min) + this.min : width;
          var percent = randomWidth / width;
          var randomHeight = this.sameRatio ? height * percent : this.isRandomSize ? Math.random() * (height - this.min) + this.min : height;
          return {
            width: randomWidth,
            height: randomHeight,
            left: Math.random() * (this.stageWidth - randomWidth) - Math.random() * this.stageWidthExpansion,
            top: Math.random() * (this.stageHeight - randomHeight) - Math.random() * this.stageHeightExpansion
          };
        }
      },
      {
        key: 'isInRange',
        value: function isInRange(num) {
          var isCheck = true;
          for (var i = 0; i < this.randomElements.length; i++) {
            if (i === num)
              continue;
            var _this = this.randomElements[num];
            var _that = this.randomElements[i];
            var rangeY = _this.top > _that.top - _this.height + this.adjustment && _this.top < _that.top + _that.height - this.adjustment;
            var rangeX = _this.left > _that.left - _this.width + this.adjustment && _this.left < _that.left + _that.width - this.adjustment;
            isCheck = rangeY && rangeX;
            if (isCheck)
              break;
          }
          return isCheck;
        }
      }
    ]);
    return RandomElements;
  }();
  return exports;
}(randomElements_RandomElements);
jqueryrandomElementsjs = function (_RandomElements) {
  $.fn.randomElements = function (contents) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    options.stageWidth = this.width();
    options.stageHeight = this.height();
    var randomElements = new _RandomElements.RandomElements(contents, options);
    randomElements.createRandomElement(this);
  };
}(randomElements_RandomElements);
}());
}));