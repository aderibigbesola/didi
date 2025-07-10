import Link from "next/link";
import Image from "next/image";
import "./globals.css";

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
        <header className="fixed z-100 flex items-center w-svw bg-white h-15 px-14 shadow">
          <Link href="/" className="w-full">
            <Image width={150} height={200} src="/logo.svg" alt="Logo" />
          </Link>
          <nav className="w-full flex items-center justify-center gap-12 mx-auto">
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
          </nav>
          <div className="flex w-full justify-end items-center">
            <Link
              href="/contact-us"
              className="text-white bg-brand-primary-normal px-7 py-3 rounded"
            >
              Contact us
            </Link>
          </div>
        </header>
        <main className="pt-15">{children}</main>
        <footer className="flex w-svw bg-brand-primary-dark py-10 px-14">
          <div>
            <Image width={150} height={200} src="/logo.svg" alt="Logo" />
            <p>Fostering Deaf Inclusion</p>
          </div>
          <div>
            <p>Links</p>
            <nav>
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/programs"}>Programs</Link>
              <Link href={"/contact-us"}>Contact us</Link>
            </nav>
          </div>
          <div>
            <p>Contact</p>
            <nav>
              <a href="tel:000000000000">Phone:</a>
              <a href="mailto:placeholder@email.com">Email:</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
