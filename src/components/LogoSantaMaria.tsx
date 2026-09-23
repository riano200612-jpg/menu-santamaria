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
 * Imagen de portada oficial optimizada de Santa María del Mar (Restaurante · Bar by Lety Moreno)
 * Renderiza la portada original en formato vectorial nativo, sutil, ultra legible y en tamaño compacto.
 */
export function PortadaSantaMaria({
  className = '',
}: {
  idioma?: 'es' | 'en';
  darkMode?: boolean;
  className?: string;
}) {
  return (
    <div
      id="portada-carta-restaurante"
      className={`relative mx-auto w-full flex justify-center items-center py-1 ${className}`}
    >
      <div className="relative w-full max-w-[145px] sm:max-w-[165px] group transition-transform duration-300 hover:scale-[1.02]">
        <svg
          viewBox="0 0 600 840"
          className="w-full h-auto aspect-[600/840] rounded-xl shadow-lg shadow-black/35 border border-amber-900/30 dark:border-amber-700/30 object-contain mx-auto block"
          role="img"
          aria-label="Restaurante Bar Santa María del Mar by Lety Moreno"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Fondo carmesí profundo sutil y elegante */}
            <radialGradient id="portada-smm-bg" cx="50%" cy="38%" r="68%">
              <stop offset="0%" stopColor="#800b16" />
              <stop offset="42%" stopColor="#5e050d" />
              <stop offset="78%" stopColor="#3d0106" />
              <stop offset="100%" stopColor="#240003" />
            </radialGradient>

            {/* Resplandor sutil superior */}
            <linearGradient id="portada-smm-sheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="25%" stopColor="#ffffff" stopOpacity="0.01" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
            </linearGradient>

            {/* Filtro sombra suave para textos nítidos */}
            <filter id="portada-smm-shadow" x="-10%" y="-10%" width="125%" height="125%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
              <feOffset dx="0" dy="2.5" result="offsetblur" />
              <feFlood floodColor="#120002" floodOpacity="0.85" />
              <feComposite in2="offsetblur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Fondo carmesí auténtico */}
          <rect width="600" height="840" fill="url(#portada-smm-bg)" rx="16" />

          {/* 2. Marca de agua marina sutil (tentáculos y elementos marítimos) */}
          <g fill="none" stroke="#1c0002" opacity="0.25" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M 105 130 C 65 170, 45 240, 75 300 C 105 350, 145 360, 185 320 C 215 290, 205 220, 175 160 Z"
              fill="#180002"
              fillOpacity="0.2"
              strokeWidth="4"
            />
            {/* Tentáculo 1 */}
            <path d="M 80 280 C 40 330, 25 410, 40 490 C 55 570, 90 625, 75 700 C 60 770, 30 800, 18 830" strokeWidth="24" />
            <circle cx="50" cy="370" r="6.5" fill="#180002" />
            <circle cx="40" cy="430" r="7.5" fill="#180002" />
            <circle cx="46" cy="495" r="7.5" fill="#180002" />
            <circle cx="66" cy="560" r="7.5" fill="#180002" />
            <circle cx="80" cy="625" r="6.5" fill="#180002" />

            {/* Tentáculo 2 */}
            <path d="M 160 170 C 220 120, 310 115, 390 135 C 470 155, 540 200, 565 270 C 585 330, 560 400, 510 440" strokeWidth="20" />
            <circle cx="260" cy="130" r="6.5" fill="#180002" />
            <circle cx="330" cy="136" r="7.5" fill="#180002" />
            <circle cx="405" cy="154" r="7.5" fill="#180002" />
            <circle cx="480" cy="184" r="7.5" fill="#180002" />
            <circle cx="538" cy="235" r="6.5" fill="#180002" />

            {/* Tentáculo 3 */}
            <path d="M 510 400 C 560 450, 580 520, 565 590 C 545 660, 490 710, 420 710 C 360 710, 320 660, 315 600 C 310 540, 350 500, 395 510 C 430 520, 445 555, 430 585" strokeWidth="16" />
            <circle cx="550" cy="480" r="6.5" fill="#180002" />
            <circle cx="552" cy="550" r="6.5" fill="#180002" />
            <circle cx="520" cy="620" r="6.5" fill="#180002" />
            <circle cx="460" cy="670" r="6" fill="#180002" />
          </g>

          {/* Brillo suave de superficie */}
          <rect width="600" height="840" fill="url(#portada-smm-sheen)" rx="16" pointerEvents="none" />

          {/* 3. ENCABEZADO: RESTAURANTE · BAR (BLANCO BRILLANTE Y ULTRA LEGIBLE) */}
          <g filter="url(#portada-smm-shadow)">
            <text
              x="300"
              y="74"
              textAnchor="middle"
              fill="#ffffff"
              style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 900,
                letterSpacing: '5.5px',
                fontSize: '27px',
              }}
            >
              RESTAURANTE · BAR
            </text>
          </g>

          {/* 4. LOGOTIPO CENTRAL: SANTA MARÍA DEL MAR (VECTORES NÍTIDOS) */}
          <g filter="url(#portada-smm-shadow)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round">
            {/* === SANTA === */}
            <path
              d="M 148 160 C 144 144, 134 138, 120 142 C 108 146, 104 158, 114 168 C 124 178, 140 182, 148 192 C 160 204, 164 218, 158 232 C 150 248, 132 254, 114 250 C 92 246, 82 232, 84 216"
              strokeWidth="14"
            />
            <circle cx="130" cy="148" r="5" fill="#ffffff" stroke="none" />
            <circle cx="84" cy="216" r="6.5" fill="#ffffff" stroke="none" />

            {/* A */}
            <path d="M 182 250 L 210 145 L 238 250 M 190 224 L 230 224" strokeWidth="13.5" />
            <circle cx="210" cy="145" r="6.5" fill="#ffffff" stroke="none" />

            {/* N */}
            <path d="M 256 250 L 256 148 L 306 248 L 306 148" strokeWidth="13.5" />

            {/* T */}
            <path d="M 352 148 L 352 250" strokeWidth="13.5" />
            <path d="M 320 152 Q 352 138 384 150" strokeWidth="13.5" />

            {/* A */}
            <path d="M 398 250 L 426 145 L 454 250 M 406 224 L 446 224" strokeWidth="13.5" />
            <circle cx="426" cy="145" r="6.5" fill="#ffffff" stroke="none" />

            {/* Lazos envolventes fluidos */}
            <path
              d="M 372 148 C 420 128, 490 140, 520 185 C 545 225, 520 260, 465 270 C 400 282, 330 250, 270 248 C 210 246, 150 270, 110 295"
              strokeWidth="8"
            />
            <path
              d="M 160 270 C 220 252, 300 252, 360 270 C 420 288, 485 278, 510 248 C 525 230, 515 210, 485 210 C 445 210, 395 240, 350 265"
              strokeWidth="7.5"
            />

            {/* === MARÍA === */}
            <path
              d="M 60 360 C 60 310, 84 286, 110 300 C 128 308, 138 335, 142 360 C 146 310, 170 286, 196 300 C 214 308, 224 335, 226 360"
              strokeWidth="14.5"
            />

            {/* A */}
            <path d="M 246 360 L 274 274 L 302 360 M 254 338 L 294 338" strokeWidth="13.5" />
            <circle cx="274" cy="308" r="7" strokeWidth="4.5" />

            {/* R */}
            <path
              d="M 324 360 L 324 274 C 350 270, 378 270, 380 298 C 382 322, 358 328, 328 328 M 352 326 L 380 360"
              strokeWidth="13.5"
            />

            {/* Í */}
            <path d="M 404 276 L 404 360 M 394 276 L 414 276 M 394 360 L 414 360" strokeWidth="12.5" />
            <path d="M 396 256 L 414 266" strokeWidth="10" />

            {/* A con lazo terminal */}
            <path d="M 436 360 L 464 274 L 492 360 M 444 338 L 484 338" strokeWidth="13.5" />
            <path
              d="M 492 360 C 516 360, 546 352, 558 330 C 572 305, 555 278, 526 282 C 498 286, 488 314, 502 338 C 510 352, 528 358, 550 358"
              strokeWidth="9"
            />

            {/* === DEL === */}
            <text
              x="108"
              y="448"
              textAnchor="middle"
              fill="#ffffff"
              stroke="none"
              style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 900,
                letterSpacing: '2px',
                fontSize: '34px',
              }}
            >
              DEL
            </text>

            {/* === MAR === */}
            <path
              d="M 166 385 L 166 480 C 166 535, 134 578, 98 550 C 70 522, 84 480, 120 480 C 148 480, 160 500, 162 520"
              strokeWidth="14.5"
            />
            <path d="M 166 385 L 208 475 L 250 385 L 250 480" strokeWidth="14" />
            <path d="M 276 480 L 314 380 L 352 480 M 286 454 L 342 454" strokeWidth="14" />
            <path
              d="M 378 480 L 378 382 C 408 378, 442 378, 446 414 C 450 442, 420 448, 382 448"
              strokeWidth="14"
            />
            <path
              d="M 412 446 C 435 476, 470 486, 520 486 C 550 486, 574 480, 590 472"
              strokeWidth="14"
            />
          </g>

          {/* 5. FIRMA INFERIOR: by Lety Moreno (CALIGRAFÍA CURSIVA NÍTIDA) */}
          <g filter="url(#portada-smm-shadow)">
            <text
              x="115"
              y="676"
              fill="#ffffff"
              style={{
                fontFamily: "'Caveat', 'Brush Script MT', 'Dancing Script', cursive",
                fontSize: '44px',
                fontStyle: 'italic',
                fontWeight: 700,
              }}
            >
              by
            </text>

            <text
              x="172"
              y="684"
              fill="#ffffff"
              style={{
                fontFamily: "'Caveat', 'Brush Script MT', 'Dancing Script', cursive",
                fontSize: '66px',
                fontStyle: 'italic',
                fontWeight: 700,
                letterSpacing: '1.5px',
              }}
            >
              Lety Moreno
            </text>

            {/* Subrayado caligráfico */}
            <path
              d="M 110 718 C 190 735, 340 730, 490 705"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4.5"
              strokeLinecap="round"
              opacity="0.95"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Alias de retrocompatibilidad
export const LogoCartaSantaMaria = PortadaSantaMaria;
