import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bottleMobileAnim = () => {
  window.onload = function () {
    document.querySelector(".bottlemob").style.height =
      document.querySelector(".s-content-cards-slider").offsetTop +
      document.querySelector(".s-content-cards-slider").clientHeight +
      "px";

    document.querySelector(".bottlemob-circle").style.top =
      document.querySelector(".s-cols-labels").offsetTop +
      document.querySelector(".s-cols-labels").clientHeight -
      110 +
      "px";

    document.querySelector(".bottlemob-circle").style.height =
      document.querySelector(".s-content-cards-slider").offsetTop +
      document.querySelector(".s-content-cards-slider").clientHeight -
      document.querySelector(".s-cols-labels").offsetTop -
      document.querySelector(".s-cols-labels").clientHeight +
      110 +
      "px";

    const mediaQueryDesktop = window.matchMedia("(max-width: 768px)");
    if (mediaQueryDesktop.matches) {
      const tl = gsap.timeline();

      tl.fromTo(
        ".bottlemob-image-item",
        {
          x: "-50%",
          y: 204,
          opacity: 0,
          duration: 0.01,
        },
        {
          x: "-50%",
          y: 204,
          opacity: 0,
          duration: 0.01,
        }
      );

      tl.to(".bottlemob-image-item", {
        ease: "none",
        scrollTrigger: {
          trigger: ".s-cols-labels",
          start: "top-=300",
          endTrigger: ".s-cols-grid",
          end: "top bottom",
          scrub: true,
        },
        height: "304px",
        width: "168px",
        filter: "drop-shadow(0px 0px 0px #fff)",
      });

      tl.from(".bottlemob-image-item", {
        height: "304px",
        width: "168px",
        y: 204,
        duration: 0.01,
      });

      tl.to(".bottlemob-image-item", {
        ease: "none",
        scrollTrigger: {
          trigger: ".s-cols-grid",
          start: "top bottom",
          endTrigger: ".s-cols-grid",
          end: "bottom bottom",
          scrub: true,
        },
        height: "249px",
        y: 10,
        width: "138px",
      });

      tl.from(".bottlemob-circle-image-item", {
        x: "-50%",
        y: 65,
        rotation: 0,
        duration: 0.01,
      });

      tl.to(".bottlemob-circle-image-item", {
        ease: "none",
        scrollTrigger: {
          trigger: ".s-cols-grid",
          start: "top bottom",
          endTrigger: ".s-cols-grid",
          end: "bottom bottom",
          scrub: true,
        },
        rotation: 118,
      });

      tl.to(".bottlemob-image-item", {
        ease: "none",
        scrollTrigger: {
          trigger: ".s-img-timeline",
          start: "top bottom",
          endTrigger: ".s-img-timeline",
          end: "bottom bottom",
          scrub: true,
        },
        rotation: 118,
        x: "-150%",
      });

      tl.from(".bottlemob-circle-image-item", {
        rotation: 118,
        duration: 0.01,
      });

      tl.to(".bottlemob-circle-image-item", {
        ease: "none",
        scrollTrigger: {
          trigger: ".s-img-timeline",
          start: "top bottom",
          endTrigger: ".s-img-timeline",
          end: "bottom bottom",
          scrub: true,
        },
        rotation: 220,
      });

      tl.to(".bottlemob-image-cover-item", {
        ease: "none",
        scrollTrigger: {
          trigger: ".s-img-timeline",
          start: "top bottom",
          endTrigger: ".s-img-timeline",
          end: "bottom bottom",
          scrub: true,
        },
        x: 40,
        y: -50,
        rotation: 70,
      });

      tl.to(".bottlemob-pills", {
        ease: "none",
        scrollTrigger: {
          trigger: ".s-img-timeline",
          start: "top bottom",
          endTrigger: ".s-img-timeline",
          end: "bottom bottom",
          scrub: true,
        },
        width: "170px",
        height: "90px",
        y: -120,
        x: -100,
      });

      tl.from(".bottlemob-image-item", {
        x: "-150%",
        rotation: 118,
        y: 10,
        duration: 0.01,
      });

      tl.from(".bottlemob-pills", {
        width: "170px",
        height: "90px",
        y: -120,
        x: -100,
        duration: 0.01,
      });

      tl.to(".bottlemob-image-item", {
        ease: "none",
        scrollTrigger: {
          trigger: ".s-img-timeline",
          start: "bottom bottom",
          endTrigger: ".s-content-cards-slider",
          end: "bottom bottom",
          scrub: true,
        },
        rotation: 0,
        x: "-50%",
        y: -20,
      });

      tl.from(".bottlemob-circle-image-item", {
        rotation: 220,
        y: 85,
        duration: 0.01,
      });

      tl.to(".bottlemob-circle-image-item", {
        ease: "none",
        scrollTrigger: {
          trigger: ".s-img-timeline",
          start: "bottom bottom",
          endTrigger: ".s-content-cards-slider",
          end: "bottom bottom",
          scrub: true,
        },
        y:-10,
        rotation: 20,
      });

      tl.to(".bottlemob-pills", {
        ease: "none",
        scrollTrigger: {
          trigger: ".s-img-timeline",
          start: "bottom bottom",
          endTrigger: ".s-content-cards-slider",
          end: "bottom bottom",
          scrub: true,
        },
        width: "0",
        height: "0",
        y: 0,
        x: 0,
      });

      tl.from(".bottlemob-image-cover-item", {
        x: 40,
        y: -50,
        rotation: 70,
        duration: 0.01,
      });

      tl.to(".bottlemob-image-cover-item", {
        ease: "none",
        scrollTrigger: {
          trigger: ".s-img-timeline",
          start: "bottom bottom",
          endTrigger: ".s-content-cards-slider",
          end: "bottom bottom",
          scrub: true,
        },
        x: 0,
        y: 0,
        rotation: 0,
      });

      tl.fromTo(
        ".bottlemob-image-item",
        {
          x: "-50%",
          y: 204,
          opacity: 1,
          rotation: 0,
          height: "382px",
          width: "210px",
          duration: 0.01,
        },
        {
          x: "-50%",
          y: 204,
          opacity: 1,
          rotation: 0,
          height: "382px",
          width: "210px",
          duration: 0.01,
        }
      );

      tl.fromTo(".bottlemob-circle-image-item", {
        x: "-50%",
        y: 85,
        rotation: 0,
        duration: 0.01,
      },
      {
        x: "-50%",
        y: 85,
        rotation: 0,
        duration: 0.01,
      });
    }
  };
};

window.addEventListener("resize", function () {
  bottleMobileAnim();
});

export default bottleMobileAnim;
