import React from "react";
import "./hero.css";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <main className="bg-white relative grid main-container overflow-visible">
      <div className="container bg-design-yellow h-svh rounded-tr-[25rem] text-design-black ">
        <p className="main-text font-bold text-8xl leading-28 font-heading relative z-40">
          Modern Interior Design Service
        </p>
        <p className="sentence">
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

      <div className="overflow-visible relative right-[80%] top-[10%]">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180%"
            height="auto"
            viewBox="0 0 806 598"
            preserveAspectRatio="xMidYMid meet" // Preserves aspect ratio and centers content
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
        </span>
        <div className="absolute bottom-12 left-6 w-full h-auto ">
          {" "}
          {/* Wrapper for positioning */}
          <svg
            viewBox="0 0 806 598"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            width="180%"
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
              mask="url(#myMask)" // Apply the mask
              x="0" // Position the image within the SVG
              y="0"
              preserveAspectRatio="xMidYMid slice" // Optional: Adjust how it fits
            />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default Hero;
