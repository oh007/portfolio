import React from 'react'

export default function Header() {
  return (
    <section className="start-section relative mb-8 p-4 bg-white rounded-lg shadow-lg max-w-xs mx-auto">
    <h1 className="text-2xl font-bold text-center mb-2 text-white drop-shadow-lg">
      Discover <span className="text-custom-green">Olof Hag</span>
    </h1>
    <div className="absolute bottom-0 left-0 p-4 w-full">
      <div className="flex flex-col text-left">
        <button className="text-white bg-custom-green hover:bg-custom-green-dark font-medium rounded text-sm px-5 py-2.5 my-2 focus:outline-none">
          Contact Me
        </button>
        <p className="text-white">An frontend developer based in Sweden</p>
      </div>
    </div>
  </section>
  )
}
