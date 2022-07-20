import React, { Component } from "react";

import ScrollMagic from "scrollmagic";
import gsap from "gsap";
import "./ScrollSlider.css";
import $ from "jquery";

import * as hello from "gsap";

class ScrollSlider extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    console.log(hello);

    var wipeAnimation = gsap
      .timeline()
      // animate to second panel
      .to("#slideContainer", 0.5, { z: -150 }) // move back in 3D space
      .to("#slideContainer", 1, { x: "-25%" }) // move in to first panel
      .to("#slideContainer", 0.5, { z: 0 }) // move back to origin in 3D space
      // animate to third panel
      .to("#slideContainer", 0.5, { z: -150, delay: 1 })
      .to("#slideContainer", 1, { x: "-50%" })
      .to("#slideContainer", 0.5, { z: 0 })
      // animate to forth panel
      .to("#slideContainer", 0.5, { z: -150, delay: 1 })
      .to("#slideContainer", 1, { x: "-75%" })
      .to("#slideContainer", 0.5, { z: 0 });

    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "500%",
    })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addIndicators() // add indicators (requires plugin)
      .addTo(this.controller);
  }

  render() {
    return (
      <div id="pinContainer">
        <div id="slideContainer">
          <section className="panel blue">
            <b>ONE</b>
          </section>
          <section className="panel turqoise">
            <b>TWO</b>
          </section>
          <section className="panel green">
            <b>THREE</b>
          </section>
          <section className="panel bordeaux">
            <b>FOUR</b>
          </section>
        </div>
      </div>
    );
  }
}

export default ScrollSlider;
