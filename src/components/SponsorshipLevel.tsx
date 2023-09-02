import React from "react";

type SponsorshipLevelProps = {
  title: string;
  cards: {
    link: string;
    imgSrc: string;
  }[];
};

const SponsorshipLevel: React.FC<SponsorshipLevelProps> = ({
  title,
  cards,
}) => {
  return (
    <>
      <h2 className="text-l font-medium text-gray-800 md:text-xl lg:text-2xl mb-5">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mb-5">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer w-44 h-24 bg-white shadow-md rounded-lg overflow-hidden relative transform transition-transform hover:scale-105 m-2.5"
          >
            <div className="absolute inset-0 flex items-center justify-center border border-sky-200 border-2">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img
                src={card.imgSrc}
                alt={`Image${index + 1}`}
                className="p-4"
              />
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default SponsorshipLevel;
