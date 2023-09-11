import SponsorshipLevel from "./SponsorshipLevel";
const SponsorshipLevels = () => {
  return (
    <>
      <section className="container px-6 py-8 mx-auto lg:py-16">
        <div className="container">
          <h1 className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl mb-10">
            Our sponsors and partners
          </h1>

          {/* <SponsorshipLevel
            title="Platinum Sponsors"
            cards={[
              {
                link: "https://www.meta.com/au/",
                imgSrc: "./imgs/sponsorship-levels/platinum/platinum_meta_logo.png",
              },
            ]}
          /> */}
          {/* <SponsorshipLevel
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
          /> */}
          <SponsorshipLevel
            title="Silver Sponsors"
            cards={[
              {
                 link: "https://www.linz.govt.nz/",
                 imgSrc: "./imgs/sponsorship-levels/silver/silver_linz_logo.jpg",
              },
              {
                link: "https://www.novasystems.com/nz",
                imgSrc: "./imgs/sponsorship-levels/silver/silver_NOVA-SYSTEMS_logo.png",
              },
              // {
              //   link: "https://www.openwork.nz/",
              //   imgSrc: "./imgs/sponsorship-levels/silver/silver_Openwork_logo_Transparent.png",
              // },
              {
                link: "https://www.orbica.com/",
                imgSrc: "./imgs/sponsorship-levels/silver/silver_orbica_green.png",
              },
              {
                link: "https://soar.earth/",
                imgSrc: "./imgs/sponsorship-levels/silver/silver_soar_earth_logo.png",
              },
            ]}
          />
          <SponsorshipLevel
            title="Bronze Sponsors"
            cards={[
              {
                 link: "https://koordinates.com/",
                 imgSrc: "./imgs/sponsorship-levels/bronze/bronze_koordinates_limited_logo.png",
              },
              {
                link: "https://north-road.com/",
                imgSrc: "./imgs/sponsorship-levels/bronze/bronze_north_road_logo.png",
              },
              {
                link: "https://www.tomtom.com/",
                imgSrc: "./imgs/sponsorship-levels/bronze/bronze_TomTom_logo.png",
              },
              {
                link: "https://linux.org.au/",
                imgSrc: "./imgs/sponsorship-levels/bronze/linux-logo-primary-110-web.svg",
              },
              {
                link: "https://locatepress.com/",
                imgSrc: "./imgs/sponsorship-levels/supporter/other_Locate_Press_logo.png",
              },
            ]}
          />
          {/* <SponsorshipLevel
            title="Supporter Sponsors"
            cards={[
              {
                link: "https://locatepress.com/",
                imgSrc: "./imgs/sponsorship-levels/supporter/other_Locate_Press_logo.png",
              },
            ]}
          />  */}
          <SponsorshipLevel
            title="Venue Sponsors"
            cards={[
              {
                link: "https://www.auckland.ac.nz/",
                imgSrc: "./imgs/sponsorship-levels/venue/University-Of-Auckland-logo.webp",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
};
export default SponsorshipLevels;
