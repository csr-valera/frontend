// src/app/page.tsx
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 selection:bg-blue-600 selection:text-white">
      <div className="max-w-2xl w-full bg-slate-900 rounded-2xl shadow-2xl p-8 md:p-12 text-center border border-slate-800">
        
        {/* Icono animado minimalista en tonos oscuros */}
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-blue-900/30 text-blue-400 rounded-full">
          <svg 
            className="w-10 h-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          CSR Valera
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-8 font-light">
          Estamos creando una nueva experiencia digital. 
          <br className="hidden md:block" />
          <span className="font-medium text-slate-300">Sitio Web en Construcción.</span>
        </p>

        {/* Indicador de estado con animación de pulso (Ping) */}
        <div className="flex items-center justify-center gap-3 text-sm text-slate-500">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span>Plataforma disponible pronto</span>
        </div>
      </div>
    </main>
  );
}