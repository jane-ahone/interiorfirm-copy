"use client";

import { useEffect } from "react";
import "./style.css";
import { triggerAnimation } from "@/lib/animationTriggers";

const DreamSpace = () => {
  useEffect(() => {
    triggerAnimation("services");
  }, []);
  return (
    <section className=" grid-section " id="services">
      <p className="title font-heading text-design-black font-bold text-5xl lg:text-7xl">
        Create your Dream Space.
      </p>

      <div className="blur"></div>

      <div className="flex flex-col lg:flex-row images">
        <div className=" py-12 px-7 items-center flex flex-col gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="146"
            height="146"
            viewBox="0 0 146 146"
            fill="none"
          >
            <path
              opacity="0.2"
              d="M14.1633 63.6527L8.43979 58.3081C6.63706 56.6247 6.77259 53.7268 8.72457 52.219L59.6586 12.8753C61.0908 11.769 63.0872 11.7621 64.527 12.8584L115.721 51.8377C117.853 53.4614 117.817 56.6817 115.648 58.2567L107.534 64.1498C106.096 65.1942 104.142 65.1646 102.736 64.0772L101.799 63.352V111C101.799 113.209 100.008 115 97.7986 115H26.3741C24.165 115 22.3741 113.209 22.3741 111V61.6764L19.2547 63.9578C17.7044 65.0917 15.5671 64.9636 14.1633 63.6527Z"
              fill="#28887A"
            />
            <path
              d="M32.3741 71.6764L29.2547 73.9578C27.7044 75.0917 25.5671 74.9636 24.1633 73.6527L18.4398 68.3081C16.6371 66.6247 16.7726 63.7268 18.7246 62.219L69.6586 22.8753C71.0908 21.769 73.0872 21.7621 74.527 22.8584L125.721 61.8377C127.853 63.4614 127.817 66.6817 125.648 68.2567L117.534 74.1498C116.096 75.1942 114.142 75.1646 112.736 74.0772L111.799 73.352M32.3741 71.6764L69.6576 44.4083C71.096 43.3563 73.0568 43.3827 74.4664 44.4731L111.799 73.352M32.3741 71.6764V121C32.3741 123.209 34.165 125 36.3741 125H107.799C110.008 125 111.799 123.209 111.799 121V73.352"
              stroke="#030605"
              strokeWidth="4"
            />
            <path
              d="M52 82.0917V81.2L57.7273 86.2462L65.3636 78.6769L59 73H60.6603C64.5092 73 68.2237 74.416 71.0959 76.9783L71.817 77.6216C72.5858 78.3074 73.1173 79.2194 73.335 80.2264L74.8161 87.0775C74.8767 87.3579 75.0198 87.6137 75.2269 87.8122L90.0786 102.043C92.2533 104.126 92.3513 107.57 90.2987 109.774C88.156 112.075 84.5253 112.119 82.3278 109.871L67.0592 94.2481C66.7888 93.9714 66.4183 93.8154 66.0314 93.8154H59.2756C58.2896 93.8154 57.3493 93.3991 56.6864 92.6691L55.6407 91.5174C53.2979 88.9372 52 85.5769 52 82.0917Z"
              stroke="#030605"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <circle cx="85.793" cy="105.69" r="2" fill="#030605" />
          </svg>
          <p className="text-design-black text-center lg:text-left text-4xl font-semibold">
            Smooth workflow
          </p>
          <p className="text-design-grey text-center lg:text-left text-xl">
            From concept to completion, our process is streamlined for
            efficiency and clarity—so you stay informed and stress-free.
          </p>
        </div>
        <div className="py-12 px-7 items-center flex flex-col gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="146"
            height="146"
            viewBox="0 0 146 146"
            fill="none"
          >
            <path
              opacity="0.2"
              d="M25 54.7145V51.8095H36.1467V26.8533C36.1467 12.0227 48.1693 0 63 0C77.8307 0 89.8533 12.0226 89.8533 26.8533V51.8095H101V54.7145C101 60.0102 98.8997 65.0897 95.1598 68.8389L89.8533 74.1587L99.0231 118.451C99.2671 119.629 97.6042 120.155 97.1261 119.051L93.3044 110.222L63.1623 99.4267L33.3552 108.698L28.8739 119.051C28.3957 120.155 26.7329 119.629 26.9769 118.451L36.1467 74.1587L30.8402 68.8389C27.1003 65.0897 25 60.0102 25 54.7145Z"
              fill="#28887A"
            />
            <path
              d="M46.2933 83.3175L40.823 77.8201C37.0936 74.0722 35 69.0001 35 63.7129V60.619H46.2933V35.2067C46.2933 20.1808 58.4742 8 73.5 8V8C88.5258 8 100.707 20.1809 100.707 35.2067V60.619H112V63.7129C112 69.0001 109.906 74.0722 106.177 77.8201L100.707 83.3175M46.2933 83.3175L35 138L43.4652 118.397M46.2933 83.3175H58.6133M100.707 83.3175H88.3867M100.707 83.3175L112 138L104.203 119.944M58.6133 83.3175H88.3867M58.6133 83.3175L51.0392 100.857M88.3867 83.3175L96.4063 101.889M96.4063 101.889L43.4652 118.397M96.4063 101.889L104.203 119.944M43.4652 118.397L51.0392 100.857M51.0392 100.857L104.203 119.944"
              stroke="#030605"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M47 70L48.253 71.2057C50.1161 72.9985 52.6012 74 55.1868 74H91.8132C94.3988 74 96.8839 72.9985 98.747 71.2057L100 70"
              stroke="#030605"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-design-black text-4xl text-center lg:text-left  font-semibold">
            Professionalism
          </p>
          <p className="text-design-grey text-xl text-center lg:text-left">
            We uphold the highest standards in communication, delivery, and
            execution to ensure every detail reflects quality.
          </p>
        </div>
        <div className="py-12 px-7 items-center flex flex-col gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="146"
            height="146"
            viewBox="0 0 146 146"
            fill="none"
          >
            <path
              opacity="0.2"
              d="M17 12H44.9328H81.9076H109C111.209 12 113 13.7909 113 16V26.3306V41.5041V54.9917V70.1653V85.3388V99.6694V110C113 112.209 111.209 114 109 114H81.1723H44.1975H17C14.7909 114 13 112.209 13 110V99.6694V85.3388V70.1653V54.9917V41.5041V26.3306V16C13 13.7909 14.7909 12 17 12Z"
              fill="#28887A"
            />
            <path
              d="M56.0168 25H30C27.7909 25 26 26.7909 26 29V38.4876M56.0168 25V38.4876M56.0168 25H90.7731M56.0168 38.4876H73.395M56.0168 38.4876H37.8487M26 38.4876H37.8487M26 38.4876V52.7686M90.7731 25H116C118.209 25 120 26.7909 120 29V38.4876M90.7731 25V38.4876M90.7731 38.4876H73.395M90.7731 38.4876H107.361M120 38.4876V52.7686M120 38.4876H107.361M73.395 38.4876V52.7686M73.395 52.7686H55.6218M73.395 52.7686H90.3782M120 52.7686H107.361M120 52.7686V65.4628M107.361 38.4876V52.7686M107.361 52.7686H90.3782M37.8487 38.4876V52.7686M37.8487 52.7686H26M37.8487 52.7686H55.6218M26 52.7686V65.4628M55.6218 52.7686V65.4628M55.6218 65.4628H73M55.6218 65.4628H37.8487M26 65.4628V79.7438M26 65.4628H37.8487M90.3782 52.7686V65.4628M90.3782 65.4628H73M90.3782 65.4628H107.361M120 65.4628V79.7438M120 65.4628H107.361M73 65.4628V79.7438M73 79.7438H55.4244M73 79.7438H90.1807M26 79.7438H37.8487M26 79.7438V94.0248M120 79.7438H107.361M120 79.7438V94.0248M107.361 65.4628V79.7438M107.361 79.7438H90.1807M37.8487 65.4628V79.7438M37.8487 79.7438H55.4244M55.4244 79.7438V94.0248M55.4244 94.0248H37.8487M55.4244 94.0248H72.8025M120 94.0248V107.512M120 94.0248H107.361M90.1807 79.7438V94.0248M90.1807 94.0248H72.8025M90.1807 94.0248H107.361M37.8487 94.0248H26M37.8487 94.0248V107.512M26 94.0248V107.512M37.8487 107.512H26M37.8487 107.512H55.3256M26 107.512V117C26 119.209 27.7909 121 30 121H55.3256M72.8025 94.0248V107.512M72.8025 107.512H55.3256M72.8025 107.512H90.0819M120 107.512V117C120 119.209 118.209 121 116 121H90.0819M120 107.512H107.361M107.361 94.0248V107.512M107.361 107.512H90.0819M55.3256 107.512V121M55.3256 121H90.0819M90.0819 107.512V121"
              stroke="#030605"
              strokeWidth="4"
            />
          </svg>
          <p className="text-design-black text-4xl text-center lg:text-left font-semibold">
            Trusted platform
          </p>
          <p className="text-design-grey text-xl text-center lg:text-left">
            Join thousands who rely on us for consistent results, transparent
            service, and dependable support every step of the way.
          </p>
        </div>
      </div>
      <svg
        className="horizontal-1-dream"
        viewBox="0 0 1310 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line opacity="0.32" y1="0.5" x2="1310" y2="0.5" stroke="#030605" />
      </svg>
    </section>
  );
};

export default DreamSpace;
