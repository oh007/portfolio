import React from 'react'
import FavoriteArtists from './FavoriteArtists'
import Projects from './Projects'

export default function About() {
  return (
    <section className="about-me bg-green-darkest p-4">
    <div>
      <h3 className='text-xl font-bold text-center text-white p-6'>
        ABOUT <span className="text-custom-green">ME</span>
      </h3>
      <p className='text-white text-center font-light'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
    <FavoriteArtists/>
    <Projects/>
</section>
  )
}
