import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

// register gsap plugins
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
const hero = document.querySelector(".mos-hero");

// header animation
const animateHeader = ScrollTrigger.create({
  start: "top var(--wp--custom--spacing--p-y)",
  end: 999999,
  toggleClass: { className: "mos-header-scrolled", targets: ".mos-header" },
});

// hero animation timeline
const heroTimeLine = gsap.timeline({
  defaults: { ease: "expo.inOut", duration: 0.9 },
});

if (hero) {
  heroTimeLine
    .fromTo(
      ".mos-hero-headline, .mos-hero-text",
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        y: 60,
        opacity: 0,
      },
      {
        stagger: 0.12,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y: 0,
        opacity: 1,
      }
    )
    .fromTo(
      ".mos-hero-svg",
      { strokeDashoffset: 2048 },
      { strokeDashoffset: 0 },
      "-=0.3"
    )
    .fromTo(
      ".mos-order",
      { y: 300, autoAlpha: 0 },
      { y: 0, autoAlpha: 1 },
      "-=0.6"
    );
}

// global animation
const animateElement = (element, direction) => {
  direction = direction || 1;
  const y = direction * 90;

  if (element.classList.contains("mos-animate")) {
    element.style.transform = `translateY(${y}px)`;
    element.style.opacity = "0";
  }

  gsap.fromTo(
    element,
    {
      y,
      autoAlpha: 0,
    },
    { y: 0, autoAlpha: 1, duration: 0.9, ease: "expo.inOut", overwrite: "auto" }
  );
};

function hideElement(element) {
  gsap.set(element, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.utils.toArray(".mos-animate").forEach((element) => {
    hideElement(element);
    ScrollTrigger.create({
      trigger: element,
      onEnter: () => {
        animateElement(element);
      },
      onEnterBack: () => {
        animateElement(element, -1);
      },
      onLeave: () => {
        hideElement(element);
      },
    });
  });
});

// animations
let matchMedia = gsap.matchMedia();

matchMedia.add("(min-width: 906px)", () => {
  if (hero) {
    gsap.to(".mos-about-top", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".mos-about",
        scrub: true,
      },
    });

    gsap.to(".mos-services-top", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".mos-services",
        scrub: true,
      },
    });
    gsap.to(".mos-contact-grid-bottom", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".mos-contact",
        scrub: true,
      },
    });
  }
});

matchMedia.add("(min-width: 782px)", () => {
  const scrubElement = document.querySelector(".mos-services-rows-stack");
  const pinedElement = document.querySelector(".mos-services-main");

  if (!scrubElement) {
    return;
  }

  ScrollTrigger.create({
    trigger: ".mos-services-rows",
    start: "top 21%",
    end: `+=${scrubElement.offsetHeight - pinedElement.offsetHeight}`,
    pin: ".mos-services-container",
    scrub: true,
  });
});
