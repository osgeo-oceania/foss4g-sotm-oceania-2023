import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

import Sponsorship from "../documents/sponsorship.md";

import Blockquote from "../components/Blockquote";
import Table from "../components/Table";
import Button from "../components/Button";

const PresentPage = () => {
  const [mddText, setMddText] = useState("");

  // Fetch Terms of Use
  useEffect(() => {
    fetch(Sponsorship)
      .then((res) => res.text())
      .then((text) => setMddText(text));
  });

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/imgs/kiribati_people.jpg')",
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
                table: {
                    component: Table,
                },
                thead: {
                  props: {
                    className: "bg-gray-800",
                  },
                },
                th: {
                  props: {
                    className: "px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-400",
                  },
                },
                tbody: {
                  props: {
                    className: "bg-gray-900 divide-y divide-gray-700",
                  },
                },
                td: {
                  props: {
                    className: "px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200",
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
