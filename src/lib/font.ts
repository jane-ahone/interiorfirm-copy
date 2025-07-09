import localFont from "next/font/local";

export const headingFont = localFont({
  src: [
    {
      path: "../../public/fonts/Roxborough CF.ttf",
      weight: "400", // Normal weight
      style: "normal",
    },
  ],
  variable: "--font-heading", // CSS variable for headings
  display: "swap", // Improves FOUT
});

export const bodyFont = localFont({
  src: [
    {
      path: "../../public/fonts/visbycf-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/visbycf-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/visbycf-demibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/visbycf-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});
