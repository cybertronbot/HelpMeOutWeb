/* global chrome */

let recorder = null;

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);
  var chunks = [];

  recorder.ondataavailable = function (event) {
    if (event.data.size > 0) {
      chunks.push(event.data);
    }
  };

  recorder.onstop = function () {
    var combinedBlob = new Blob(chunks, { type: 'video/webm' });

    var downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(combinedBlob);
    downloadLink.download = 'screen-recording.webm';
    downloadLink.click();

    // Open the video details page after the file is downloaded
    window.open('https://help-me-out-web-zeta.vercel.app/video-details', '_blank');
  };

  recorder.start();

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "stopvideo") {
      console.log("stopping video");
      sendResponse(`processed: ${message.action}`);
      if (!recorder) return console.log("no recorder");

      recorder.stop();
    }
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed: ${message.action}`);

    navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: {
        width: 9999999999,
        height: 9999999999
      }
    }).then((stream) => {
      onAccessApproved(stream);
    });
  }
});