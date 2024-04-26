import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { markdownCommonStyles } from "../utils/markdownCommonStyles";
import { useLocation } from "react-router-dom";

export const MarkdownPage = (props: {
  markdownUrl: string;
  headerImg: {
    url: string;
    positionX?: string;
    positionY?: string;
    height?: string | number;
  };
}) => {
  // Get current page from react router
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  const [mddText, setMddText] = useState("");

  useEffect(() => {
    setMddText("");
    fetch(props.markdownUrl)
      .then((res) => res.text())
      .then((text) => setMddText(text));
  }, [props.markdownUrl]);

  return (
    <>
      <div className=" bg-blue-950">
        <section
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url('${props.headerImg.url}')`,
            backgroundSize: "cover",
            backgroundPosition: `${props.headerImg.positionX ?? "center"} ${
              props.headerImg.positionY ?? "center"
            }`,
            height: props.headerImg.height ?? "16rem",
            maxWidth: 1920,
          }}
          className="m-auto relative flex items-center justify-center bg-gray-100"
        ></section>
      </div>
      <div className="p-6">
        <section
          className="mx-auto mt-8 prose lg:prose-lg"
          id={pathname.replace("/", "-")}
        >
          <Markdown
            options={{
              overrides: markdownCommonStyles,
            }}
            children={mddText}
          />
        </section>
      </div>
    </>
  );
};
