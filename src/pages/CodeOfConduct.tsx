import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

import CodeOfConduct from "../documents/code-of-conduct.md";

const CodeOfConductPage = () => {
  const [mddText, setMddText] = useState("");

  // Fetch Terms of Use
  useEffect(() => {
    fetch(CodeOfConduct)
      .then((res) => res.text())
      .then((text) => setMddText(text));
  });

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/imgs/office_with_paper_work.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 0px",
        }}
        className="relative flex items-center justify-center h-64 bg-gray-100 bg-no-repeat bg-cover bg-center"
      ></section>
      <section className="container px-6 py-8 mx-auto lg:py-16">
        <div>
          <Markdown
            options={{
              overrides: {
                h1: {
                  props: {
                    className:
                      "text-3xl font-medium text-gray-800 md:text-2xl lg:text-3xl",
                  },
                },
                h2: {
                  props: {
                    className:
                      "text-2xl font-semibold text-gray-700 capitalize",
                  },
                },
                h3: {
                  props: {
                    className: "text-xl font-semibold text-gray-700 capitalize",
                  },
                },
                ul: {
                  props: {
                    className: "list-disc list-outside ms-8",
                  },
                },
                a: {
                  props: {
                    className: "text-blue-500 underline",
                    target: "_blank",
                  },
                }
              },
            }}
            children={mddText}
          />
        </div>
      </section>
    </>
  );
};
export default CodeOfConductPage;
