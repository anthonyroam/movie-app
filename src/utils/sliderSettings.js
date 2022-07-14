const sliderSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  draggable: false,

  responsive: [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
      },
    },
    {
      breakpoint: 435,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
      },
    },
  ],
};

export default sliderSettings;
