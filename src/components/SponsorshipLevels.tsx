import SponsorshipLevel from "./SponsorshipLevel";
const SponsorshipLevels = () => {
  return (
    <>
      <section className="container px-6 py-8 mx-auto lg:py-16">
        <div className="container">
          <h1 className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl mb-10">
            Our sponsors and partners
          </h1>

          <SponsorshipLevel
            title="Platinum Sponsors"
            cards={[
              {
                link: "https://www.linz.govt.nz/",
                imgSrc: "./imgs/sponsorship-levels/platinum/linz.png",
              },
              {
                link: "https://blogs.bing.com/maps",
                imgSrc: "./imgs/sponsorship-levels/platinum/microsoft.png",
              },
            ]}
          />
          <SponsorshipLevel
            title="Gold Sponsors"
            cards={[
              {
                link: "https://www.linz.govt.nz/",
                imgSrc: "./imgs/sponsorship-levels/platinum/linz.png",
              },
              {
                link: "https://www.linz.govt.nz/",
                imgSrc: "./imgs/sponsorship-levels/platinum/linz.png",
              },
            ]}
          />
          <SponsorshipLevel
            title="Silver Sponsors"
            cards={[
              {
                link: "https://www.linz.govt.nz/",
                imgSrc: "./imgs/sponsorship-levels/platinum/linz.png",
              },
              {
                link: "https://www.linz.govt.nz/",
                imgSrc: "./imgs/sponsorship-levels/platinum/linz.png",
              },
            ]}
          />
          <SponsorshipLevel
            title="Bronze Sponsors"
            cards={[
              {
                link: "https://www.linz.govt.nz/",
                imgSrc: "./imgs/sponsorship-levels/platinum/linz.png",
              },
              {
                link: "https://www.linz.govt.nz/",
                imgSrc: "./imgs/sponsorship-levels/platinum/linz.png",
              },
            ]}
          />
          <SponsorshipLevel
            title="Supporter Sponsors"
            cards={[
              {
                link: "https://www.linz.govt.nz/",
                imgSrc: "./imgs/sponsorship-levels/platinum/linz.png",
              },
              {
                link: "https://www.linz.govt.nz/",
                imgSrc: "./imgs/sponsorship-levels/platinum/linz.png",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
};
export default SponsorshipLevels;
