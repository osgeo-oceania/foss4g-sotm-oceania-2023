import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { markdownCommonStyles } from "../utils/markdownCommonStyles";

export const MarkdownPage = (props: {
  markdownUrl: string;
  headerImg: { url: string; positionX?: string; positionY?: string };
}) => {
  const [mddText, setMddText] = useState("");

  useEffect(() => {
    fetch(props.markdownUrl)
      .then((res) => res.text())
      .then((text) => setMddText(text));
  }, [props.markdownUrl]);

  return (
    <>
      <section
        style={{
          backgroundImage: `url('${props.headerImg.url}')`,
          backgroundSize: "cover",
          backgroundPosition: `${props.headerImg.positionX ?? "center"} ${
            props.headerImg.positionY ?? "center"
          }`,
        }}
        className="relative flex items-center justify-center h-64 bg-gray-100 bg-no-repeat bg-cover bg-center"
      ></section>
      <div className="p-6">
        <section className="mx-auto mt-8 prose lg:prose-lg">
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
