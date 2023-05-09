import SpeakerCard from "../components/SpeakerCard";

const PresentPage = () => {
  return (
    <>
      {/* <section
        style={{
          backgroundImage: "url('/imgs/present_crop_01.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 0px",
        }}
        className="relative flex items-center justify-center h-64 bg-gray-100 bg-no-repeat bg-cover bg-center"
      ></section> */}
      <section className="container px-6 py-8 mx-auto lg:py-16">
        <h3 className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl mb-10">
          Keynote Speakers
        </h3>
        <div className="md:flex md:flex-row justify-between">
          <SpeakerCard
            imgSrc="./imgs/keynote-speakers/MokaApiti.jpg"
            title="Moka Apiti"
            shortDescription="Indigenous Mapping in Aotearoa New Zealand"
            longDescriptionSrc="./documents/keynote-speakers/moka-apiti-long-description.md"
          />
          <SpeakerCard
            imgSrc="./imgs/keynote-speakers/UeakeiaTofinga.jpeg"
            title="Ueakeia Martin Tofinga"
            shortDescription="Passion into action: The story of the Kiribati Women in Mapping NGO."
            longDescriptionSrc="./documents/keynote-speakers/ueakeia-tofinga-long-description.md"
          />
          <SpeakerCard
            imgSrc="./imgs/keynote-speakers/JeremyPalmer.jpg"
            title="Jeremy Palmer"
            shortDescription="Mapping the Future: The Intersection of Geospatial, Open Source, and Open Data"
            longDescriptionSrc="./documents/keynote-speakers/jeremy-palmer-long-description.md"
          />
        </div>
      </section>
    </>
  );
};
export default PresentPage;
