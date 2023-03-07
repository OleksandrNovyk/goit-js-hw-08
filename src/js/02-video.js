import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const options = {
    loop: true,
    fullscreen: true,
    quality: '1080p',
  }
const player = new Vimeo.Player(iframe, options);
