import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

type SpeakerCardProps = {
  imgSrc: string;
  title: string;
  shortDescription: string;
  longDescriptionSrc: string;
};

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  imgSrc,
  title,
  shortDescription,
  longDescriptionSrc,
}) => {
  const [modelOpen, setModelOpen] = useState(false);
  const [mddText, setMddText] = useState("");
  // Fetch Terms of Use
  useEffect(() => {
    fetch(longDescriptionSrc)
      .then((res) => res.text())
      .then((text) => setMddText(text))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center pb-5">
        <div
          onClick={() => setModelOpen(!modelOpen)}
          className="cursor-pointer w-full max-w-xs mx-2 overflow-hidden bg-blue-950 rounded-lg shadow-lg"
        >
          <img
            className="object-cover object-top w-full h-64"
            src={imgSrc}
            alt="avatar"
          />
          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-white"
              tabIndex={0}
              role="link"
            >
              {title}
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200 p-3">
              {shortDescription}
            </span>
          </div>
        </div>
      </div>

      <div
        className="fixed inset-0 z-10 overflow-y-auto z-40 bg-white bg-opacity-60 "
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        style={{
          transition: "opacity .15s ease-in-out",
          display: modelOpen ? "block" : "none",
          opacity: modelOpen ? 1 : 0,
        }}
        onClick={() => setModelOpen(!modelOpen)}
      >
        
        <div  className="flex items-end justify-center min-h-screen px-4 pt-4 pb-0 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div style={{ flex: '1 1 auto', maxWidth: '800px' }} className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
            <div className="flex flex-wrap">

              <div className="md:w-1/3 h-96">
                <img
                  className="object-cover w-full h-full rounded-md"
                  src={imgSrc}
                  alt=""
                />
              </div>

              <div className="md:w-2/3 mt-4 px-4 flex flex-wrap">
                <h3
                  className="font-medium leading-6 capitalize text-white md:text-2xl lg:text-3xl"
                  id="modal-title"
                >
                  {title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  <Markdown
                    options={{
                      overrides: {
                        h1: {
                          props: {
                            className:
                              "text-3xl font-medium text-gray-400 md:text-2xl lg:text-3xl",
                          },
                        },
                        h2: {
                          props: {
                            className:
                              "text-xl font-semibold text-gray-400 capitalize",
                          },
                        },
                        h3: {
                          props: {
                            className:
                              "text-xl font-semibold text-gray-400 capitalize",
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
                        },
                      },
                    }}
                    children={mddText}
                  />
                </p>
              </div>
            </div>
            <div className="mt-5 sm:flex sm:items-center sm:-mx-2">
              <button
                onClick={() => setModelOpen(!modelOpen)}
                className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerCard;
