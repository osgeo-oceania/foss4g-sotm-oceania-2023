import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

import Content from "../../documents/attend/register.md";

import Table from "../../components/Table";
import Blockquote from "../../components/Blockquote";
import Button from "../../components/Button";

const RegisterPage = () => {
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
          backgroundImage: "url('/imgs/present_crop_01.png')",
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
                h1: {
                  props: {
                    className:
                      "text-3xl font-medium text-gray-800 md:text-2xl lg:text-3xl",
                  },
                },
                h2: {
                  props: {
                    className:
                    // add space before teh paragraph
                      "text-2xl font-semibold text-gray-700 capitalize my-4",
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
                  // make links buttons
                  props: {
                    className: "text-blue-500 underline",
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
export default RegisterPage;
