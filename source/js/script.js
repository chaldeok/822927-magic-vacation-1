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

const mainScreenTitleAnim = new AccentTypography(
    `.intro__title`,
    500,
    `accent-typography-active`,
    `transform`,
);
setTimeout(() => {
  mainScreenTitleAnim.runAnim();
}, 350);

setTimeout(() => {
  mainScreenTitleAnim.destroyAnim();
}, 250);

const mainScreenDateAnim = new AccentTypography(
    `.intro__date`,
    350,
    `accent-typography-active`,
    `transform`
);
setTimeout(() => {
  mainScreenDateAnim.runAnim();
}, 350);

setTimeout(() => {
  mainScreenDateAnim.destroyAnim();
}, 250);

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
