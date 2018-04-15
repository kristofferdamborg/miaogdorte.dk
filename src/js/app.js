import $ from 'jquery';
import 'slick-carousel';

$(document).ready(() => {
  $('.slider').slick({
    autoplay: true,
    fade: true,
    adaptiveHeight: true,
  });
});

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));