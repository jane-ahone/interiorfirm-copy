import React from "react";
import "./styles.css";

const InnovativeSection = () => {
  return (
    <section className="grid-section-inno relative">
      <p className="title-inno font-heading text-design-black font-bold text-5xl lg:text-7xl">
        Providing Innovative Interior Design.
      </p>
      <svg
        className="horizontal-1-inno"
        viewBox="0 0 1310 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line opacity="0.32" y1="0.5" x2="1310" y2="0.5" stroke="#030605" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="shape-1"
        width="640"
        height="600"
        viewBox="0 0 640 600"
      >
        <defs>
          <clipPath id="shapeMask">
            <path d="M0 0H640V160H405V600H0V0Z" />
          </clipPath>
        </defs>

        <image
          href="/images/living-room.webp"
          width="640"
          height="600"
          clipPath="url(#shapeMask)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="shape-2"
        width="875"
        height="428"
        viewBox="0 0 875 428"
        fill="none"
      >
        <defs>
          <clipPath id="shapeMask2">
            <path
              d="M0 0H875V128C875 293.685 740.685 428 575 428H0V0Z"
              fill="#E0E3E1"
            />
          </clipPath>
        </defs>

        <image
          href="/images/chair.webp"
          width="875"
          height="428"
          clipPath="url(#shapeMask2)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
      <svg
        className="long-line-0-inno"
        width="1"
        height="800"
        viewBox="0 0 1 800"
        fill="none"
      >
        <line
          opacity="0.32"
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="800"
          stroke="#030605"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="958"
        height="578"
        viewBox="0 0 958 578"
        fill="none"
        className="shape-3"
      >
        <path
          d="M0 0H558C778.914 0 958 179.086 958 400V578H0V0Z"
          fill="#FFD476"
        />
      </svg>
      <div className="shape-3-text">
        <p className="px-9">
          Since 1999, we have been providing great flooring solutions and
          customer service for homeowners and commercial clients. among flooring
          materials, none is more elegant and luxurious than natural stone.
        </p>
        {/* <button className="ml-9 mt-6 bg-design-green py-2 px-5 text-white font-semibold ">
          About Us
        </button> */}
      </div>
      <svg
        className="horizontal-2-inno"
        viewBox="0 0 1310 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line opacity="0.32" y1="0.5" x2="1310" y2="0.5" stroke="#030605" />
      </svg>
    </section>
  );
};

export default InnovativeSection;
