import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
        <h1 className="font-bold text-xl">Terram</h1>

        <nav className="space-x-6">
          <Link href="/">Početna</Link>
          <Link href="/products">Proizvodi</Link>
          <Link href="/contact">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}