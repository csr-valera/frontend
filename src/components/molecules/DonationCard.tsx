// src/components/molecules/DonationCard.tsx
'use client';
import { useState } from 'react';
import { Check, Copy, ClipboardList } from 'lucide-react'; // Agregamos un nuevo icono para el botón final

interface Detail {
  label: string;
  value: string;
}

interface DonationCardProps {
  title?: string;
  description?: string;
  details?: Detail[];
  icon?: React.ReactNode;
}

export function DonationCard({ title = "Método", description = "", details = [], icon }: DonationCardProps) {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false); // Nuevo estado para el botón general

  // Copia individual
  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      setTimeout(() => setCopiedValue(null), 2000);
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  };

  // Copia global (Todos los datos de la tarjeta)
  const handleCopyAll = async () => {
    try {
      // Unimos todos los valores separándolos por un salto de línea y un espacio, 
      // ideal para que los parseadores bancarios extraigan Cédula, Teléfono y Banco.
      const textToCopy = details.map(d => d.value).join(' \n');
      
      await navigator.clipboard.writeText(textToCopy);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch (err) {
      console.error('Error al copiar todo: ', err);
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl border border-gray-100">
      {/* Cabecera de la Tarjeta */}
      <div className="flex items-center gap-4 bg-gray-50 p-6 border-b border-gray-100">
        {icon && <div className="text-csr-primary">{icon}</div>}
        <div>
          <h3 className="font-bold text-csr-dark text-xl">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      
      {/* Lista de Detalles */}
      <div className="p-6 flex flex-col gap-4">
        {details.map((detail, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{detail.label}</p>
              <p className="font-medium text-csr-dark break-all">{detail.value}</p>
            </div>
            
            <button
              onClick={() => handleCopy(detail.value)}
              className="group flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-csr-primary/10 hover:text-csr-primary"
              title="Copiar dato único"
            >
              {copiedValue === detail.value ? (
                <Check className="h-4 w-4 text-csr-accent" />
              ) : (
                <Copy className="h-4 w-4 transition-transform group-hover:scale-110" />
              )}
              <span className="sm:hidden text-xs">{copiedValue === detail.value ? 'Copiado' : 'Copiar'}</span>
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER DE LA TARJETA: Botón Copiar Todo */}
      {/* Solo se muestra si hay datos que copiar */}
      {details.length > 0 && (
        <div className="px-6 pb-6 pt-2">
          <button
            onClick={handleCopyAll}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
              copiedAll 
                ? 'bg-csr-accent text-white shadow-md' 
                : 'bg-csr-primary/10 text-csr-primary hover:bg-csr-primary hover:text-white hover:shadow-lg hover:-translate-y-0.5'
            }`}
          >
            {copiedAll ? (
              <>
                <Check className="h-4 w-4" />
                ¡Datos Copiados!
              </>
            ) : (
              <>
                <ClipboardList className="h-4 w-4" />
                Copiar Todos los Datos
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}