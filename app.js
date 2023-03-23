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
    duration: 2,
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
    opacity: 0,
  },
  {
    width: "100%",
    duration: 1,
    opacity: 1,
  }
  // "-=0.5"
);

ScrollTrigger.create({
  trigger: ".handle",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.fromTo(
      ".handle-left h2 .char",
      {
        opacity: 0,
      },
      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
        // duration: 0.05,
      }
    );
    gsap.fromTo(
      ".handle-left p .char",
      {
        opacity: 0,
      },
      {
        stagger: 0.02,
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.01,
      }
    );
  },
});

ScrollTrigger.create({
  trigger: ".handle-right",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".handle-right  li", {
      y: 0,
      stagger: 0.05,
      // opacity: 1,
      ease: "circ.out",
      duration: 1,
    });
  },
});

ScrollTrigger.create({
  trigger: ".billing",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.fromTo(
      ".billing-right h2 .char",
      {
        opacity: 0,
      },
      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      ".billing-right p .char",
      {
        opacity: 0,
      },
      {
        stagger: 0.02,
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.01,
      }
    );
  },
});

ScrollTrigger.create({
  trigger: ".billing-right-stores",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".billing-right-stores ", {
      y: 0,
      ease: "circ.out",
    });
  },
});

ScrollTrigger.create({
  trigger: ".card-deal",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.fromTo(
      ".card-deal h2 .char",
      {
        opacity: 0,
      },
      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      ".card-deal p .char",
      {
        opacity: 0,
      },
      {
        stagger: 0.02,
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.01,
      }
    );
  },
});

ScrollTrigger.create({
  trigger: ".testimonial-intro",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.fromTo(
      ".testimonial-intro h2 .char",
      {
        opacity: 0,
      },
      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      ".testimonial-intro p .char",
      {
        opacity: 0,
      },
      {
        stagger: 0.02,
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.01,
      }
    );
  },
});

ScrollTrigger.create({
  trigger: ".testimonials",
  start: "top bottom-=200",
  once: true,
  markers: true,
  onEnter: () => {
    gsap.to(".testimonials li", {
      y: 0,
      // stagger: 0.03,
      opacity: 1,
      ease: "circ.out",
      duration: 0.8,
    });
    gsap.fromTo(
      ".testimonial-intro p .char",
      {
        opacity: 0,
      },
      {
        stagger: 0.02,
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.01,
      }
    );
  },
});

ScrollTrigger.create({
  trigger: ".service",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.fromTo(
      ".service-left h2 .char",
      {
        opacity: 0,
      },
      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      ".service-left  p .char",
      {
        opacity: 0,
      },
      {
        stagger: 0.02,
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.01,
      }
    );
  },
});

ScrollTrigger.create({
  trigger: ".partners",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.fromTo(
      ".partners li",
      {
        opacity: 0,
      },
      {
        stagger: 0.2,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      }
    );
  },
});

function cursor(e) {
  const mouse = document.querySelector(".cursor");
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

window.addEventListener("mousemove", cursor);

// menu functions
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".mobile-menu");

const openMenu = () => {
  const tl = gsap.timeline({
    default: {
      ease: "power2.inOut",
    },
  });

  tl.to(openBtn, {
    y: "100px",
    duration: 1,
  });

  tl.to(
    closeBtn,
    {
      y: 0,
      duration: 1,
    },
    "-=1.5"
  );

  tl.to(
    menu,
    {
      x: 0,
      duration: 1,
      ease: "back.out(1)",
    },
    "-=0.5"
  );

  tl.fromTo(
    ".mobile-menu li div",
    {
      y: "100%",
      opacity: 0,
      marginLeft: "2rem",
    },
    {
      y: 0,
      opacity: 1,
    },
    "-=0.5"
  );
};

const closeMenu = () => {
  const tl = gsap.timeline({
    default: {
      ease: "power2.inOut",
    },
  });

  tl.to(closeBtn, {
    y: "-100px",
    duration: 1,
  });

  tl.to(
    openBtn,
    {
      y: 0,
      duration: 1,
    },
    "-=1.5"
  );

  tl.fromTo(
    ".mobile-menu li div",
    {
      y: 0,
    },
    {
      y: "100%",
      opacity: 0,
    },
    "-=0.5"
  );

  tl.to(
    menu,
    {
      x: "100%",
      duration: 1,
      ease: "back.out(1)",
    }
    // "-=0.5"
  );
};

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
