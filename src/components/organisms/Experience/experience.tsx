"use client";
import { useEffect } from "react";
import "./experience.css";
import Image from "next/image";

export const triggerAnimation = (sectionId: string) => {
  const target = document.getElementById(sectionId);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-to-animate-left");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  if (target) {
    observer.observe(target);
  }

  return () => {
    if (target) observer.unobserve(target);
  };
};

const ExperienceSection = () => {
  useEffect(() => {
    triggerAnimation("about");
  }, []);

  return (
    <section className="grid-section-exp font-body relative" id="about">
      <div className="section-1 relative ">
        <span className="image-1">
          <svg
            viewBox="0 0 270 478"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              maxWidth: "270px",
            }}
            preserveAspectRatio="xMidYMid meet"
          >
            <mask
              id="mask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="270"
              height="478"
            >
              <rect width="270" height="478" rx="135" fill="white" />
            </mask>

            <image
              href="/images/mirror.webp"
              width="270"
              height="478"
              mask="url(#mask)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </span>
        <span className="image-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 270 418"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "270px",
              maxHeight: "418px",
            }}
          >
            <defs>
              <mask id="shape-mask" x="0" y="0" width="270" height="418">
                <rect width="270" height="418" fill="black" />
                <path
                  d="M0 0H270V283C270 357.558 209.558 418 135 418C60.4416 418 0 357.558 0 283V0Z"
                  fill="white"
                />
              </mask>
            </defs>

            <image
              href="/images/room.webp"
              width="270"
              height="418"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#shape-mask)"
            />
          </svg>
        </span>
        <div className="flex experience-text ">
          <div>
            <span className=" leading-28 font-bold text-black text-6xl lg:text-7xl">
              25
            </span>
            <p className="text-design-black text-2xl font-medium">
              Years of experience
            </p>
          </div>
          <div>
            <span className="leading-28 font-bold text-black text-6xl lg:text-7xl">
              162
            </span>
            <p className="text-design-black text-2xl font-medium">
              Projects completed
            </p>
          </div>
        </div>
      </div>

      <div className="section-2 relative ">
        <Image
          className="scroll"
          src="/scroll.svg"
          alt="scroll down"
          width={100}
          height={100}
        />
        <Image
          src="/images/nightstand.png"
          className="nightstand-img"
          alt="Image of a nightstand"
          width={160}
          height={240}
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
        <div className="email-form ">
          <p className="font-heading text-design-black font-bold text-2xl lg:text-4xl">
            Make your dream home.
          </p>
          <span className="flex email-div">
            <input
              placeholder="Your email address"
              className="bg-design-light-grey px-6 py-3 lg:py-5 grow text-xs lg:text-base text-design-grey"
            />
            <button className="bg-design-black px-9 py-3 lg:py-5 text-white text-xs lg:text-base font-semibold ">
              Let&rsquo;s Chat
            </button>
          </span>
        </div>
      </div>
      <svg
        className="horizontal-1-exp"
        viewBox="0 0 1310 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line opacity="0.32" y1="0.5" x2="1310" y2="0.5" stroke="#030605" />
      </svg>
    </section>
  );
};

export default ExperienceSection;
