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

// setInterval(() => {
const preloader = document.querySelector(".preloader");
const bg = preloader.querySelector(".preloader-inner div");
const number = preloader.querySelector("span");

const logo = document.querySelector(".logo");

let heroTl = gsap.timeline({
  default: {
    ease: "power2.inOut",
    // duration: 2,
  },
});

heroTl.pause();

document.body.classList.add("fixed");
const preloaderTl = gsap.timeline({
  default: { ease: "circ.out" },
});

preloaderTl.to(bg, {
  width: "100%",
  duration: 7,
});

preloaderTl.to(bg, {
  opacity: 0,
  delay: 0.5,
});

preloaderTl.to([".logo h4, .logo img"], {
  y: 0,
  stagger: 0.05,
  duration: 0.5,
});

preloaderTl.to(
  ".logo",
  {
    transform: "translate(0,0)",
    duration: 0.85,
    onComplete: () => window.scrollTo(0, 0),
  },
  "+=0.5"
);

preloaderTl.to([".nav-header ul", ".nav-btns"], {
  opacity: 1,
});

preloaderTl.to(".preloader", {
  opacity: 0,
  duration: 1,
  pointerEvents: "none",
  onComplete: () => {
    setTimeout(() => {
      heroTl.play();
      document.body.classList.remove("fixed");
    }, -1200);
  },
});

setInterval(() => {
  number.innerText = Math.floor(bg.style.width.slice(0, -1)) + "%";
}, 100);

// }, 1000);

const mql = window.matchMedia("screen and (max-width: 992px)");
const mq2 = window.matchMedia("screen and (max-width: 375px)");

heroTl.to(
  ".hero h1 span",
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: "back.out(2)",
    duration: 1,
  }
  // "-=0.5"
);

heroTl.fromTo(
  ".btn-cover",
  {
    y: "100%",
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
  }
);

heroTl.fromTo(
  ".hero-right",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);

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
  },
  `${mql.matches ? "-=1.25" : "-=1"}`
);

heroTl.to(
  ".hero .get-started",
  {
    y: 0,
    opacity: 1,
  },
  `${mql.matches ? "-=1.25" : ""}`
);

heroTl.fromTo(
  ".hero-left p",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
  },
  `${mql.matches ? "-=0.5" : "-=1"}`
);

ScrollTrigger.create({
  trigger: ".hero-stats",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    heroTl.to(
      [".hero-stats div", ".hero-stats svg"],

      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        // duration: 0.05,
      }
    );
  },
});

ScrollTrigger.create({
  trigger: ".handle",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    heroTl.to(
      ".handle-left h2 .char",

      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
        // duration: 0.05,
      }
    );
    heroTl.to(
      ".handle-left p .word",

      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      },
      "-=0.5"
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
    gsap.to(
      ".billing-right h2 .char",

      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
      }
    );
    gsap.to(
      ".billing-right p .word",

      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      },
      "-=0.5"
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
    gsap.to(".card-deal h2 .char", {
      stagger: 0.03,
      opacity: 1,
      ease: "power2.inOut",
    });
    gsap.to(
      ".card-deal p .word",
      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      },
      "-=0.5"
    );
  },
});

ScrollTrigger.create({
  trigger: ".testimonial-intro",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".testimonial-intro h2 .char", {
      stagger: 0.03,
      opacity: 1,
      ease: "power2.inOut",
    });
    gsap.to(
      ".testimonial-intro p .word",
      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      },
      "-=0.5"
    );
  },
});

ScrollTrigger.create({
  trigger: ".testimonials",
  start: "top bottom-=200",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".testimonials li", {
      y: 0,
      // stagger: 0.03,
      opacity: 1,
      ease: "circ.out",
      duration: 0.8,
    });
  },
});

ScrollTrigger.create({
  trigger: ".service",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".service-left h2 .char", {
      stagger: 0.03,
      opacity: 1,
      ease: "power2.inOut",
    });
    gsap.to(
      ".service-left  p .word",
      {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      },
      "-=0.5"
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
      // duration: 1,
      ease: "circ.out",
    },
    "-=0.5"
  );

  tl.fromTo(
    ".mobile-menu li div",
    {
      x: "150%",
      opacity: 0,
      // marginLeft: "2rem",
    },
    {
      x: 0,
      opacity: 1,
      ease: "back.out(2)",
      duration: 1,
      stagger: 0.05,
    }
    // "-=0.45"
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
      x: 0,
    },
    {
      x: "150%",
      opacity: 0,
      ease: "back.in(2)",
      duration: 1,
      stagger: 0.05,
    },
    "-=0.5"
  );

  tl.to(
    menu,
    {
      x: "100%",
      // duration: 1,
      ease: "circ.out",
      delay: 0.25,
    }
    // "-=0.5"
  );
};

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

const year = document.querySelector(".year");
year.innerText = new Date().getFullYear();

window.addEventListener("scroll", () => {
  const header = document.querySelector(".nav-header");
  if (window.scrollY > 10) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
});

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("mobile-link")) {
      closeMenu();

      setTimeout(() => {
        lenis.scrollTo(e.target.hash, { offset: mq2.matches ? -60 : -150 });
      }, 2600);
    } else {
      lenis.scrollTo(e.target.hash, { offset: mq2.matches ? -60 : -150 });
    }
  });
});
