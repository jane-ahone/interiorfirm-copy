import "./style.css";

const Unique = () => {
  return (
    <section className="grid-section-uni ">
      <p className="title-unique font-heading text-design-black font-bold text-7xl">
        We will make Unique Designs for you.
      </p>
      <div className="img-cntr-main">
        <div className="img-cntr relative">
          <div className="relative h-fit w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="705"
              height="600"
              viewBox="0 0 705 600"
              fill="none"
            >
              <path
                d="M0 0H705V160C542.076 160 410 292.076 410 455V600H0V0Z"
                fill="#E0E3E1"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bottom-0 right-0 absolute"
              width="265"
              height="410"
              viewBox="0 0 265 410"
              fill="none"
            >
              <path
                d="M265 410L0 410L1.26763e-05 265C2.54711e-05 118.645 118.645 -1.27948e-05 265 0L265 410Z"
                fill="#E0E3E1"
              />
            </svg>
          </div>
        </div>
        <div className="img-cntr-2 relative">
          <div className="relative h-fit w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="265"
              height="410"
              viewBox="0 0 265 410"
              fill="none"
            >
              <path
                d="M0 0L265 -4.63341e-05L265 145C265 291.355 146.356 410 7.16867e-05 410L0 0Z"
                fill="#E0E3E1"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0"
              width="705"
              height="600"
              viewBox="0 0 705 600"
              fill="none"
            >
              <path
                d="M705 600L0 600L1.39876e-05 440C162.924 440 295 307.924 295 145L295 -3.58433e-05L705 0L705 600Z"
                fill="#E0E3E1"
              />
            </svg>
          </div>
        </div>
      </div>

      <p className="uni-text">
        We create designs in a collaborative environment enabling us to deliver
        the client’s ultimate vision. Our designs are current, yet still possess
        a timeless style generating broad market appeal.
      </p>

      <svg
        className="horizontal-1-uni"
        viewBox="0 0 1310 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line opacity="0.32" y1="0.5" x2="1310" y2="0.5" stroke="#030605" />
      </svg>
    </section>
  );
};

export default Unique;
