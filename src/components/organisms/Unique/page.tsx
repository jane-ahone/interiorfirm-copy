import "./style.css";

const Unique = () => {
  return (
    <section className="grid-section-uni p-4 lg:p-0 ">
      <p className="title-unique font-heading text-design-black font-bold text-7xl">
        We will make Unique Designs for you.
      </p>
      <div className="img-cntr-main ">
        <div className="img-cntr relative">
          <div className="relative w-full max-w-[705px] mx-auto">
            {/* First SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 705 600"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="uni-clip">
                  <path
                    d="M0 0H705V160C542.076 160 410 292.076 410 455V600H0V0Z"
                    fill="#E0E3E1"
                  />
                </clipPath>
              </defs>
              <image
                href="/images/blue.jpg"
                width="705"
                height="600"
                clipPath="url(#uni-clip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>

            {/* Second SVG (absolute positioned) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 265 410"
              className="absolute bottom-0 right-0 w-[37.5%] h-auto" // 265/705 ≈ 37.5%
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="uni-clip-2">
                  <path
                    d="M265 410L0 410L1.26763e-05 265C2.54711e-05 118.645 118.645 -1.27948e-05 265 0L265 410Z"
                    fill="#E0E3E1"
                  />
                </clipPath>
              </defs>
              <image
                href="/images/couch.jpg"
                width="265"
                height="410"
                clipPath="url(#uni-clip-2)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
        </div>
        <div className="img-cntr-2 relative">
          <div className="relative w-full max-w-[705px] aspect-[705/600] mx-auto">
            {/* Second (larger) SVG, absolutely positioned */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 705 600"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="uni-clip-3">
                  <path
                    d="M705 600L0 600L1.39876e-05 440C162.924 440 295 307.924 295 145L295 -3.58433e-05L705 0L705 600Z"
                    fill="#E0E3E1"
                  />
                </clipPath>
              </defs>
              <image
                href="/images/croissant.jpg"
                width="705"
                height="600"
                clipPath="url(#uni-clip-3)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>

            {/* First (smaller) SVG, positioned on top of the second */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 265 410"
              className="relative w-[37.5%] h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="uni-clip-4">
                  <path
                    d="M0 0L265 -4.63341e-05L265 145C265 291.355 146.356 410 7.16867e-05 410L0 0Z"
                    fill="#E0E3E1"
                  />
                </clipPath>
              </defs>
              <image
                href="/images/lamp.jpg"
                width="265"
                height="410"
                clipPath="url(#uni-clip-4)"
                preserveAspectRatio="xMidYMid slice"
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
