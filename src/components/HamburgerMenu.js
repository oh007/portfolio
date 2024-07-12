"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        className="rounded-md p-2 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HamburgerIcon className="h-6 w-6 text-primary-foreground" />
      </button>
      <div className={`fixed inset-0 z-50 bg-background/90 backdrop-blur-sm sm:block ${isOpen ? "block" : "hidden"}`}>
        <div className="flex h-full flex-col items-center justify-center gap-8">
          <button
            type="button"
            className="absolute top-4 right-4 rounded-md p-2 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:hidden"
            onClick={() => setIsOpen(false)}
          >
            <XIcon className="h-6 w-6 text-primary-foreground" />
          </button>
          <nav className="grid gap-6 text-3xl font-bold">
            <Link href="#" className="hover:underline text-white" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline text-white" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline text-white" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="hover:underline text-white" prefetch={false}>
              Contact
            </Link>
          </nav>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @sm:h-12 @sm:px-5 bg-[#39E079] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em] @sm:text-base @sm:font-bold @sm:leading-normal @sm:tracking-[0.015em]">
            Contact me
          </button>
        </div>
      </div>
    </div>
  )
}

function HamburgerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18" />
      <path d="M3 6h18" />
      <path d="M3 18h18" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
