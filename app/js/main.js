$(function () {

  $('.detalis-content__input').styler()

  $('.detalis-slide__thumb').slick({
    asNavFor: '.detalis-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.detalis-slide__big').slick({
    asNavFor: '.detalis-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });


  $('.pagination__btn').on('click', function () {
    $('.pagination__btn').removeClass('pagination__btn--active');
    $(this).addClass('pagination__btn--active');
  });

  $('.shoper-content__filter-btn').on('click', function () {
    $('.shoper-content__filter-btn').removeClass('shoper-content__filter-btn--active');
    $(this).addClass('shoper-content__filter-btn--active');
  })

  $('.button-list').on('click', function () {
    $('.shoper__content-items').addClass('shoper__content-items--list');
    $('.shoper-bottom__items').addClass('shoper-bottom__items--grid');
  });

  $('.button-grid').on('click', function () {
    $('.shoper__content-items').removeClass('shoper__content-items--list');
    $('.shoper-bottom__items').removeClass('shoper-bottom__items--grid');
  });



  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })

  $('.slider-top__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".shoper-bottom__star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });
  
  $(".detalis-star").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });
  var mixer = mixitup('.shop__content-items');
  var mixer = mixitup('.selector__content-items');
  
});

