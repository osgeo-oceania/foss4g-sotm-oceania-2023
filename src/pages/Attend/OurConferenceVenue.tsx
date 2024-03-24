import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { MapComponent } from "../../components/Map";
import Content from "../../documents/attend/our-conference-venue.md";
import { markdownCommonStyles } from "../../utils/markdownCommonStyles";

const OurConferenceVenuePage = () => {
  const [mddText, setMddText] = useState("");

  // Fetch Terms of Use
  useEffect(() => {
    fetch(Content)
      .then((res) => res.text())
      .then((text) => setMddText(text));
  });

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/imgs/group photo.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
        className="relative flex items-center justify-center h-64 bg-gray-100 bg-no-repeat bg-cover bg-center"
      ></section>
      <section className="container prose-sm md:prose lg:prose-lg">
        <div>
          <Markdown
            options={{
              overrides: markdownCommonStyles,
            }}
            children={mddText}
          />
        </div>
      </section>

      <MapComponent width={"100vw"} height={400} />
    </>
  );
};
export default OurConferenceVenuePage;
