import React from 'react';
import favoriteArtists from './../data/favoriteArtists.json';

const FavoriteArtists = () => {
  return (
    <section className="artists-section flex flex-col mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">
        My favorite <span className="text-custom-green">artist</span>
      </h2>
      <div className="m-4 p-4 mx-auto w-full flex flex-row overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch gap-8">
          {favoriteArtists.map((artist, index) => (
            <div key={index} className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                style={{ backgroundImage: `url(${artist.icon})` }}
              ></div>
              <p className="text-[#FFFFFF] text-base font-medium leading-normal">{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteArtists;
