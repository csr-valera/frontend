// src/components/organisms/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/atoms/ButtonLink";

export function Navbar() {
  return (
    // Reemplazamos h-20 por py-4 para dar un espaciado interno superior e inferior saludable
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-transparent py-4">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Contenedor del Logo con más libertad de crecimiento */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="Logo CSR Valera"
            width={220} // Aumentamos el lienzo o "canvas" de Next.js
            height={80}
            // h-12 para móviles, md:h-16 (64px) o md:h-20 (80px) para escritorio
            className="h-14 md:h-20 w-auto object-contain drop-shadow-md"
            style={{ width: 'auto' }}
            priority
          />
        </Link>

        {/* Enlaces de navegación */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-semibold text-white tracking-wide">
            <li>
              <a className="transition hover:text-csr-primary" href="#">
                Inicio
              </a>
            </li>
            <li>
              <a className="transition hover:text-csr-primary" href="#about">
                Quiénes Somos
              </a>
            </li>
            <li>
              <a className="transition hover:text-csr-primary" href="#news">
                Noticias
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-csr-primary"
                href="#donations"
              >
                Donaciones
              </a>
            </li>
          </ul>
        </nav>

        {/* Botón de Acción Principal */}
        <div className="flex items-center">
          <ButtonLink
            href="/donaciones"
            variant="primary"
            className="hidden sm:inline-flex bg-csr-primary hover:bg-opacity-90"
          >
            Apoya CSR
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
