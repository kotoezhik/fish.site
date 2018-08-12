$(function () {
  $('.slider-big-name').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-big-thumbs',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          asNavFor: null,
          lazyLoad: 'onDemand'
        }
          }
      ]
  });
  $('.slider-big-thumbs').slick({
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-big-name',
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
          },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
          },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
          },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
          },
      {
        breakpoint: 480,
        asNavFor: null
          }
        ]
  });

  /* Yandex maps */
  var myMap;

  function init() {

    var myPlacemark;

    myMap = new ymaps.Map(
      'ya_map', {
        center: [43.1215, 131.889],
        zoom: 16,
        scroll: false
      }
    );
    
      myPlacemark = new ymaps.Placemark([43.1215, 131.889], {}, {
//        balloonLayout: "default#imageWithContent",
//        balloonContentSize: [645, 423],
//        balloonImageHref: '/img/file-name.png',
//        balloonImageOffset: [-322, 0],
//        balloonImageSize: [645, 423],
//        balloonShadow: true,
//        iconLayout: 'default#image',
//        iconImageHref: '/img/file-name.png',
//        iconImageSize: [39, 40],
//        iconImageOffset: [-20, -20],
//        hideIconOnBalloonOpen: false,
      });

    myMap.events.add('click', function () {
      myMap.balloon.close();
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
  }

  ymaps.ready(init);
  /* end Yandex maps */
});