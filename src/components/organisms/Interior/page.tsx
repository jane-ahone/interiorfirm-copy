import { MoveRight } from "lucide-react";
import "./style.css";

const Interior = () => {
  return (
    <section className="grid-section " id="projects">
      <p className="title-int font-heading text-design-black font-bold text-7xl py-12">
        Amazing Projects from Talented Interior Architects!
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="rect-1-int"
        width="1310"
        height="580"
        viewBox="0 0 1310 580"
        fill="none"
      >
        <path d="M0 0H1310V580H0V0Z" fill="#E0E3E1" />
      </svg>

      <div className="rect-2-int relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1310"
          height="290"
          viewBox="0 0 1310 290"
          fill="none"
        >
          <path
            d="M0 0H1310V290H290C129.837 290 0 160.163 0 0Z"
            fill="#FFD476"
          />
        </svg>
        <span className="text-design-black absolute top-0">
          <p className="font-body text-4xl font-semibold">Modern Style.</p>
          <p className="font-body">
            The modernist movement began to take shape when it shifted away from
            traditional construction and design elements such as wood, stone,
            and brick and toward industrial materials like as glass, steel, and
            concrete.
          </p>
          <button className="explore-btn bg-design-green py-4 px-5 text-white font-semibold ">
            {" "}
            Explore
            <MoveRight />
          </button>
        </span>
      </div>
    </section>
  );
};

export default Interior;
