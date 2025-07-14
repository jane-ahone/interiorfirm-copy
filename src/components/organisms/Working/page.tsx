import { MoveRight } from "lucide-react";
import "./style.css";

const Working = () => {
  return (
    <section className="grid-section mt-12 section-work min-h-[80vh] ">
      <div className="div-1-work">
        <p className="title-work font-heading text-design-black font-bold text-[5.12rem] leading-20 py-12">
          Interested in Working with Us?
        </p>

        <p className="font-body text-xl text-design-black leading-9 font-medium">
          Do you have a passion for creating beautiful and functional spaces? If
          you are interested in working with us, please visit our website and
          fill out the application form.
        </p>
        <button className="explore-btn bg-design-green mt-8 py-4 px-5 text-white font-semibold ">
          {" "}
          Explore Now
          <MoveRight />
        </button>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="elmnt-1-work"
        width="270"
        height="408"
        viewBox="0 0 270 408"
        fill="none"
      >
        <path
          d="M0 0H270V208C270 318.457 180.457 408 70 408H0V0Z"
          fill="#E0E3E1"
        />
      </svg>
    </section>
  );
};

export default Working;
