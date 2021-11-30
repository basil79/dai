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

eval("console.log('dai');\n\n// This stream will be played if ad-enabled playback fails.\nvar BACKUP_STREAM = 'http://storage.googleapis.com/testtopbox-public/video_content/bbb/master.m3u8';\nvar LIVE_STREAM = 'https://pubads.g.doubleclick.net/ondemand/hls/content/2528370/vid/tears-of-steel/GRQ/streams/b52754cb-62ef-4395-a337-5eca3a3164e2/master.m3u8';\n\n// Live stream asset key\nvar TEST_ASSET_KEY = 'sN_IYUG8STe1ZzhIIE_ksA';\n\n// VOD content source and video IDs.\nvar TEST_CONTENT_SOURCE_ID = '2528370';\nvar TEST_VIDEO_ID = 'tears-of-steel';\n\n// StreamManager which will be used to request ad-enabled streams.\nvar streamManager;\n\n// hls.js\nvar hls = new Hls();\n\n// Video element\nvar videoElement;\n\n// Ad container\nvar adContainer;\n\n\n\n\n// TODO:\nvideoElement = document.getElementById('video-element');\nadContainer = document.getElementById('ad-container');\n\n/*\nstreamManager =\n    new google.ima.dai.api.StreamManager(videoElement, adContainer);\nstreamManager.addEventListener(\n    [\n        google.ima.dai.api.StreamEvent.Type.LOADED,\n        google.ima.dai.api.StreamEvent.Type.ERROR,\n        google.ima.dai.api.StreamEvent.Type.AD_BREAK_STARTED,\n        google.ima.dai.api.StreamEvent.Type.AD_BREAK_ENDED\n    ],\n    onStreamEvent, false);\n// Add metadata listener. Only used in LIVE streams. Timed metadata\n// is handled differently by different video players, and the IMA SDK provides\n// two ways to pass in metadata, StreamManager.processMetadata() and\n// StreamManager.onTimedMetadata().\n//\n// Use StreamManager.onTimedMetadata() if your video player parses\n// the metadata itself.\n// Use StreamManager.processMetadata() if your video player provides raw\n */\n// ID3 tags, as with hls.js.\nhls.on(Hls.Events.FRAG_PARSING_METADATA, function(event, data) {\n    //console.log('hls event', event, data);\n    data.samples.forEach(function(sample) {\n        //console.log(sample.data, sample.pts);\n    });\n    /*\n    if (streamManager && data) {\n        // For each ID3 tag in our metadata, we pass in the type - ID3, the\n        // tag data (a byte array), and the presentation timestamp (PTS).\n        data.samples.forEach(function(sample) {\n            streamManager.processMetadata('ID3', sample.data, sample.pts);\n        });\n    }\n     */\n});\n\n//requestVODStream(TEST_CONTENT_SOURCE_ID, TEST_VIDEO_ID, null);\n// Uncomment line below and comment one above to request a LIVE stream.\n// requestLiveStream(TEST_ASSET_KEY, null);\n\nfunction requestLiveStream(assetKey, apiKey) {\n    var streamRequest = new google.ima.dai.api.LiveStreamRequest();\n    streamRequest.assetKey = assetKey;\n    streamRequest.apiKey = apiKey || '';\n    streamManager.requestStream(streamRequest);\n}\n\nfunction requestVODStream(cmsId, videoId, apiKey) {\n    var streamRequest = new google.ima.dai.api.VODStreamRequest();\n    streamRequest.contentSourceId = cmsId;\n    streamRequest.videoId = videoId;\n    streamRequest.apiKey = apiKey;\n    streamManager.requestStream(streamRequest);\n}\n\n/*\nfunction onStreamEvent(e) {\n    switch (e.type) {\n        case google.ima.dai.api.StreamEvent.Type.LOADED:\n            console.log('Stream loaded');\n            loadUrl(e.getStreamData().url);\n            break;\n        case google.ima.dai.api.StreamEvent.Type.ERROR:\n            console.log('Error loading stream, playing backup stream.' + e);\n            loadUrl(BACKUP_STREAM);\n            break;\n        case google.ima.dai.api.StreamEvent.Type.AD_BREAK_STARTED:\n            console.log('Ad Break Started');\n            videoElement.controls = false;\n            adContainer.style.display = 'block';\n            break;\n        case google.ima.dai.api.StreamEvent.Type.AD_BREAK_ENDED:\n            console.log('Ad Break Ended');\n            videoElement.controls = true;\n            adContainer.style.display = 'none';\n            break;\n        default:\n            break;\n    }\n}\n */\n\n\n//loadUrl(BACKUP_STREAM);\nloadUrl(LIVE_STREAM);\n\nfunction loadUrl(url) {\n    console.log('Loading:' + url);\n    hls.loadSource(url);\n    hls.attachMedia(videoElement);\n\n    videoElement.textTracks.addEventListener('addtrack', onAddTrack);\n    hls.on(Hls.Events.MANIFEST_PARSED, function() {\n        console.log('Video Play');\n        videoElement.muted = true;\n        //videoElement.load();\n        videoElement.play();\n    });\n}\n\nfunction onAddTrack(event) {\n    const track = event.track;\n    if (track.kind === 'metadata') {\n        track.mode = 'hidden';\n        track.addEventListener('cuechange', (unusedEvent) => {\n            for (const cue of track.activeCues) {\n                const metadata = {};\n                metadata[cue.value.key] = cue.value.data;\n                console.log(metadata);\n                //streamManager.onTimedMetadata(metadata);\n            }\n        });\n    }\n}\n\n\n\n\n//# sourceURL=webpack://dai/./src/index.js?");

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