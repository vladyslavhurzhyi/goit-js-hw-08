import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const LOCAL_STORAGE_KEY = 'playVideoTime';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
  }, 1000)
);

let playTime = Number(localStorage.getItem(LOCAL_STORAGE_KEY));

player
  .setCurrentTime(playTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error
        break;
    }
  });
