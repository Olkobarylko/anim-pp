// let scrollDirection = 0;
// let hasLeftSection = false;

// function initScrollDirectionIndicator() {
//   const body = document.querySelector('body');

//   ScrollTrigger.create({
//     markers: false,
//     trigger: body,
//     start: 'top',
//     onUpdate: self => {
//       if (self.direction === 1) {
//         scrollDirection = 1;
//       } else {
//         scrollDirection = -1;
//       }
//     },
//     onLeaveBack: () => {
//       body.classList.remove('scrolling-up');
//     },
//   });

//   return scrollDirection;
// }

// const scrollToElement = (element, offset = 0, callback) => {
//   const elementPosition = element.getBoundingClientRect().top;
//   const offsetPosition = elementPosition + window.pageYOffset - offset;

//   gsap.to(window, {
//     duration: 1.5,
//     scrollTo: {
//       y: offsetPosition,
//       autoKill: false,
//     },
//     ease: "power2.inOut",
//     onComplete: callback,
//   });
// };

// ScrollTrigger.create({
//   markers: false,
//   trigger: ".gallery__sliders",
//   start: 'top',
//   end:'bottom-=122',
//   onEnterBack: () => {
//     if(hasLeftSection == true){
//       hasLeftSection == false;
//       scrollToGallery();
//     }
//   }
// });

// const scrollToGallery = () => {
//   const mediaQueryDesktop = window.matchMedia("(min-width: 768px)");
//   let lastScrollY = window.scrollY;
//   let isScrolling = false;

//   if (mediaQueryDesktop.matches) {
//     $(document).ready(function () {
//       window.addEventListener("scroll", () => {
//         if (isScrolling) return;

//         let scrollDirection = initScrollDirectionIndicator();
//         const gallerySliders = document.querySelector(".gallery__sliders");
//         const sColsLabels = document.querySelector(".s-cols-labels");
//         const gallerySection = document.querySelector(".gallery");

//         const currentScrollY = window.scrollY;

//         console.log(scrollDirection);
//         if (gallerySliders && sColsLabels && gallerySection) {
//           if (scrollDirection === 1) {
//             console.log('down');
//             if (currentScrollY < gallerySliders.offsetTop - 122) {
//               isScrolling = true;
//               scrollToElement(gallerySliders, 122, () => (isScrolling = false));
//             } else if (currentScrollY + sColsLabels.offsetHeight > sColsLabels.offsetTop - 122 + sColsLabels.offsetHeight) {
//               hasLeftSection = true;
//               isScrolling = true;
//             } else if (currentScrollY > gallerySliders.offsetTop - 122 && currentScrollY < sColsLabels.offsetTop) {
//               isScrolling = true;
//               scrollToElement(sColsLabels, 122, () => (isScrolling = false));
//             }
//           } else if (scrollDirection === -1) {
//             console.log('up');
//             if (currentScrollY < sColsLabels.offsetTop && currentScrollY > gallerySliders.offsetTop) {
//               isScrolling = true;
//               scrollToElement(gallerySliders, 122, () => (isScrolling = false));
//             } else if (currentScrollY < gallerySliders.offsetTop) {
//               isScrolling = true;
//               scrollToElement(gallerySection, 122, () => (isScrolling = false));
//               hasLeftSection = false;
//             }
//           }
//         }

//         lastScrollY = currentScrollY;
//       });
//     });
//   }
// };

// import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const scrollToGallery = () => {
//   $(document).ready(function () {
//     let hasScrolled = false;
//     window.addEventListener("scroll", () => {
//       if (!hasScrolled) {
//         const currentScroll =
//           window.pageYOffset || document.documentElement.scrollTop;
//         if (currentScroll > 0) {
//           hasScrolled = true;
//           gsap.to(window, {
//             scrollTo: {
//               y: ".s-cols-labels",
//               offsetY: 122,
//             },
//             duration: 5,
//             ease: "none",
//           });
//         }
//       }
//     });
//   });
// };

// export default scrollToGallery;
