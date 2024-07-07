import Technologies from './../components/Technologies';


export default function Home() {
  return (
    <main className="homepage">
 <section className="start-section relative mb-8 p-4 bg-white rounded-lg shadow-lg max-w-xs mx-auto">
 <h1 className="text-2xl font-bold text-center mb-2">
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

      <section className="techno-section flex flex-col mt-8 bg-white">
      <Technologies />
   </section>
     <section className="about-me">
<div>
  <h3>
    ABOUT ME
  </h3>
  <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  </p>
</div>
<div className="fav-artist">
  <h4>
    My favorite artist
  </h4>
<div>
<image>

</image>
<h5>
  Queen
</h5>
</div>
</div>
<div className="projects">
<h4>projects</h4>
<div className="projects-card">
<image>

</image>
<div>
  <h6>
    School stuff
  </h6>
  <p>
    Lorewmremrmermrmemrme,r,asda
    msadmsadmsamdasda
    masdmasdmadmas
  </p>
</div>
</div>
</div>
     </section>
    </main>
  );
}
