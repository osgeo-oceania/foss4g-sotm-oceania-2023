import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import MarkDownDoc from "../../documents/get-involved.md";
import { markdownCommonStyles } from "../../utils/markdownCommonStyles";

const GetInvolvedPage = () => {
  const [mddText, setMddText] = useState("");

  // Fetch Terms of Use
  useEffect(() => {
    fetch(MarkDownDoc)
      .then((res) => res.text())
      .then((text) => setMddText(text));
  });

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/imgs/workshop_crop_01.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 0px",
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
    </>
  );
};
export default GetInvolvedPage;
