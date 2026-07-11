// src/components/atoms/ButtonLink.tsx
import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function ButtonLink({ 
  href, 
  children, 
  variant = 'primary', 
  className = '' 
}: ButtonLinkProps) {
  // Ajustamos la transición para que sea súper suave (duration-300)
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 active:scale-95 w-full sm:w-auto text-center";
  
  // Agregamos efectos de brillo (brightness), elevación (-translate-y-1) y sombras dinámicas
  const variantStyles = {
    primary: "bg-csr-primary text-white shadow-md hover:brightness-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-csr-primary/40 tracking-wide",
    secondary: "bg-csr-secondary text-white shadow hover:brightness-110 hover:-translate-y-1 hover:shadow-lg tracking-wide",
    outline: "border-2 border-white text-white bg-transparent hover:bg-white hover:text-csr-dark hover:-translate-y-1 hover:shadow-lg"
  };

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}