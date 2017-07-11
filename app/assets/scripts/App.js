import $ from 'jquery';
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import FadingBanner from "./modules/FadingBanner";
import StickyHeader from "./modules/StickyHeader";

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.about-us__photo'), "80%");
new RevealOnScroll($('.boats-gear'), "69%");
new RevealOnScroll($('.pricing'), "69%");
new RevealOnScroll($('.contact-us'), "69%");
var bannerFader = new FadingBanner();
var stickyHeader = new StickyHeader();
