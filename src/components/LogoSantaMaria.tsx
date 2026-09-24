import React, { useState } from 'react';
import { motion } from 'motion/react';

/**
 * Emblema circular oficial SMM (Monograma con lazos náuticos)
 * Presente en la cabecera de todas las páginas de la carta (páginas 2 a 8)
 */
export function EmblemaSMM({ className = 'w-10 h-10', conBordeDorado = true }: { className?: string; conBordeDorado?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Emblema SMM Santa María del Mar"
    >
      <defs>
        <radialGradient id="smm-grad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#b3242a" />
          <stop offset="60%" stopColor="#8d181e" />
          <stop offset="100%" stopColor="#630f13" />
        </radialGradient>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="45%" stopColor="#f59e0b" />
          <stop offset="70%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
      </defs>

      {/* Círculo base carmesí profundo */}
      <circle cx="50" cy="50" r="47" fill="url(#smm-grad)" />

      {/* Anillo exterior decorativo dorado */}
      {conBordeDorado && (
        <>
          <circle cx="50" cy="50" r="46" stroke="url(#gold-grad)" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="42" stroke="url(#gold-grad)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
        </>
      )}

      {/* Monograma SMM caligráfico en blanco con lazo inferior */}
      <g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round">
        {/* Letra S */}
        <path
          d="M 33 32 C 30 27, 23 28, 22 34 C 21 40, 34 41, 32 49 C 30 55, 21 55, 19 50"
          strokeWidth="3.2"
        />
        {/* Primer M */}
        <path
          d="M 36 53 L 36 29 L 46 45 L 56 29 L 56 53"
          strokeWidth="3.4"
        />
        {/* Segundo M */}
        <path
          d="M 59 53 L 59 29 L 69 45 L 79 29 L 79 53"
          strokeWidth="3.4"
        />

        {/* Lazo ornamental náutico entrelazado (flourish de la carta) */}
        <path
          d="M 22 66 C 30 57, 44 57, 50 67 C 56 57, 70 57, 78 66 C 82 71, 74 76, 68 73 C 58 68, 42 68, 32 73 C 26 76, 18 71, 22 66 Z"
          strokeWidth="2.2"
          fill="#ffffff"
          fillOpacity="0.15"
        />
        <path
          d="M 28 66 Q 50 78 72 66"
          strokeWidth="1.8"
        />
      </g>
    </svg>
  );
}

/**
 * Timón náutico de navegación con el monograma SMM central (Página 1 de la carta)
 */
export function TimonNauticoLogo({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Timón Santa María del Mar"
    >
      <defs>
        <linearGradient id="timon-wood" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="timon-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* 8 Asas exteriores del timón (rayos que sobresalen) */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 70 70)`}>
          {/* Empuñadura / mango de madera */}
          <path
            d="M 67 10 L 73 10 C 75 10 76 13 74 16 L 73 30 L 67 30 L 66 16 C 64 13 65 10 67 10 Z"
            fill="url(#timon-wood)"
            stroke="url(#timon-gold)"
            strokeWidth="1"
          />
          {/* Remate esférico superior */}
          <circle cx="70" cy="8" r="3.5" fill="url(#timon-gold)" />
          {/* Rayo central */}
          <line x1="70" y1="30" x2="70" y2="70" stroke="url(#timon-gold)" strokeWidth="3" />
        </g>
      ))}

      {/* Rueda exterior de madera */}
      <circle cx="70" cy="70" r="42" stroke="url(#timon-wood)" strokeWidth="7" fill="none" />
      <circle cx="70" cy="70" r="45.5" stroke="url(#timon-gold)" strokeWidth="1.5" fill="none" />
      <circle cx="70" cy="70" r="38.5" stroke="url(#timon-gold)" strokeWidth="1.5" fill="none" />

      {/* Aro interior de bronce */}
      <circle cx="70" cy="70" r="28" stroke="url(#timon-gold)" strokeWidth="3" fill="none" />

      {/* Núcleo central con fondo carmesí */}
      <circle cx="70" cy="70" r="22" fill="#8d181e" stroke="url(#timon-gold)" strokeWidth="2" />

      {/* Letras SMM en el centro del timón */}
      <text
        x="70"
        y="75"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="serif"
        fontWeight="bold"
        fontSize="12"
        letterSpacing="1"
      >
        SMM
      </text>
    </svg>
  );
}

/**
 * Imagen de portada oficial optimizada de Santa María del Mar (Restaurante · Bar by Lety Moreno)
 * Aplica los detalles premium:
 * - Animación: Fade-in suave que desciende ligeramente al cargar la página
 * - Profundidad: Sombra paralela sutil (drop shadow) que destaca sobre el fondo blanco marfil (#FBFBFB)
 * - Responsividad: 70% de ancho en móviles, con ancho máximo de 300px en monitores grandes
 */
export function PortadaSantaMaria({
  className = '',
  darkMode = false,
}: {
  idioma?: 'es' | 'en';
  darkMode?: boolean;
  className?: string;
}) {
  const [usarFallbackSvg, setUsarFallbackSvg] = useState(false);

  return (
    <motion.div
      id="portada-carta-restaurante"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className={`relative mx-auto w-full flex flex-col justify-center items-center py-2 ${className}`}
    >
      <div
        className="w-[70%] max-w-[300px] mx-auto flex justify-center items-center group transition-transform duration-300 hover:scale-[1.015]"
        style={{ willChange: 'transform, opacity' }}
      >
        {!usarFallbackSvg ? (
          <img
            src="/logo_santamaria.webp"
            alt="Restaurante Bar Santa María del Mar by Lety Moreno"
            className={`w-full h-auto aspect-[600/840] object-contain rounded-2xl transition-all duration-300 ${
              darkMode
                ? 'shadow-[0_12px_32px_-4px_rgba(0,0,0,0.7)] drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] border border-stone-800/60'
                : 'shadow-[0_14px_30px_-6px_rgba(55,65,81,0.14),0_6px_14px_-3px_rgba(55,65,81,0.08)] drop-shadow-[0_10px_20px_rgba(55,65,81,0.12)] border border-[#8A0C13]/10'
            }`}
            onError={() => setUsarFallbackSvg(true)}
            loading="eager"
            fetchPriority="high"
            width={300}
            height={420}
          />
        ) : (
          <img
            src="/portada_santamaria.svg"
            alt="Restaurante Bar Santa María del Mar by Lety Moreno"
            className={`w-full h-auto aspect-[600/840] object-contain rounded-2xl transition-all duration-300 ${
              darkMode
                ? 'shadow-[0_12px_32px_-4px_rgba(0,0,0,0.7)] drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] border border-stone-800/60'
                : 'shadow-[0_14px_30px_-6px_rgba(55,65,81,0.14),0_6px_14px_-3px_rgba(55,65,81,0.08)] drop-shadow-[0_10px_20px_rgba(55,65,81,0.12)] border border-[#8A0C13]/10'
            }`}
            loading="eager"
            width={300}
            height={420}
          />
        )}
      </div>
    </motion.div>
  );
}

// Alias de retrocompatibilidad
export const LogoCartaSantaMaria = PortadaSantaMaria;
