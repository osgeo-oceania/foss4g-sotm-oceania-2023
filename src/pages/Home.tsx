import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { MapComponent } from "../components/Map";
import AboutFoss4g from "../documents/about-foss4g-sotm-oceania.md";
import Intro from "../documents/home-preamble.md";
import Acknowledge from "../documents/acknowledgement-country.md";
import { markdownCommonStyles } from "../utils/markdownCommonStyles";

const Home = () => {
  const [introMddText, setIntroMddText] = useState("");
  const [aboutMddText, setAboutMddText] = useState("");
  const [acknowledgeMddText, setAcknowledgeText] = useState("");

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
      <section className="bg-white">
        <div
          style={{
            backgroundImage: "url('/imgs/2024/home-view.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            margin: "auto",
          }}
        >
          <div className="container mx-auto grid md:grid-cols-[600px_1fr] items-center md:py-16">
            <div className="flex flex-col">
              <div className="p-4 lg:text-6xl md:text-5xl text-3xl font-bold text-white">
                <img
                  src="/imgs/2024/2024_logo_round.png"
                  alt="FOSS4G SotM Oceania 2024"
                  className="w-28 h-28 md:w-auto md:h-96"
                />
              </div>
            </div>
            <div className="text-2xl font-display leading-[3rem] font-['Roboto Serif']">
              <div>Join us for <span className="text-4xl">FOSS4G SotM Oceania</span> in <span className="text-4xl">Hobart, Tasmania</span> </div>
              <div>from <span className="text-4xl">5-8 November 2024</span>.</div>
              
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-8">
          <div className="prose-base max-w-none">
            <p className="text-lg">FOSS4G SotM Oceania is a gathering for our vibrant open geospatial community to come together and geek out over all things open geospatial.
            </p>
            <p>FOSS4G events are part of a conference series run by the OSGeo community with the objective of fostering and promoting the adoption of open source geospatial technology. SotM refers to the conference of the OpenStreetMap Foundation (OSMF), supporting the development of the OpenStreetMap project. FOSS4G SotM Oceania is part of the larger global community, and merges the two conferences into one exciting Oceania centered event. 
            </p>
          </div>
      </section>

      <section className="container mx-auto">
        <div className="prose-base max-w-none">
          <Markdown
            options={{
              overrides: markdownCommonStyles,
            }}
            children={introMddText}
          />
          </div>
      </section>


      <MapComponent width={"100vw"} height={400} />

      {/* <SponsorshipLevels /> */}
    </div>
  );
};
export default Home;
