console.log('dai');

// This stream will be played if ad-enabled playback fails.
var BACKUP_STREAM = 'http://storage.googleapis.com/testtopbox-public/video_content/bbb/master.m3u8';

// Live stream asset key
var TEST_ASSET_KEY = 'sN_IYUG8STe1ZzhIIE_ksA';

// VOD content source and video IDs.
var TEST_CONTENT_SOURCE_ID = '2528370';
var TEST_VIDEO_ID = 'tears-of-steel';

// StreamManager which will be used to request ad-enabled streams.
var streamManager;

// hls.js
var hls = new Hls();

// Video element
var videoElement;

// Ad container
var adContainer;




// TODO:
videoElement = document.getElementById('video-element');
adContainer = document.getElementById('ad-container');

loadUrl(BACKUP_STREAM);

function loadUrl(url) {
    console.log('Loading:' + url);
    hls.loadSource(url);
    hls.attachMedia(videoElement);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        console.log('Video Play');
        videoElement.muted = true;
        //videoElement.load();
        videoElement.play();
    });
}


