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
        <div className="text-design-black text-int">
          <p className="font-body text-2xl lg:text-4xl font-semibold leading-9">
            Modern Style.
          </p>
          <p className="font-body text-xs leading-4 md:text-base md:leading-7 lg:leading-9 lg:text-xl">
            The modernist movement began to take shape when it shifted away from
            traditional construction and design elements such as wood, stone,
            and brick and toward industrial materials like as glass, steel, and
            concrete.
          </p>
        </div>
      </div>

      {/* <button className="explore-btn bg-design-green py-4 px-5 text-white font-semibold hidden ">
        {" "}
        Explore
        <MoveRight />
      </button> */}
    </section>
  );
};

export default Interior;
