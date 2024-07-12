import React from 'react';
import projects from './../data/projects.json';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Projects() {
  return (
    <div className="projects">
      <h4 className="text-2xl font-bold text-center mb-4 text-white">Projects</h4>
      <p  className='text-center text-white text-sm mb-4'>Here you can swipe through my recent projects 💻</p>
      <Carousel className="projects-card">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="flex flex-col hover:bg-custom-green w-24 mb-4">
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                <div
                  className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl flex flex-col"
                  style={{ backgroundImage: `url(${project.icon})` }}
                ></div>
                <h4 className="text-center text-white text-l">{project.name}</h4>
                <p className="text-center text-white font-light text-xs">{project.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
