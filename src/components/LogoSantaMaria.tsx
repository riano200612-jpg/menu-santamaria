import React from 'react';

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
 * Componente principal del Logo de la Carta Pirata de Santa María del Mar
 * Reproduce fielmente la portada de la carta original (Página 1 del PDF)
 */
export function LogoCartaSantaMaria({
  idioma = 'es',
  darkMode = true,
}: {
  idioma?: 'es' | 'en';
  darkMode?: boolean;
}) {
  return (
    <div
      id="logo-carta-restaurante"
      className="relative overflow-hidden rounded-2xl border transition-all duration-300 shadow-xl"
      style={{
        background: 'linear-gradient(145deg, #7c1217 0%, #941f25 45%, #660d11 100%)',
        borderColor: '#b45309',
      }}
    >
      {/* Fondo con textura sutil y destellos dorados */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.12)_0%,transparent_75%)] pointer-events-none" />

      {/* Marco perimetral decorativo dorado típico de la carta pirata */}
      <div className="absolute inset-2 sm:inset-3 border border-amber-400/40 rounded-xl pointer-events-none" />
      <div className="absolute inset-2.5 sm:inset-3.5 border border-dashed border-amber-300/20 rounded-lg pointer-events-none" />

      {/* Esquinas ornamentales estilo carta náutica */}
      <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-amber-400/80 pointer-events-none" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-amber-400/80 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-amber-400/80 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-amber-400/80 pointer-events-none" />

      <div className="relative px-6 py-7 sm:py-8 flex flex-col items-center text-center">
        {/* Encabezado: RESTAURANTE • BAR */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-amber-300/80" />
          <h2
            className="text-xs sm:text-sm font-sans font-bold tracking-[0.28em] uppercase text-amber-100/95"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}
          >
            RESTAURANTE • BAR
          </h2>
          <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-amber-300/80" />
        </div>

        {/* Tipografía artística principal: SANTA MARÍA DEL MAR */}
        <div className="my-1.5 flex flex-col items-center">
          {/* Título vectorial con caligrafía fluida y lazos exactos de la portada */}
          <div className="relative">
            <span
              className="block font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-none"
              style={{
                fontFamily: '"Cinzel Decorative", "Playfair Display", Georgia, serif',
                textShadow: '0 2px 10px rgba(0,0,0,0.7), 0 0 20px rgba(254,240,138,0.25)',
              }}
            >
              SANTA
            </span>
            <div className="flex items-center justify-center -mt-1 sm:-mt-1.5">
              <span
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-none"
                style={{
                  fontFamily: '"Cinzel Decorative", "Playfair Display", Georgia, serif',
                  textShadow: '0 2px 10px rgba(0,0,0,0.7), 0 0 20px rgba(254,240,138,0.25)',
                }}
              >
                MARÍA
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 -mt-1 sm:-mt-1.5">
              <span className="text-[11px] sm:text-xs font-serif italic text-amber-200 uppercase tracking-widest font-semibold">
                DEL
              </span>
              <span
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-none"
                style={{
                  fontFamily: '"Cinzel Decorative", "Playfair Display", Georgia, serif',
                  textShadow: '0 2px 10px rgba(0,0,0,0.7), 0 0 20px rgba(254,240,138,0.25)',
                }}
              >
                MAR
              </span>
            </div>

            {/* Trazo decorativo fluido simulando el lazo caligráfico de la carta */}
            <svg
              className="w-48 sm:w-64 h-6 mx-auto -mt-1 text-amber-300/80"
              viewBox="0 0 260 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 10 12 C 45 4, 75 19, 130 11 C 185 3, 215 18, 250 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="130" cy="11" r="3" fill="#fef08a" />
              <circle cx="70" cy="12" r="1.5" fill="#fde047" />
              <circle cx="190" cy="11" r="1.5" fill="#fde047" />
            </svg>
          </div>

          {/* Firma cursiva: by Lety Moreno */}
          <div className="mt-1 sm:mt-1.5 flex items-center justify-center gap-1.5">
            <span className="text-xs font-serif italic text-amber-200/90 font-light">by</span>
            <span
              className="text-xl sm:text-2xl font-serif text-white tracking-wide italic font-medium"
              style={{
                fontFamily: '"Brush Script MT", "Brush Script Std", "Dancing Script", cursive, Georgia',
                textShadow: '0 1px 4px rgba(0,0,0,0.8)',
              }}
            >
              Lety Moreno
            </span>
          </div>
        </div>

        {/* Timón náutico dorado y monograma central de la portada */}
        <div className="mt-3 mb-2 flex items-center justify-center">
          <TimonNauticoLogo className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md hover:rotate-45 transition-transform duration-700 ease-out" />
        </div>

        {/* Leyendas originales de la portada de la carta */}
        <div className="mt-2 space-y-1">
          <p
            className="text-xs sm:text-sm font-serif italic font-bold tracking-wider text-amber-200"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}
          >
            Carta Pirata <span className="text-amber-400/80">/</span> Pirate Menu
          </p>
          <p className="text-[11px] sm:text-xs font-serif italic text-amber-100/90 max-w-sm mx-auto leading-relaxed">
            {idioma === 'es'
              ? '¡Embárcate en un viaje de sabores!'
              : '“Set sail on a journey of flavors!”'}
          </p>
          <p className="text-[10px] sm:text-[11px] font-sans text-amber-300/80 tracking-widest uppercase">
            Cartagena de Indias • Colombia
          </p>
        </div>
      </div>
    </div>
  );
}
