// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import AccentTypography from './modules/accent-typography';
import bodyOnload from './modules/content-load-handler';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
bodyOnload();

// main
const mainScreenTitleAnim = new AccentTypography(
    `.intro__title`,
    500,
    `accent-typography-active`,
    `transform`,
);
setTimeout(() => {
  mainScreenTitleAnim.runAnim();
}, 350);

const mainScreenDateAnim = new AccentTypography(
    `.intro__date`,
    350,
    `accent-typography-active`,
    `transform`
);
setTimeout(() => {
  mainScreenDateAnim.runAnim();
}, 1200);

// history
const historyScreenTitleAnim = new AccentTypography(
    `.slider__item-title`,
    250,
    `accent-typography-active`,
    `transform`
);
setTimeout(() => {
  historyScreenTitleAnim.runAnim();
}, 100);

// prizes
const prizesScreenTitleAnim = new AccentTypography(
    `.prizes__title`,
    250,
    `accent-typography-active`,
    `transform`
);
setTimeout(() => {
  prizesScreenTitleAnim.runAnim();
}, 100);

// rules
const rulesScreenTitleAnim = new AccentTypography(
    `.rules__title`,
    250,
    `accent-typography-active`,
    `transform`
);
setTimeout(() => {
  rulesScreenTitleAnim.runAnim();
}, 100);

// game
const gameScreenTitleAnim = new AccentTypography(
    `.game__title`,
    250,
    `accent-typography-active`,
    `transform`
);
setTimeout(() => {
  gameScreenTitleAnim.runAnim();
}, 100);

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
