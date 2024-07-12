import React from "react";
import FavoriteArtists from "./FavoriteArtists";
import Projects from "./Projects";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#383838] bg-[#242424] p-4 flex-col">
          <div
            className="text-[#FFFFFF]"
            data-icon="Info"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#FFFFFF] text-base font-bold leading-tight">
              ABOUT ME
            </h2>
            <p className="text-[#C4C4C4] text-sm font-normal leading-normal">
              👨‍💻 24 year old guy from Sweden
              <br />
              My interest in 🌐 technology & design 🎨 started at an early age.
              <br />
              I have always liked 💻 computers and 🎨 painting, and tinkering
              around with them.
              <br />
              When I put them together, I realized it was the most fun! 🤩
              <br />
              Right now, I’m working as a systemdeveloper 📚 after i graduated
              as a frontend developer.
              <br />
              The technologies I’m mastering include JavaScript, TypeScript,
              HTML, CSS, SASS, and Git 🚀
              <br />
              Feel free to ask if you need more details!
            </p>
          </div>
        </div>
      </div>
      <FavoriteArtists />
      <Projects />
    </>
  );
}
