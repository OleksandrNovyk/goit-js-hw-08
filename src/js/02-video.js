import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const CURRENT_TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function getCurrentTime (e) {
  localStorage.setItem(CURRENT_TIME_KEY, e.seconds);
};

player.on('timeupdate', throttle(getCurrentTime, 1000));
player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));