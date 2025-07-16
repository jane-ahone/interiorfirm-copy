"use client";
import React from "react";
import "./hero.css";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative grid-section-hero" id="home">
      <div className="div-1 bg-design-yellow rounded-tr-[25rem] text-design-black relative">
        <svg
          className="short-line"
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="114"
          viewBox="0 0 2 114"
          fill="none"
        >
          <path d="M1 0L0.999995 114" stroke="#030605" />
        </svg>

        <p className="main-text font-bold text-2xl  leading-10 md:text-8xl md:leading-28 pl-1 font-heading relative z-40">
          Modern Interior Design Service
        </p>
        <p className="sentence pl-1">
          Interiorfirm is an acclaimed multidisciplinary studio specializing in
          interior architecture, interior design and décor that redefines
          laid-back luxury.
        </p>

        <button className="explore-btn bg-design-green py-4 px-5 text-white font-semibold ">
          {" "}
          Explore Now
          <MoveRight />
        </button>
      </div>

      <div className="div-2 relative right-[50%] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150%"
          height="auto"
          viewBox="0 0 806 598"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <path
            opacity="0.32"
            d="M805.5 0.5V597.5H300C134.591 597.5 0.500016 463.409 0.5 298V0.5H805.5Z"
            stroke="#030605"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="absolute top-0 left-12 bottom-12 right-0 w-full h-auto ">
          {" "}
          {/* Wrapper for positioning */}
          <svg
            viewBox="0 0 806 598"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            width="150%"
            height="auto"
          >
            {/* Define the mask using your path */}
            <mask id="myMask">
              <path
                d="M805.5 0.5V597.5H300C134.591 597.5 0.500016 463.409 0.5 298V0.5H805.5Z"
                fill="white"
                stroke="none"
              />
            </mask>

            {/* Now, add the image and apply the mask */}
            <image
              href="/images/statement-gallery-wall.jpg"
              width="700"
              height="700"
              className="w-full"
              mask="url(#myMask)"
              x="0"
              y="0"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>
      <svg
        className="long-line-0"
        width="1"
        height="4000"
        viewBox="0 0 1 4000"
        fill="none"
      >
        <line
          opacity="0.32"
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="4000"
          stroke="#030605"
        />
      </svg>
      <svg
        className="long-line-1"
        width="1"
        height="1418"
        viewBox="0 0 1 1418"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          opacity="0.32"
          x1="0.5"
          y1="-2.18557e-08"
          x2="0.500062"
          y2="1418"
          stroke="#030605"
        />
      </svg>
      <svg
        className="long-line-2"
        width="1"
        height="5000"
        viewBox="0 0 1 5000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          opacity="0.32"
          x1="0.5"
          y1="-2.18557e-08"
          x2="0.500062"
          y2="5000"
          stroke="#030605"
        />
      </svg>
      <svg
        className="horizontal-1"
        viewBox="0 0 1310 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line opacity="0.32" y1="0.5" x2="1310" y2="0.5" stroke="#030605" />
      </svg>
    </section>
  );
};

export default Hero;
