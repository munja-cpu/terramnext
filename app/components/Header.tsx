"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* LOGO */}
        <h1 className="font-bold text-xl">Terram</h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Početna</Link>
          <Link href="/products">Proizvodi</Link>
          <Link href="/odrzavanje">Održavanje</Link>
          <Link href="/contact">Kontakt</Link>
        </nav>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur px-6 pb-6 flex flex-col space-y-4 text-center">
          <Link href="/" onClick={() => setOpen(false)}>Početna</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Proizvodi</Link>
          <Link href="/odrzavanje" onClick={() => setOpen(false)}>Održavanje</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Kontakt</Link>
        </div>
      )}
    </header>
  );
}