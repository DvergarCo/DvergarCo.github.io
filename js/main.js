$(function () {
'use strict';
$(window).scroll(function () {
  var navbar = $('.navbar');
  $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
});
});
function loadAPI() {
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      
      console.log("Tag created");

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    console.log("API ready.");
    player = new YT.Player('ytplayer', {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: 'p8PUzDf55RU',
        controls: 0,
        showinfo: 0,
        //autohide: 1,
        modestbranding: 1//,
        //vq: 'hd1080'
      },
      videoId: 'p8PUzDf55RU',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
};

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    console.log("Playing video");
    //event.target.playVideo();
    event.target.mute();
};

function onPlayerStateChange(event) {
    console.log("Player state changed");
    //event.target.playVideo();
    event.target.mute();
};

loadAPI();