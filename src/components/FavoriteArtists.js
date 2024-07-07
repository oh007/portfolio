import React from 'react';
import favoriteArtists from './../data/favoriteArtists.json';

const FavoriteArtists = () => {
  return (
    <section className="artists-section flex flex-col mt-8">
         <h2 className="text-2xl font-bold text-center mb-4 text-white">My favorite <span className="text-custom-green">artist</span></h2>
      <div className="m-4 p-4 mx-auto w-full flex flex-row">
        {favoriteArtists.map((artist, index) => (
          <div key={index} className='flex flex-col hover:bg-custom-green w-24'>
            <img src={artist.icon} alt={`${artist.name} icon`} className="w-12 h-12 rounded-xl m-auto" />
            <div className='flex flex-col p-4'>
              <p className='text-center text-white text-xs'>{artist.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoriteArtists;
