import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { MapComponent } from "../components/Map";
import AboutFoss4g from "../documents/about-foss4g-sotm-oceania.md";
import { markdownCommonStyles } from "../utils/markdownCommonStyles";

const Home = () => {
  const [mddText, setMddText] = useState("");

  // Fetch Terms of Use
  useEffect(() => {
    fetch(AboutFoss4g)
      .then((res) => res.text())
      .then((text) => setMddText(text));
  });

  return (
    <div>
      <section className=" bg-primary-500">
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
              <h1 className="p-4 lg:text-6xl text-4xl font-bold text-white">
                {/* <img
                src="/imgs/FOSS4G_2023_Logo_Colour.png"
                alt="FOSS4G 2023"
                className="w-28 h-28 md:w-64 md:h-64"
              /> */}
                FOSS4G SotM Oceania 2024
              </h1>
              <p className="p-2 md:mt-36 text-3xl font-extralight text-white">
                Hobart, Tasmania, Australia. November 5-6, 2024.
              </p>

              <HashLink
                className="mt-8 cursor-pointer animate-bounce"
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
      <section
        className="container prose-sm md:prose lg:prose-lg"
        id="acknowledgement"
      >
        <h2> Acknowledgement of Country</h2>
        <p>
          FOSS4G SotM Oceania 2024 is taking place in nipaluna, lutruwita – now
          known as Hobart, Tasmania.
        </p>
        <p>
          In recognition of the deep history and culture of this Island, we
          would like to acknowledge the Muwinina people, the traditional owners
          of the Land upon which we gather. We acknowledge and pay our respects
          to all Tasmanian Aboriginal Communities; all of whom have survived
          invasion and dispossession, and continue to maintain their identity
          and culture.
        </p>
        <p>
          <i>lutruwita milaythina Pakana</i> – Tasmania is Aboriginal land.
        </p>
      </section>

      <div className="lg:flex lg:items-center lg:-mx-4">
        <section className="container prose-sm md:prose lg:prose-lg" id="about">
          <div className="lg:w-1/2 lg:px-4">
            <h2> About nipaluna / Hobart</h2>

            <p>
              Hobart, nestled on the southeastern coast of Tasmania, Australia,
              is a charming city known for its rich history and breathtaking
              natural surroundings. As the capital of Tasmania, Hobart offers
              visitors a unique blend of cultural experiences, outdoor
              adventures, and culinary delights.
            </p>
            <p>
              Embraced by the majestic kunanyi / Mt Wellington and overlooking
              the serene waters of timtumili minanya / River Derwent, Hobart
              boasts a picturesque setting that enchants travelers from around
              the globe. With its vibrant arts scene, historic architecture, and
              thriving culinary scene, Hobart offers something for everyone.
            </p>
            <p>
              For nature enthusiasts, Hobart serves as a gateway to Tasmania's
              stunning wilderness areas, including the rugged coastline of the
              Tasman Peninsula, the pristine beaches of Bruny Island, and the
              ancient forests of the Southwest National Park.
            </p>

            {/* <button className="flex items-center mt-8 -mx-2 text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <a
                href="https://www.youtube.com/watch?v=JcqK59zXSAA&ab_channel=TRIPXTREME"
                target="_blank"
                rel="noreferrer"
                className="mx-1 font-semibold"
              >
                Auckland Travel Guide
              </a>
            </button> */}
          </div>
        </section>

        <div className="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
          <img
            className="object-cover w-full rounded-xl h-96"
            src="/imgs/dock.JPG"
            alt="Hobart Dock"
          />
        </div>
      </div>

      {/* <KeynoteSpeakers /> */}

      <section className="container px-6 py-8 mx-auto lg:py-16">
        <Markdown
          options={{
            overrides: {
              h2: {
                props: {
                  className: "text-2xl font-semibold text-gray-700 capitalize",
                },
              },
              h3: {
                props: {
                  className: "text-xl font-semibold text-gray-700 capitalize",
                },
              },
              p: {
                props: {
                  className: "mt-6 text-gray-500",
                },
              },
            },
          }}
          children={mddText}
        />
      </section>

      <MapComponent width={"100vw"} height={400} />

      {/* <SponsorshipLevels /> */}
    </div>
  );
};
export default Home;
