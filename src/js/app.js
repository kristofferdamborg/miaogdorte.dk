import $ from 'jquery';
import 'slick-carousel';

$(document).ready(() => {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    adaptiveHeight: true,
  });
});

$('.mobile-nav-button').on('click', () => {
  $('.mobile-nav-links').toggleClass('mobile-nav-links--open');
  $('.mobile-nav-overlay').toggleClass('mobile-nav-overlay--open');
});

$('.mobile-nav-overlay').on('click', () => {
  $('.mobile-nav-links').toggleClass('mobile-nav-links--open');
  $('.mobile-nav-overlay').toggleClass('mobile-nav-overlay--open');
});

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));