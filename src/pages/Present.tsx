import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

import CallForPapers from "../documents/call-for-papers.md";

import Blockquote from "../components/Blockquote";

const PresentPage = () => {
  const [cfpText, setCfpText] = useState("");

  // Fetch Terms of Use
  useEffect(() => {
    fetch(CallForPapers)
      .then((res) => res.text())
      .then((text) => setCfpText(text));
  });

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/imgs/office_with_paper_work.png')",
          backgroundSize: "cover",
          backgroundPosition: "center -650px",
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
                }
              },
            }}
            children={cfpText}
          />
        </div>
      </section>
    </>
  );
};
export default PresentPage;
