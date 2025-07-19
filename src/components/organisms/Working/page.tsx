import { MoveRight } from "lucide-react";
import "./style.css";

const Working = () => {
  return (
    <section className="grid-section mt-12 mb-8 section-work ">
      <div className="div-1-work">
        <p className="title-work font-heading text-design-black font-bold text-4xl leading-14 py-6 lg:text-[5.12rem] lg:leading-20 lg:py-12">
          Interested in Working with Us?
        </p>

        <p className="font-body text-xl text-design-black leading-9 font-medium">
          Do you have a passion for creating beautiful and functional spaces? If
          you are interested in working with us, please visit our website and
          fill out the application form.
        </p>
        <button className="explore-btn bg-design-green mt-8 mb-8 py-4 px-5 text-white font-semibold ">
          {" "}
          Explore Now
          <MoveRight />
        </button>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="elmnt-1-work"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "auto", maxWidth: "270px" }}
        viewBox="0 0 270 408"
        fill="none"
      >
        <defs>
          <clipPath id="work-clip">
            <path
              d="M0 0H270V208C270 318.457 180.457 408 70 408H0V0Z"
              fill="#E0E3E1"
            />
          </clipPath>
        </defs>
        <image
          href="/images/decor.webp"
          width="270"
          height="408"
          clipPath="url(#work-clip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </section>
  );
};

export default Working;
