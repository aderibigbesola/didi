"use client";

import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const handleClick = () => {
  document.getElementById("nav-menu")?.removeAttribute("open");
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>DIDI</title>
      </head>
      <body>
        <header className="fixed z-100 flex h-15 w-svw items-center justify-between bg-white px-7 shadow lg:px-14">
          <Link href="/" className="lg:w-full" onNavigate={handleClick}>
            <Image width={150} height={200} src="/logo.svg" alt="Logo" />
          </Link>
          <nav className="mx-auto hidden w-full items-center justify-center gap-12 lg:flex">
            <Link href="/about">About</Link>
          </nav>
          <div className="hidden w-full items-center justify-end lg:flex">
            <Link
              href="/contact-us"
              className="bg-brand-primary-normal rounded px-7 py-3 text-white"
            >
              Contact us
            </Link>
          </div>
          <details className="relative flex lg:hidden" id="nav-menu">
            <summary className="cursor-pointer">
              <svg
                id="nav-menu-burger"
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8h22M5 16h22M5 24h22"
                ></path>
              </svg>
              <svg
                id="nav-menu-x"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06"></path>
                  <path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0"></path>
                </g>
              </svg>
            </summary>
            <div className="fixed top-15 left-0 h-svh w-svw bg-white p-10">
              <nav className="flex h-full flex-col gap-10">
                <Link
                  href="/about"
                  className="text-2xl"
                  onNavigate={handleClick}
                >
                  About
                </Link>
                <Link
                  href="/contact-us"
                  className="bg-brand-primary-normal mt-auto mb-10 self-start rounded px-7 py-3 text-2xl text-white"
                  onNavigate={handleClick}
                >
                  Contact us
                </Link>
              </nav>
            </div>
          </details>
        </header>
        <main className="pt-15">{children}</main>
        <footer className="bg-brand-primary-dark relative grid w-svw grid-cols-3 gap-4 px-7 py-10 text-white lg:grid-cols-4 lg:px-14">
          <div className="flex flex-col gap-4">
            <Image width={150} height={200} src="/logo.svg" alt="Logo" />
            <div className="flex flex-col">
              <p className="text-xl lg:text-2xl">Fostering </p>
              <p className="text-xl lg:text-2xl">Deaf </p>
              <p className="text-xl lg:text-2xl">Inclusion</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <p className="text-gray-500">Links</p>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/programs"}>Programs</Link>
            <Link href={"/contact-us"}>Contact us</Link>
          </nav>
          <nav className="flex flex-col gap-2">
            <p className="text-gray-500">Contact</p>
            <a href="tel:000000000000">Phone:</a>
            <a href="mailto:placeholder@email.com">Email:</a>
          </nav>
          <div className="absolute bottom-0 flex w-svw justify-center lg:relative lg:w-full lg:self-end">
            Designed and Developed by:&nbsp;
            <a href="" target="_blank" className="text-blue-500">
              Bash
            </a>
            &nbsp;&&nbsp;
            <a
              href="https://kmafeni04.github.io/portfolio/"
              target="_blank"
              className="text-blue-500"
            >
              Leo
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
