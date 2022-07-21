import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollBox.css";
import Scrollbar from "smooth-scrollbar";

const ScrollBox = () => {
  gsap.registerPlugin(ScrollTrigger);
  let boxRef = useRef(null);

  // wait until DOM has been rendered
  useEffect(() => {
    // Setup
    const scroller = document.querySelector(".scroller");

    const bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: false,
    });

    ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: scroller });

    // The actual animations and ScrollTriggers
    gsap.to("section.grey .text", {
      x: 360,
      duration: 10,
      scrollTrigger: {
        trigger: "section.grey",
        start: "top top",
        end: () => "+=" + 300,
        pin: true,
        scrub: true,
        markers: true,
      },
    });

    gsap.from("section.red .text", {
      x: -300,
      opacity: 0,
      scrollTrigger: {
        trigger: "section.red",
        start: "top 50%",
        toggleActions: "play none none reset",
        // markers:true
      },
    });

    // Only necessary to correct marker position - not needed in production
    if (document.querySelector(".gsap-marker-scroller-start")) {
      const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

      bodyScrollBar.addListener(({ offset }) => {
        gsap.set(markers, { marginTop: -offset.y });
      });
    }
  });

  // DOM to render
  return (
    <div className="scroller">
      <section className="grey">
        <div className="text">Section 2</div>
      </section>

      <section className="red">
        <div className="text">Section 3</div>
      </section>
    </div>
  );
};

export default ScrollBox;
