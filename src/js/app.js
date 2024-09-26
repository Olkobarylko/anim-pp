global.$ = global.jQuery = require('jquery');
import contentCardsSlider from './components/content-cards-slider';
import productCard from './components/product-card-slider';
import videoButton from './components/video-button';
import galleryAnim from './components/gallery';
import bottleAnim from './components/bottle-animation';
import bottleMobileAnim from './components/bottlemob-animation';
// import scrollToGallery from './components/scroll-to-gallery'

require('./components/menu');
contentCardsSlider();
galleryAnim();
bottleAnim();
bottleMobileAnim();
// scrollToGallery();

productCard();
videoButton();