import React, { useState, useEffect, useRef } from 'react';
import { Idioma, PlatoEntrada, TipoDietetico } from '../types';

export const MAPA_DIETETICO_PLATOS: Record<string, TipoDietetico[]> = {
  // Desayunos
  'huevos-con-cebolla-y-tomate': ['vegetariano'],
  'huevos-con-chorizo': [],
  
  // Empanadas y fritos
  'empanada-con-huevo': [],
  'empanaditas-de-maiz': [],
  'deditos-de-queso': ['vegetariano'],
  'empanada-chilena': [],
  
  // Ceviches y entradas
  'ceviche-santa-maria-del-mar': ['mariscos', 'recomendacion'],
  'ceviche-de-camaron': ['mariscos'],
  'coctel-de-camarones': ['mariscos'],
  'ceviche-mixto': ['mariscos'],
  'carpaccio-de-pescado': ['mariscos'],
  'muelitas-de-cangrejo': ['mariscos'],
  
  // Sopas
  'crema-de-ahuyama': ['vegetariano'],
  'sopa-de-lentejas': ['vegetariano'],
  'sopa-de-pescado': ['mariscos'],
  'sopa-de-pollo': [],
  
  // Del Mar
  'cazuela-de-mariscos-santa-maria': ['mariscos', 'recomendacion'],
  'langostinos-de-mar': ['mariscos'],
  'filete-de-pescado-de-mar': ['mariscos'],
  'bandeja-de-mejillones': ['mariscos'],
  'arroz-cremoso-de-mariscos': ['mariscos', 'recomendacion'],
  'pescado-sobre-pasta-cremosa': ['mariscos'],
  'camarones-del-capitan': ['mariscos'],
  
  // Fuego y Sabana / Carnes
  'posta-negra-cartagenera': ['recomendacion'],
  'lomo-fino-a-la-pimienta': [],
  'bistec-de-lomo-fino-a-caballo': [],
  'pollo-encocado-a-la-cartagenera': [],
  'bondiola-de-cerdo-al-horno': [],
  'cordero-lechal-en-salsa-criolla': [],
  'nasi-goreng-de-la-casa': ['mariscos', 'recomendacion'],
  
  // Ensaladas
  'ensalada-thai': ['vegetariano'],
  'ensalada-de-estacion': ['vegetariano'],
  
  // Pastas
  'pasta-primavera': ['vegetariano'],
  'pasta-al-pesto': ['vegetariano'],
  'pasta-marinera': ['mariscos'],
  
  // Sandwiches
  'sandwich-pollo-asado': [],
  'sandwich-quesos-fundidos': ['vegetariano'],
  'hamburguesa-del-bucanero': [],
  
  // Postres
  'tres-leches': ['vegetariano'],
  'flan-de-caramelo': ['vegetariano'],
  'torta-de-banano': ['vegetariano'],
};

/**
 * Obtiene los tipos dietéticos asignados o inferidos de un plato
 */
export function obtenerTiposDieteticos(plato: PlatoEntrada): TipoDietetico[] {
  if (plato.dietetico && plato.dietetico.length > 0) {
    return plato.dietetico;
  }
  if (MAPA_DIETETICO_PLATOS[plato.id]) {
    return MAPA_DIETETICO_PLATOS[plato.id];
  }
  
  // Detección automática de respaldo
  const res: TipoDietetico[] = [];
  const nombreLower = (plato.nombre.es + ' ' + plato.nombre.en).toLowerCase();
  const descLower = (plato.descripcion.es + ' ' + plato.descripcion.en).toLowerCase();
  const cat = plato.categoria;

  if (
    cat === 'del-mar' ||
    nombreLower.includes('ceviche') ||
    nombreLower.includes('marisco') ||
    nombreLower.includes('camar') ||
    nombreLower.includes('pescado') ||
    nombreLower.includes('cangrejo') ||
    nombreLower.includes('mejillon')
  ) {
    res.push('mariscos');
  }

  if (
    plato.id.includes('posta-negra') ||
    plato.id.includes('santa-maria-del-mar') ||
    plato.id.includes('cazuela')
  ) {
    res.push('recomendacion');
  }

  if (
    nombreLower.includes('vegetari') ||
    descLower.includes('vegetari') ||
    nombreLower.includes('ahuyama') ||
    nombreLower.includes('lenteja') ||
    cat === 'postres' ||
    nombreLower.includes('queso')
  ) {
    if (!res.includes('mariscos') && !nombreLower.includes('carne') && !nombreLower.includes('chorizo') && !nombreLower.includes('pollo')) {
      res.push('vegetariano');
    }
  }

  return res;
}

const TEXTOS_DIETETICOS: Record<TipoDietetico, Record<Idioma, string>> = {
  vegetariano: {
    es: 'Vegetariano',
    en: 'Vegetarian',
  },
  mariscos: {
    es: 'Mariscos',
    en: 'Seafood',
  },
  recomendacion: {
    es: 'Recomendación de la Casa',
    en: 'House Recommendation',
  },
};

interface DietaryIconBadgeProps {
  tipo: TipoDietetico;
  idioma: Idioma;
}

export const DietaryIconBadge: React.FC<DietaryIconBadgeProps> = ({ tipo, idioma }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const label = TEXTOS_DIETETICOS[tipo][idioma];

  // Cerrar al hacer clic fuera o después de un breve tiempo en dispositivos táctiles
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 2800);

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const renderIcon = () => {
    switch (tipo) {
      case 'vegetariano':
        // Ícono de hoja estilizada (14x14 px, SVG vectorial monocromático en Rojo Carmín #8A0C13)
        return (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 text-[#8A0C13] shrink-0"
            aria-hidden="true"
          >
            <path d="M11 20A7 7 0 0 1 4 13C4 7 8 2 20 2c0 12-5 16-11 16Z" />
            <path d="M4 21c2-3 5-5 9-7" />
          </svg>
        );

      case 'mariscos':
        // Ícono minimalista de pez (14x14 px, SVG vectorial monocromático en Rojo Carmín #8A0C13)
        return (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 text-[#8A0C13] shrink-0"
            aria-hidden="true"
          >
            <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
            <path d="M18 12v.5" />
            <path d="M16 17.93a12.6 12.6 0 0 1-5-1.93" />
            <path d="M2 12h3" />
            <path d="M2.5 8 5 11" />
            <path d="M2.5 16 5 13" />
          </svg>
        );

      case 'recomendacion':
        // Ícono de estrella estilizada de 4 puntas de autor / flor de lis (14x14 px, Rojo Carmín #8A0C13)
        return (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3.5 h-3.5 text-[#8A0C13] shrink-0"
            aria-hidden="true"
          >
            <path d="M12 2L14.6 9.4L22 12L14.6 14.6L12 22L9.4 14.6L2 12L9.4 9.4L12 2Z" />
          </svg>
        );
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center align-middle group/diet"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className="inline-flex items-center justify-center p-0.5 text-[#8A0C13] hover:opacity-75 transition-opacity duration-200 cursor-pointer bg-transparent border-0 outline-none focus:outline-none"
        aria-label={label}
        title={label}
      >
        {renderIcon()}
      </button>

      {/* Micro-tooltip sutil con fondo blanco marfil (#FAF8F5) y texto en gris oscuro */}
      <div
        role="tooltip"
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 z-50 pointer-events-none transition-all duration-200 ease-out whitespace-nowrap px-2 py-0.5 rounded text-[11px] font-sans font-medium tracking-normal bg-[#FAF8F5] text-stone-800 border border-stone-200 shadow-xs ${
          isOpen
            ? 'opacity-100 translate-y-0 visible scale-100'
            : 'opacity-0 translate-y-1 invisible scale-95 group-hover/diet:opacity-100 group-hover/diet:translate-y-0 group-hover/diet:visible group-hover/diet:scale-100'
        }`}
      >
        <span>{label}</span>
        {/* Puntero sutil hacia el ícono */}
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#FAF8F5]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

interface DietaryBadgeGroupProps {
  plato: PlatoEntrada;
  idioma: Idioma;
  className?: string;
}

export const DietaryBadgeGroup: React.FC<DietaryBadgeGroupProps> = ({
  plato,
  idioma,
  className = '',
}) => {
  const tipos = obtenerTiposDieteticos(plato);

  if (!tipos || tipos.length === 0) {
    return null;
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 shrink-0 ${className}`}
      aria-label="Información dietética y distintivos"
    >
      {tipos.map((tipo) => (
        <DietaryIconBadge
          key={`${plato.id}-${tipo}`}
          tipo={tipo}
          idioma={idioma}
        />
      ))}
    </div>
  );
};
