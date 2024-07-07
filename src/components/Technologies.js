import React from 'react';
import technologies from './../data/technologies.json';

const Technologies = () => {
  return (
    <section className="techno-section flex flex-col mt-8 bg-white">
    <div className="m-4 p-4 bg-white rounded-lg shadow-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Technologies</h2>
        {technologies.map((tech, index) => (
            <div key={index} className='flex flex-row hover:bg-custom-green p-3' >
                <img src={tech.icon} alt={`${tech.name} icon`} className="w-12 h-12 m-auto rounded-xl" />
                <div className='flex flex-col p-4'>
                <h5 className='font-bold'>{tech.name}</h5>
                <p className='font-light text-xs'>{tech.description}</p>
                </div>
          </div>
        ))}
    </div>
    </section>
  );
};

export default Technologies;
