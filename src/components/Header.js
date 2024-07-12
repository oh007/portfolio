import React from 'react'
export default function Header() {
  return (
    <div className="@container">
    <div className="@sm:p-4">
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @sm:gap-8 @sm:rounded-xl items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.4) 100%
          ), url('/images/Picture-of-me.png')`,
        }}
      >
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @sm:text-5xl @sm:font-black @sm:leading-tight @sm:tracking-[-0.033em]">
            Discover
          </h1>
          <h2 className="text-white text-sm font-normal leading-normal @sm:text-base @sm:font-normal @sm:leading-normal">
            An frontend developer based in Sweden
          </h2>
        </div>
        <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @sm:h-16">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              className="text-[#C4C4C4] flex border border-[#383838] bg-[#242424] items-center justify-center pl-[15px] rounded-l-xl border-r-0"
              data-icon="MagnifyingGlass"
              data-size="20px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              placeholder="Contact me"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#FFFFFF] focus:outline-0 focus:ring-0 border border-[#383838] bg-[#242424] focus:border-[#383838] h-full placeholder:text-[#C4C4C4] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @sm:text-base @sm:font-normal @sm:leading-normal"
              value=""
            />
            <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#383838] bg-[#242424] pr-[7px]">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @sm:h-12 @sm:px-5 bg-[#39E079] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em] @sm:text-base @sm:font-bold @sm:leading-normal @sm:tracking-[0.015em]">
                <span className="truncate">Send</span>
              </button>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
  )
}
