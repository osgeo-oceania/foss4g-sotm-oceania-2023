import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import Content from "../../documents/attend/register.md";
import { markdownCommonStyles } from "../../utils/markdownCommonStyles";

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
          backgroundImage: "url('/imgs/group photo.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
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
export default RegisterPage;
