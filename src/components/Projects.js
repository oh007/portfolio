import React from 'react'
import projects from './../data/projects.json';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
export default function Projects() {
  return (
    <div className="projects">
    <h4 className='font-semibold text-center text-white mb-4'>Projects</h4>

    <Carousel className="projects-card">
    <CarouselContent >
    {projects.map((project, index) => (
  
    <CarouselItem key={index} className='flex flex-col hover:bg-custom-green w-24'>

    <img src={project.icon} alt={`${project.name} icon`} className="w-full m-auto" />
            <div className='flex flex-col p-4'>
              <h4 className='text-center text-white text-l'>{project.name}</h4>
              <p className='text-center text-white font-light text-xs'> {project.description}</p>
            </div>
    </CarouselItem>
 

          ))}
           </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </div>
    
  )
}
