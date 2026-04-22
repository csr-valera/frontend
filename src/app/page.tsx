// src/app/page.tsx
import React from 'react';

// En el App Router, los componentes de la carpeta app son Server Components por defecto.
// Esto es excelente para SEO y rendimiento.

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 selection:bg-blue-600 selection:text-white">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
        
        {/* Placeholder para el futuro Logo */}
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full">
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
              strokeWidth={2} 
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          CSR Valera
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 mb-8 font-light">
          We are currently crafting a new digital experience. 
          <br className="hidden md:block" />
          <span className="font-medium text-gray-700">Website Under Construction.</span>
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span>Platform arriving soon</span>
        </div>
      </div>
    </main>
  );
}