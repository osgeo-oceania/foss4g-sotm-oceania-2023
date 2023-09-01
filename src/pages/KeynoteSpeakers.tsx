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
        <div className="md:flex md:flex-row justify-around">
          <SpeakerCard
            imgSrc="./imgs/keynote-speakers/CarrolChan.jpg"
            title="Carrol Chan"
            shortDescription="Building and progressing a mapping community in the Pacific, what is the role of unseen bias?"
            longDescriptionSrc="./documents/keynote-speakers/carrol-chan.md"
          />
          <SpeakerCard
            imgSrc="./imgs/keynote-speakers/JeremyPalmer.jpg"
            title="Jeremy Palmer"
            shortDescription="Mapping the Future: The Intersection of Geospatial, Open Source, and Open Data"
            longDescriptionSrc="./documents/keynote-speakers/jeremy-palmer-long-description.md"
              />
          <SpeakerCard
            imgSrc="./imgs/keynote-speakers/OrisiNaivalurua3.jpg"
            title="Orisi Naivalurua"
            shortDescription="Capacity Building on the Hazard and Exposure Database for the Pacific Catastrophe Risk Assessment & Financing Initiative II (PCRAFII) Project"
            longDescriptionSrc="./documents/keynote-speakers/orisi-naivalurua-long_description.md"
          />
        </div>
      </section>
    </>
  );
};
export default PresentPage;
