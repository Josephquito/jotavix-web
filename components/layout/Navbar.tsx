import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black border-b border-white/10 px-6 py-3 sticky top-0 z-40">
      {" "}
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Jotavix Streaming"
            width={110}
            height={32}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-white hover:text-red-600 text-base font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/productos"
            className="text-white hover:text-red-600 text-base font-medium transition-colors"
          >
            Productos
          </Link>
        </nav>
        <a
          href="https://wa.me/593979988113"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Compra aquí!
        </a>
      </div>
    </header>
  );
}
