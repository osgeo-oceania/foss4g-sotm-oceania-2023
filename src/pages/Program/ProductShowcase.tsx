import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import MarkDownDoc from "../../documents/product-showcase.md";
import { markdownCommonStyles } from "../../utils/markdownCommonStyles";

const ProductShowcasePage = () => {
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
          backgroundImage: "url('/imgs/Soar_AUT_2.png')",
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
export default ProductShowcasePage;
