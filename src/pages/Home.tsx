import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { MapComponent } from "../components/Map";
import AboutFoss4g from "../documents/about-foss4g-sotm-oceania.md";
import Intro from "../documents/home-preamble.md";
import { markdownCommonStyles } from "../utils/markdownCommonStyles";

const Home = () => {
  const [introMddText, setIntroMddText] = useState("");
  const [aboutMddText, setAboutMddText] = useState("");

  // Fetch Terms of Use
  useEffect(() => {
    fetch(AboutFoss4g)
      .then((res) => res.text())
      .then((text) => setAboutMddText(text));

    fetch(Intro)
      .then((res) => res.text())
      .then((text) => setIntroMddText(text));
  }, []);

  return (
    <div>
      <section className=" bg-blue-950">
        <div
          style={{
            backgroundImage: "url('/imgs/mountain.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            maxWidth: 1920,
            margin: "auto",
          }}
        >
          <div className="relative grid w-full h-96 lg:h-[34rem] place-items-center lg:pt-24 bg-black lg:bg-opacity-5 bg-opacity-20">
            <div className="flex flex-col items-center mx-auto text-center">
              <h1 className="p-4 lg:text-6xl md:text-5xl text-3xl font-bold text-white">
                {/* <img
                src="/imgs/FOSS4G_s_Logo_Colour.png"
                alt="FOSS4G 2023"
                className="w-28 h-28 md:w-64 md:h-64"
              /> */}
                FOSS4G SotM Oceania 2024
              </h1>
              <p className="p-2 md:mt-36 text-xl md:text-3xl font-extralight text-white flex md:flex-row flex-col gap-4">
                <span>Hobart, Tasmania, Australia.</span><span>November 5-8, 2024.</span>
              </p>

              <HashLink
                className="mt-8 cursor-pointer animate-bounce md:hidden"
                to="/#about"
              >
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="27"
                    cy="26"
                    r="18"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                    fill="white"
                  />
                </svg>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
      <div className="p-6" id="about">
        <section className="mx-auto mt-8 prose lg:prose-lg">
          <Markdown
            options={{
              overrides: markdownCommonStyles,
            }}
            children={introMddText}
          />
        </section>

        {/* <div className="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
          <img
            className="object-cover w-full rounded-xl h-96"
            src="/imgs/dock.jpeg"
            alt="Hobart Dock"
          />
        </div> */}

        {/* <KeynoteSpeakers /> */}

        <section className="mx-auto mt-8 prose lg:prose-lg">
          <Markdown
            options={{
              overrides: markdownCommonStyles,
            }}
            children={aboutMddText}
          />
        </section>
      </div>

      <MapComponent width={"100vw"} height={400} />

      {/* <SponsorshipLevels /> */}
    </div>
  );
};
export default Home;
