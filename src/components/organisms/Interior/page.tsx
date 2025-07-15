import { MoveRight } from "lucide-react";
import "./style.css";

const Interior = () => {
  return (
    <section className="grid-section " id="projects">
      <p className="title-int font-heading text-design-black font-bold text-4xl lg:text-7xl py-12">
        Amazing Projects from Talented Interior Architects!
      </p>
      <div className="w-full rect-1-int aspect-[1310/580]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1310 580"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <clipPath id="int-clip-1">
              <path d="M0 0H1310V580H0V0Z" fill="#E0E3E1" />
            </clipPath>
          </defs>
          <image
            href="/images/bright.jpg"
            width="1310"
            height="580"
            clipPath="url(#int-clip-1)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>

      <div className="rect-2-int relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 1310 290"
          fill="none"
        >
          <path
            d="M0 0H1310V290H290C129.837 290 0 160.163 0 0Z"
            fill="#FFD476"
          />
        </svg>
      </div>
      <span className="text-design-black absolute top-0 text-int">
        <div>
          <p className="font-body text-2xl lg:text-4xl font-semibold leading-9">
            Modern Style.
          </p>
          <p className="font-body text-base leading-7 lg:leading-9 lg:text-xl">
            The modernist movement began to take shape when it shifted away from
            traditional construction and design elements such as wood, stone,
            and brick and toward industrial materials like as glass, steel, and
            concrete.
          </p>
        </div>
      </span>
      {/* <button className="explore-btn bg-design-green py-4 px-5 text-white font-semibold hidden ">
        {" "}
        Explore
        <MoveRight />
      </button> */}
    </section>
  );
};

export default Interior;
