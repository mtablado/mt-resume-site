"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAVY = "#1e3a5f";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/awards", label: "Awards & Recognitions" },
];

export default function NavHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 print:hidden"
      style={{ backgroundColor: NAVY }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-semibold tracking-tight text-sm"
          onClick={() => setMenuOpen(false)}
        >
          Miguel Tablado
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-opacity ${
                pathname === href
                  ? "text-white opacity-100 border-b-2 border-white pb-0.5"
                  : "text-white opacity-70 hover:opacity-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className="md:hidden border-t border-white/10"
          style={{ backgroundColor: NAVY }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-sm ${
                pathname === href
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
