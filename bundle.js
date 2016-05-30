/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by jiangwei5 on 2016/5/20.
	 */
	//在这个Js中引入demo1 和 demo2  怎么引入呢？？？
	//require.config({
	//    paths:{
	//        demo1:"./js/demo1",
	//        demo2:"./js/demo2"
	//    }
	//})
	//
	//require(['demo1','demo2'],function(){
	//    //alert('require成功')
	//})
	"use strict";

	var dem01 = __webpack_require__(1);
	var dem02 = __webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by jiangwei5 on 2016/5/20.
	 */

	//移动端监听滚动条
	/*
	    1.window滚动监听  scroll
	    2.区域滚动的监听

	    3.监听手指滑动 touchstart touchmove touchend
	 */

	"use strict";

	window.onscroll = function () {
	    console.log("距离顶部为" + (document.documentElement.scrollTop || document.body.scrollTop));
	};

	//各大网站首页滚动的动画效果

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by jiangwei5 on 2016/5/20.
	 */

/***/ }
/******/ ]);