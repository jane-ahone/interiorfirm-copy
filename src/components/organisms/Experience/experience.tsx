import React from "react";
import "./experience.css";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <section className="container-grid h-screen font-body  ">
      <span className="image-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="270"
          height="418"
          viewBox="0 0 270 418"
          fill="none"
        >
          <path
            d="M0 0H270V283C270 357.558 209.558 418 135 418C60.4416 418 0 357.558 0 283V0Z"
            fill="#E0E3E1"
          />
        </svg>
      </span>
      <span className="image-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="270"
          height="418"
          viewBox="0 0 270 418"
          fill="none"
        >
          <path
            d="M0 0H270V283C270 357.558 209.558 418 135 418C60.4416 418 0 357.558 0 283V0Z"
            fill="#E0E3E1"
          />
        </svg>
      </span>

      <div className="flex experience-text">
        <div>
          <span className=" leading-28 font-bold text-black text-7xl">25</span>
          <p className="text-design-black text-2xl font-medium">
            Years of experience
          </p>
        </div>
        <div>
          <span className="leading-28 font-bold text-black text-7xl">162</span>
          <p className="text-design-black text-2xl font-medium">
            Projects completed
          </p>
        </div>
      </div>

      <Image
        className="scroll"
        src="/scroll.svg"
        alt="scroll down"
        width={150}
        height={150}
      />
      <Image
        src="/images/nightstand.png"
        className="nightstand-img"
        alt="scroll down"
        width={320}
        height={480}
      />
      <svg
        className="arrow-right"
        xmlns="http://www.w3.org/2000/svg"
        width="125"
        height="6"
        viewBox="0 0 125 6"
        fill="none"
      >
        <path
          d="M125 3.00001L120 0.113259L120 5.88676L125 3.00001ZM-4.37114e-08 3.5L120.5 3.50001L120.5 2.50001L4.37114e-08 2.5L-4.37114e-08 3.5Z"
          fill="#030605"
        />
      </svg>
      <div className="email-form">
        <p className="font-heading text-design-black font-bold text-4xl">
          Make your dream home.
        </p>
        <span>
          <input
            placeholder="Your email address"
            className="bg-design-light-grey px-6 py-5 inline-block text-design-grey w-[70%]"
          />
          <button className="bg-design-black px-9 py-5 text-white font-semibold inline-block w-[30%]">
            Let&rsquo;s Chat
          </button>
        </span>
      </div>
    </section>
  );
};

export default ExperienceSection;
