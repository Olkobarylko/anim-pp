import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const bottleAnim = () => {
  const mediaQueryDesktop = window.matchMedia("(min-width: 768px)");

  if (mediaQueryDesktop.matches) {
    $(document).ready(function () {
        const firstPointOff =
          document.querySelector(".s-cols-labels__col-img").offsetTop -
          document.querySelector(".bottle--js").offsetTop -
          440;
        const secontPointOff =
          document.querySelector(".s-cols-grid").offsetTop -
          document.querySelector(".s-cols-labels").offsetTop +
          130;
        const thirdPointOff =
          document.querySelector(".s-cols-grid__col-img").offsetTop -
          document.querySelector(".s-cols-labels").offsetTop +
          90;
        const fourthPointOff =
          document.querySelector(".s-img-timeline__img-box").offsetTop -
          document.querySelector(".s-cols-labels").offsetTop +
          100;
        const fifthPointOff =
          document.querySelector(".s-content-cards-slider").offsetTop -
          document.querySelector(".s-cols-labels").offsetTop +
          300;

        const firstPointCircle =
          document.querySelector(".s-cols-grid").offsetTop -
          document.querySelector(".s-cols-labels").offsetTop +
          20;
        const secondPointCircle =
          document.querySelector(".s-img-timeline__img-box").offsetTop -
          document.querySelector(".s-cols-labels").offsetTop -
          270;
        const thirdPointCircle =
          document.querySelector(".s-content-cards-slider").offsetTop -
          document.querySelector(".s-cols-labels").offsetTop -
          40;
          const secondDemoPointCircle =
          document.querySelector(".s-cols-grid").offsetTop -
          document.querySelector(".s-cols-labels").offsetTop -
          130;

        const mediaQueryTablet = window.matchMedia(
          "(min-width: 768px) and (max-width: 1024px)"
        );

        const tl = gsap.timeline();

        tl.fromTo(
          ".bottle-image-item",
          {
            y: 0,
            opacity: 0,
            duration: 0.001,
          },
          {
            y: 0,
            opacity: 0,
            duration: 0.001,
          }
        );

        if (mediaQueryTablet.matches) {
          tl.to(".bottle-image-item", {
            ease: "none",
            scrollTrigger: {
              trigger: ".s-cols-labels",
              start: "top-=800",
              endTrigger: ".s-cols-labels",
              end: "center center",
              scrub: true,
            },
            y: firstPointOff,
            height: "420px",
            width: "190px",
            filter: "drop-shadow(0px 0px 0px #fff)",
          });
        } else {
          tl.to(".bottle-image-item", {
            ease: "none",
            scrollTrigger: {
              trigger: ".s-cols-labels",
              start: "top-=800",
              endTrigger: ".s-cols-labels",
              end: "top-=125",
              scrub: true,
            },
            y: firstPointOff,
            width: "257px",
            transition:"none",
            height: "370px",
            filter: "drop-shadow(0px 0px 0px #fff)",
          });
        }

        tl.to(".bottle-circle-item", {
          rotation: 30,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".s-cols-labels",
            start: "top-=400",
            endTrigger: ".s-cols-labels",
            end: "top-=125",
            scrub: true,
          },
        });

        if (mediaQueryTablet.matches) {
          tl.from(".bottle-image-item", {
            y: firstPointOff,
            height: "420px",
            width: "190px",
            duration: 0.001,
            opacity: 1,
          });
        } else {
          tl.from(".bottle-image-item", {
            y: firstPointOff,
            height: "370px",
            width: "257px",
            duration: 0.001,
            opacity: 1,
          });
        }

        tl.to(".bottle-image-item", {
          ease: "none",
          scrollTrigger: {
            trigger: ".s-cols-labels",
            start: "top-=125",
            endTrigger: ".s-cols-grid",
            end: "start-=400",
            scrub: true,
          },
          y: secontPointOff,
          opacity: 0.3,
        });

        tl.from(".bottle-image-item", {
          y: secontPointOff,
          opacity: 0.3,
          duration: 0.001,
        });

        if (mediaQueryTablet.matches) {
          tl.to(".bottle-image-item", {
            ease: "none",
            scrollTrigger: {
              trigger: ".s-cols-grid",
              start: "start-=400",
              endTrigger: ".s-cols-grid",
              end: "center center",
              scrub: true,
            },
            height: "480px",
            width: "180px",
            y: thirdPointOff,
            opacity: 1,
          });
        } else {
          tl.to(".bottle-image-item", {
            ease: "none",
            scrollTrigger: {
              trigger: ".s-cols-grid",
              start: "start-=400",
              endTrigger: ".s-cols-grid",
              end: "top-=125",
              scrub: true,
            },
            y: thirdPointOff,
            height: "430px",
            opacity: 1,
          });
        }

        tl.from(".bottle-circle-item", {
          rotation: 30,
          duration: 0.001,
        });

        tl.to(".bottle-circle-item", {
          ease: "none",
          scrollTrigger: {
            trigger: ".s-cols-labels",
            start: "top-=125",
            endTrigger: ".s-cols-grid",
            end: "start-=400",
            scrub: true,
          },
          y: secondDemoPointCircle,
          rotation: 75,
        });

        tl.from(".bottle-circle-item", {
          y: secondDemoPointCircle,
          rotation: 75,
          duration: 0.001,
        });

        tl.to(".bottle-circle-item", {
          ease: "none",
          scrollTrigger: {
            trigger: ".s-cols-grid",
            start: "top-=400",
            endTrigger: ".s-cols-grid",
            end: "top-=125",
            scrub: true,
            markers:true,
          },
          y: firstPointCircle,
          rotation: 150,
        });

        tl.from(".bottle-image-item", {
          y: thirdPointOff,
          duration: 0.001,
        });

        tl.to(".bottle-image-item", {
          ease: "none",
          scrollTrigger: {
            trigger: ".s-cols-grid",
            start: "center center",
            endTrigger: ".s-img-timeline",
            end: "center center",
            scrub: true,
          },
          y: fourthPointOff,
          x: "-30vw",
          rotation: 127,
        });

        tl.to(".bottle-image-cover-item", {
          scrollTrigger: {
            trigger: ".s-cols-grid",
            start: "top top",
            endTrigger: ".s-img-timeline",
            end: "center center",
            scrub: true,
          },
          x: 120,
          y: -110,
          rotation: 85,
        });

        tl.to(".bottle-pills", {
          scrollTrigger: {
            trigger: ".s-cols-grid",
            start: "top top",
            endTrigger: ".s-img-timeline",
            end: "center center",
            scrub: true,
          },
          x: -85,
          y: -340,
          width: "260px",
          height: "400px",
          rotation: -105,
        });

        tl.from(".bottle-circle-item", {
          rotation: 150,
          y: firstPointCircle,
        });

        tl.to(".bottle-circle-item", {
          ease: "none",
          scrollTrigger: {
            trigger: ".s-cols-grid",
            start: "center center",
            endTrigger: ".s-img-timeline",
            end: "center center",
            scrub: true,
          },
          y: secondPointCircle,
          x: "-30vw",
          rotation: 250,
        });

        tl.from(".bottle-image-item", {
          y: fourthPointOff,
          x: "-30vw",
          rotation: 127,
          duration: 0.001,
        });

        tl.to(".bottle-image-item", {
          ease: "none",
          scrollTrigger: {
            trigger: ".s-img-timeline",
            start: "center center",
            endTrigger: ".s-content-cards-slider",
            end: "top top",
            scrub: true,
          },
          y: fifthPointOff,
          x: "-50vw",
          rotation: 0,
        });

        tl.from(".bottle-image-cover-item", {
          x: 120,
          y: -110,
          rotation: 85,
          duration: 0.001,
        });

        tl.to(".bottle-image-cover-item", {
          scrollTrigger: {
            trigger: ".s-img-timeline",
            start: "center center",
            endTrigger: ".s-content-cards-slider",
            end: "top top",
            scrub: true,
          },
          x: 0,
          y: 0,
          rotation: 0,
        });

        tl.from(".bottle-pills", {
          x: -85,
          y: -340,
          width: "260px",
          height: "400px",
          rotation: -105,
          duration: 0.001,
        });

        tl.to(".bottle-pills", {
          scrollTrigger: {
            trigger: ".s-img-timeline",
            start: "center center",
            endTrigger: ".s-content-cards-slider",
            end: "top top",
            scrub: true,
          },
          x: 0,
          y: 0,
          width: "0",
          height: "0",
          rotation: 0,
        });

        tl.from(".bottle-circle-item", {
          y: secondPointCircle,
          x: "-30vw",
          rotation: 250,
          duration: 0.001,
        });

        tl.to(".bottle-circle-item", {
          ease: "none",
          scrollTrigger: {
            trigger: ".s-img-timeline",
            start: "center center",
            endTrigger: ".s-content-cards-slider",
            end: "top top",
            scrub: true,
          },
          y: thirdPointCircle,
          x: "-50vw",
          rotation: 190,
        });

        tl.fromTo(
          ".bottle-image-item",
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            x: 0,
            height: "597px",
            width: "326px",
            duration: 0.001,
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            rotation: 0,
            height: "597px",
            width: "326px",
            duration: 0.001,
          }
        );

        tl.fromTo(
          ".bottle-circle-item",
          {
            y: 0,
            duration: 0.001,
          },
          {
            y: 0,
            duration: 0.001,
          }
        );

        tl.fromTo(
          ".bottle-pills",
          {
            x: 0,
            y: 0,
            width: "0px",
            height: "0px",
            rotation: 0,
            duration: 0.001,
          },
          {
            x: 0,
            y: 0,
            width: "0px",
            height: "0px",
            rotation: 0,
            duration: 0.001,
          }
        );

        tl.fromTo(
          ".bottle-image-cover-item",
          {
            x: 0,
            y: 0,
            rotation: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
          }
        );      
    });
  }
};

window.addEventListener("resize", function () {
  bottleAnim();
});

export default bottleAnim;
