import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const galleryAnim = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  $(document).ready(function () {
    const sliders = document.querySelectorAll(".gallery__splide");
    const mobileSlider = document.querySelector(".mobile__gallery");

    const mobileSplide = new Splide(mobileSlider, {
      type: 'loop',
      perPage: "auto",
      gap: "15px",
      arrows: false,
      pagination: false,
      snap: false,
      drag: false,
      autoScroll: {
        speed: 1,
        pauseOnHover: false,
      },
    });

    mobileSplide.mount({ AutoScroll });


    sliders.forEach((element) => {
      const slideElements = element.querySelectorAll(".splide__slide");
      const slidesWrapper = element.querySelector(
        ".splide__track .splide__list"
      );

      function getRandom() {
        let randomNumber = Math.random() * (5 - 1) + 1;

        const possibleValues = [1.1, randomNumber];

        return possibleValues[
          Math.floor(Math.random() * possibleValues.length)
        ];
      }

      const splide = new Splide(element, {
        type: 'loop',
        autoWidth: true,
        autoHeight: true,
        height:"100%",
        gap: "20px",
        direction: "ttb",
        arrows: false,
        pagination: false,
        snap: false,
        drag: false,
        autoScroll: {
          speed: getRandom(),
          pauseOnHover: false,
        },
      });

      splide.mount({ AutoScroll });

    });
  });
};

export default galleryAnim;
