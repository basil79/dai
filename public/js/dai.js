/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log('dai');\n\n// This stream will be played if ad-enabled playback fails.\nvar BACKUP_STREAM = 'http://storage.googleapis.com/testtopbox-public/video_content/bbb/master.m3u8';\n\n// Live stream asset key\nvar TEST_ASSET_KEY = 'sN_IYUG8STe1ZzhIIE_ksA';\n\n// VOD content source and video IDs.\nvar TEST_CONTENT_SOURCE_ID = '2528370';\nvar TEST_VIDEO_ID = 'tears-of-steel';\n\n// StreamManager which will be used to request ad-enabled streams.\nvar streamManager;\n\n// hls.js\nvar hls = new Hls();\n\n// Video element\nvar videoElement;\n\n// Ad container\nvar adContainer;\n\n\n\n\n// TODO:\nvideoElement = document.getElementById('video-element');\nadContainer = document.getElementById('ad-container');\n\nloadUrl(BACKUP_STREAM);\n\nfunction loadUrl(url) {\n    console.log('Loading:' + url);\n    hls.loadSource(url);\n    hls.attachMedia(videoElement);\n    hls.on(Hls.Events.MANIFEST_PARSED, function() {\n        console.log('Video Play');\n        videoElement.muted = true;\n        //videoElement.load();\n        videoElement.play();\n    });\n}\n\n\n\n\n//# sourceURL=webpack://dai/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;