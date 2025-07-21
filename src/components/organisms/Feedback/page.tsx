"use client";
import { useEffect } from "react";
import "./style.css";
import { triggerAnimationRight } from "@/lib/animationTriggers";

const Feedback = () => {
  useEffect(() => {
    triggerAnimationRight("feedbacks");
  }, []);
  return (
    <section className="grid-section-feed lg:mt-16 " id="feedbacks">
      <p className="title-feed font-heading text-design-black font-bold text-5xl py-6 lg:text-7xl lg:py-12">
        Our Customers Feedback.
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="elmnt-1"
        viewBox="0 0 228 158"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          opacity="0.1"
          d="M207.757 14.1649C220.928 27.3086 228 42.0502 228 65.9467C228 107.997 197.689 139.366 152 158C179.5 144.024 187.524 123.109 190.647 105.261C192.446 94.9793 179.512 84.8756 169.114 83.9682C146.045 81.9618 127.861 64.1685 127.861 42.0502C127.861 30.8978 132.577 20.2021 140.97 12.3162C149.364 4.43027 160.747 0 172.617 0C186.338 0 199.458 5.88702 207.757 14.1649ZM79.883 14.1649C93.0541 27.3086 100.126 42.0502 100.126 65.9467C100.126 107.997 71.0227 139.366 25.3332 158C52.8125 144.034 60.3442 123.14 63.1153 105.301C64.7173 94.9867 51.6374 84.8756 41.2394 83.9682C18.1708 81.9618 -0.00012207 64.1685 -0.00012207 42.0502C-0.00012207 30.8978 4.71523 20.2021 13.1086 12.3162C21.502 4.43027 32.8859 0 44.7559 0C58.4768 0 71.5967 5.88702 79.8958 14.1649H79.883Z"
          fill="#030605"
        />
      </svg>

      <div className="rect-2-feed relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "265px",
          }}
          viewBox="0 0 265 410"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id="feed-clip">
              <path
                d="M0 0L265 -4.63341e-05L265 145C265 291.355 146.356 410 7.16867e-05 410L0 0Z"
                fill="#E0E3E1"
              />
            </clipPath>
          </defs>
          <image
            href="/images/person.webp"
            width="265"
            height="600"
            clipPath="url(#feed-clip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
        <div className="text-design-black lg:px-12 lg:py-3">
          <p className="font-body text-4xl font-semibold leading-8 ">
            Jordyn Dorwart
          </p>
          <p className="font-body text-base leading-7 lg:text-4xl lg:leading-14">
            “ Amazing fast and reliable customer support! The team of willing to
            go mile for customer service! ”
          </p>
          <p className="hidden lg:block text-design-grey text-[2rem] leading-8 mt-8">
            Jordyn Dorwart
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
