import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { HashLink } from "react-router-hash-link";

import AboutFoss4g from "../documents/about-foss4g-sotm-oceania.md";
import KeynoteSpeakers from "../components/KeynoteSpeakers";
import SponsorshipLevels from "../components/SponsorshipLevels";

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
      <section
        style={{
          backgroundImage: "url('/imgs/auk_data_2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 0px",
        }}
      >
        <div className="relative grid w-full h-96 lg:h-[34rem] place-items-center">
          <div className="flex flex-col items-center mx-auto text-center">
            <h1 className="rounded-full bg-white bg-opacity-50 p-4 padding text-4xl font-semibold text-white uppercase md:text-6xl">
              <img
                src="/imgs/FOSS4G_2023_Logo_Colour.png"
                alt="FOSS4G 2023"
                className="w-28 h-28 md:w-64 md:h-64"
              />
            </h1>
            <p className="bg-sky-600 bg-opacity-50 p-2 mt-6 text-2xl leading-5 text-white">
              Auckland. October 16-20, 2023.
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
                <circle cx="27" cy="26" r="18" stroke="white" strokeWidth="2" />
                <path
                  d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                  fill="white"
                />
              </svg>
            </HashLink>
          </div>
        </div>
      </section>
      <section className="container px-6 py-8 mx-auto lg:py-16" id="about">
        <div className="lg:flex lg:items-center lg:-mx-4">
          <div className="lg:w-1/2 lg:px-4">
            <h3 className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl">
              {" "}
              About Auckland
            </h3>

            <p className="mt-6 text-gray-500">
              Auckland is the largest city in New Zealand, situated on the
              country's North Island. Known as the "City of Sails," Auckland is
              surrounded by stunning beaches, picturesque islands, and a
              stunning harbor. The city boasts a vibrant culture, with a rich
              history and a diverse population that includes Maori, Pacific
              Islander, and European communities.
            </p>
            <p className="mt-6 text-gray-500">
              Auckland is a popular destination for business and tourism,
              offering a range of world-class attractions and activities.
              Visitors can explore the city's many museums and galleries, sample
              local cuisine at the bustling markets and restaurants, or take a
              scenic cruise on the harbor. For those looking for a bit of
              adventure, Auckland is a great base for exploring the stunning
              natural beauty of New Zealand, with opportunities for hiking,
              skiing, and water sports.
            </p>
            <p className="mt-6 text-gray-500">
              Auckland is also a hub for innovation and technology, with a
              thriving startup scene and a strong economy. The city is home to a
              number of universities and research institutions, making it a
              prime location for the FOSS4G conference.
            </p>

            <button className="flex items-center mt-8 -mx-2 text-indigo-500">
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
            </button>
          </div>

          <div className="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
            <img
              className="object-cover w-full rounded-xl h-96"
              src="/imgs/heli_auk.png"
              alt="Auckland"
            />
          </div>
        </div>
      </section>

      <KeynoteSpeakers />

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

      <SponsorshipLevels />
    </div>
  );
};
export default Home;
