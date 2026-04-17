"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `text-lg py-2 border-b border-white/10 transition ${pathname === path ? "text-terramGreen" : "text-white"
    }`;

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          {/* LOGO */}
          
            <Link href="/" className="flex items-center">
  <Image
    src="/logoBeli.png"
    alt="Terram logo"
    width={200}
    height={50}
    className="h-8 w-auto object-contain"
    priority
  />
</Link>
          

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={pathname === "/" ? "text-terramGreen" : ""}
            >
              Početna
            </Link>
            <Link
              href="/products"
              className={pathname === "/products" ? "text-terramGreen" : ""}
            >
              Proizvodi
            </Link>
            <Link
              href="/odrzavanje"
              className={pathname === "/odrzavanje" ? "text-terramGreen" : ""}
            >
              Održavanje
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "text-terramGreen" : ""}
            >
              Kontakt
            </Link>
          </nav>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      />

      {/* SIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black/90 backdrop-blur-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col p-6 text-white">

          {/* CLOSE */}
          <button
            className="self-end text-2xl mb-6"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* LINKS */}
          <nav className="flex flex-col space-y-4 mt-4">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={linkClass("/")}
            >
              Početna
            </Link>

            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className={linkClass("/products")}
            >
              Proizvodi
            </Link>

            <Link
              href="/odrzavanje"
              onClick={() => setOpen(false)}
              className={linkClass("/odrzavanje")}
            >
              Održavanje
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={linkClass("/contact")}
            >
              Kontakt
            </Link>

          </nav>
        </div>
      </div>
    </>
  );
}