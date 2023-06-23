import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

import CallForPapers from "../documents/present.md";

import Blockquote from "../components/Blockquote";
import Button from "../components/Button";

const PresentPage = () => {
  const [mddText, setMddText] = useState("");

  // Fetch Terms of Use
  useEffect(() => {
    fetch(CallForPapers)
      .then((res) => res.text())
      .then((text) => setMddText(text));
  });

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/imgs/2020_auckland_hub.jpg')",
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
                blockquote: {
                    component: Blockquote,
                },
                a: {
                  props: {
                    className: "text-blue-500 underline",
                    target: "_blank",
                  },
                },
                button: {
                  component: Button,
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
export default PresentPage;
