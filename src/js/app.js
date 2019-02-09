
import lozad from 'lozad';
import navigationPhoneModule from './navigation_phone.js';
import mobileMenuModule from './mobile_menu.js';
import stickyModule from './sticky.js';
import smoothScrollModule from './smoothscroll.js';
import swiperModule from './swiper.js';
import galleryModule from './gallery.js';
import quoteModule from './quote.js';
import mapModule from './map.js';
import formModule from './form.js';


//lazy loader

const observer = lozad();
observer.observe();

navigationPhoneModule();
mobileMenuModule();
stickyModule();
smoothScrollModule();
swiperModule();
galleryModule();
quoteModule();
mapModule();
formModule();
