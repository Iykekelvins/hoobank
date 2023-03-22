gsap.registerPlugin(ScrollTrigger);
Splitting();

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// gsap.set(".handle-right li", {
//   y: "100%",
// });

const heroTl = gsap.timeline({
  default: {
    ease: "power2.inOut",
  },
});

heroTl.to(".hero h1 span", {
  y: 0,
  opacity: 1,
  stagger: 0.05,
  ease: "back.out(2)",
  duration: 1,
});

heroTl.fromTo(
  ".hero-right .card-one",
  {
    top: "3rem",
  },
  {
    top: "0",
  },
  "-=0.5"
);

heroTl.fromTo(
  ".hero-right .card-three",
  {
    bottom: "0",
  },
  {
    bottom: "-7rem",
  },
  "-=0.5"
);

heroTl.fromTo(
  ".hero-right .vector",
  {
    transform: "scale(0)",
  },
  {
    transform: "scale(1)",
  },
  "-=0.5"
);

heroTl.fromTo(
  ".hero-left-discount",
  {
    width: 0,
  },
  {
    width: "100%",
    duration: 1,
  }
  // "-=0.5"
);

ScrollTrigger.create({
  trigger: ".handle",
  start: "top center",
  // once: true,
  markers: true,
  onEnter: () => {
    gsap.fromTo(
      ".handle-left .char",
      {
        y: "100%",
        // opacity: 0,
      },
      {
        y: "0%",
        stagger: 0.03,
        // opacity: 1,
        ease: "power2.inOut",
        // duration: 1,
      }
    );
    gsap.to(".handle-right  li", {
      y: "0%",
      stagger: 0.05,
      // opacity: 1,
      ease: "power2.inOut",
      // duration: 1,
    });
  },
});

function cursor(e) {
  const mouse = document.querySelector(".cursor");
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

window.addEventListener("mousemove", cursor);
