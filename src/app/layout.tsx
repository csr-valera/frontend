// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // 👈 ESTA LÍNEA ES LA QUE INYECTA TAILWIND

export const metadata: Metadata = {
  title: "CSR Valera",
  description: "Plataforma digital de CSR Valera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}