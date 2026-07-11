// src/components/organisms/Footer.tsx
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-csr-accent text-white border-t border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          <div>
            <span className="text-xl font-black tracking-wider text-csr-primary">PORTAL CSR</span>
            <p className="mt-2 text-sm text-gray-400 max-w-md">
              Un lugar para crecer, creer y servir. Comprometidos con nuestra comunidad en Valera.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-400">
            <Link href="/" className="hover:text-white transition">Inicio</Link>
            <Link href="#about" className="hover:text-white transition">Nosotros</Link>
            <Link href="#donations" className="hover:text-white transition">Donaciones</Link>
          </div>

        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {currentYear} Portal CSR Valera. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}