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
 * Componente principal del Logo Oficial de Santa María del Mar
 * Reproducción fiel del logo oficial (Restaurante • Bar, Santa María del Mar by Lety Moreno)
 */
export function LogoCartaSantaMaria({
  className = '',
}: {
  idioma?: 'es' | 'en';
  darkMode?: boolean;
  className?: string;
}) {
  return (
    <div
      id="logo-carta-restaurante"
      className={`relative mx-auto w-full max-w-[200px] sm:max-w-[220px] overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.01] ${className}`}
    >
      <svg
        viewBox="0 0 360 480"
        className="w-full h-auto block select-none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Restaurante Bar Santa María del Mar by Lety Moreno"
      >
        <defs>
          {/* Degradado carmesí profundo del fondo original */}
          <linearGradient id="smm-crimson-bg" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#8d0a11" />
            <stop offset="35%" stopColor="#7a0308" />
            <stop offset="70%" stopColor="#630005" />
            <stop offset="100%" stopColor="#4a0003" />
          </linearGradient>

          {/* Destello de luz suave superior */}
          <radialGradient id="smm-top-glow" cx="50%" cy="25%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          {/* Textura damasco / tentáculos sutil de fondo en bajo contraste */}
          <pattern id="damask-watermark" x="0" y="0" width="70" height="70" patternUnits="userSpaceOnUse">
            <path
              d="M 35 10 C 45 22, 58 22, 35 45 C 12 22, 25 22, 35 10 Z"
              fill="none"
              stroke="#2e0002"
              strokeWidth="2.2"
              opacity="0.35"
            />
            <path
              d="M 10 35 C 22 45, 22 58, 45 35 C 22 12, 22 25, 10 35 Z"
              fill="none"
              stroke="#2e0002"
              strokeWidth="2.2"
              opacity="0.35"
            />
            <path
              d="M 60 35 C 48 45, 48 58, 25 35 C 48 12, 48 25, 60 35 Z"
              fill="none"
              stroke="#2e0002"
              strokeWidth="2.2"
              opacity="0.35"
            />
            <circle cx="35" cy="35" r="3" fill="#2e0002" opacity="0.3" />
          </pattern>

          {/* Sombra suave para las letras blancas */}
          <filter id="white-text-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.65" />
          </filter>
        </defs>

        {/* Fondo rojo carmesí con textura */}
        <rect width="360" height="480" rx="16" fill="url(#smm-crimson-bg)" />
        <rect width="360" height="480" rx="16" fill="url(#damask-watermark)" />
        <rect width="360" height="480" rx="16" fill="url(#smm-top-glow)" />

        {/* 1. Encabezado: RESTAURANTE • BAR */}
        <text
          x="180"
          y="48"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="17"
          fontWeight="600"
          letterSpacing="4.5"
          filter="url(#white-text-shadow)"
        >
          RESTAURANTE • BAR
        </text>

        {/* 2. SANTA (Tipografía fluida con floreos característicos) */}
        <g
          fill="#ffffff"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#white-text-shadow)"
        >
          {/* Letra S con bucle interior inicial */}
          <path
            d="M 85 96 C 89 91, 95 90, 96 95 C 97 101, 88 103, 80 106 C 65 112, 50 123, 53 140 C 56 156, 75 160, 91 154 C 104 150, 110 138, 108 128 C 105 116, 92 113, 80 118"
            fill="none"
            strokeWidth="7"
          />
          {/* Espiral decorativo superior de la S */}
          <path
            d="M 94 94 C 91 88, 82 88, 77 93 C 71 99, 75 106, 82 106"
            fill="none"
            strokeWidth="4"
          />

          {/* Letra A */}
          <path
            d="M 115 158 L 132 94 L 149 158 M 120 142 L 144 142"
            fill="none"
            strokeWidth="6.5"
          />
          {/* Remate superior A */}
          <circle cx="132" cy="94" r="3.5" />

          {/* Letra N */}
          <path
            d="M 160 158 L 160 96 L 190 156 L 190 96"
            fill="none"
            strokeWidth="6.5"
          />

          {/* Letra T */}
          <path
            d="M 197 100 Q 216 92 235 100 M 216 96 L 216 158"
            fill="none"
            strokeWidth="6.5"
          />

          {/* Segunda A con gancho elegante */}
          <path
            d="M 244 158 L 261 94 L 278 158 M 249 142 L 273 142"
            fill="none"
            strokeWidth="6.5"
          />
          <circle cx="261" cy="94" r="3.5" />
        </g>

        {/* Lazos ornamentales fluidos que envuelven SANTA y MARIA (como en la foto original) */}
        <g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" filter="url(#white-text-shadow)">
          {/* Bucle superior derecho que sale de la T/A */}
          <path
            d="M 230 115 C 265 110, 305 125, 308 145 C 310 162, 285 174, 255 174 C 215 174, 185 155, 155 152 C 120 148, 85 162, 60 178"
            strokeWidth="4.5"
          />
          {/* Lazo en forma de 8/infinito entre SANTA y MARIA */}
          <path
            d="M 100 165 C 135 155, 175 155, 210 165 C 240 174, 275 168, 290 152 C 298 142, 295 130, 280 128 C 260 125, 230 140, 205 155"
            strokeWidth="4.2"
          />
        </g>

        {/* 3. MARÍA */}
        <g
          fill="#ffffff"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#white-text-shadow)"
        >
          {/* Letra M con arcos redondeados */}
          <path
            d="M 38 218 C 38 190, 52 176, 68 184 C 78 189, 84 204, 86 218 C 88 190, 102 176, 118 184 C 128 189, 134 204, 136 218"
            fill="none"
            strokeWidth="7"
          />

          {/* Letra A de MARIA */}
          <path
            d="M 148 218 L 165 166 L 182 218 M 153 205 L 177 205"
            fill="none"
            strokeWidth="6.5"
          />
          {/* Bucle interior de la A */}
          <circle cx="165" cy="188" r="4.5" fill="none" strokeWidth="2.5" />

          {/* Letra R */}
          <path
            d="M 194 218 L 194 166 C 208 164, 224 164, 226 180 C 228 194, 214 198, 196 198 M 210 197 L 226 218"
            fill="none"
            strokeWidth="6.5"
          />

          {/* Letra I */}
          <path
            d="M 238 168 L 238 218 M 233 168 L 243 168 M 232 218 L 244 218"
            fill="none"
            strokeWidth="6.2"
          />

          {/* Letra A final con gran lazo terminal redondeado */}
          <path
            d="M 256 218 L 273 166 L 290 218 M 261 205 L 285 205"
            fill="none"
            strokeWidth="6.5"
          />
          {/* Lazo final que se abre a la derecha formando un ojo fluido */}
          <path
            d="M 290 218 C 302 218, 318 214, 326 202 C 335 188, 326 172, 308 174 C 292 176, 286 192, 294 206 C 298 214, 308 218, 320 218"
            fill="none"
            strokeWidth="4.8"
          />
        </g>

        {/* 4. DEL */}
        <text
          x="68"
          y="266"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="18"
          fontWeight="900"
          letterSpacing="0.8"
          filter="url(#white-text-shadow)"
        >
          DEL
        </text>

        {/* 5. MAR (Con el lazo inferior en la M y el ondeado en la R) */}
        <g
          fill="#ffffff"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#white-text-shadow)"
        >
          {/* Letra M: El asta izquierda desciende y hace un rizo en espiral hacia abajo */}
          <path
            d="M 102 230 L 102 284 C 102 316, 84 340, 64 324 C 48 308, 56 284, 76 284 C 92 284, 98 296, 100 306"
            fill="none"
            strokeWidth="7"
          />
          {/* Resto de la M */}
          <path
            d="M 102 230 L 126 280 L 150 230 L 150 286"
            fill="none"
            strokeWidth="7"
          />

          {/* Letra A de MAR */}
          <path
            d="M 166 286 L 188 226 L 210 286 M 172 270 L 204 270"
            fill="none"
            strokeWidth="7"
          />

          {/* Letra R de MAR: El asta derecha se prolonga en un amplio trazo ondulado hacia la derecha */}
          <path
            d="M 224 286 L 224 228 C 240 226, 260 226, 262 246 C 264 262, 246 266, 226 266 M 242 265 C 255 282, 275 288, 305 288 C 322 288, 336 284, 345 280"
            fill="none"
            strokeWidth="7"
          />
        </g>

        {/* 6. Firma: by Lety Moreno (Caligrafía cursiva fluida auténtica) */}
        <g
          transform="translate(180, 395) rotate(-3)"
          filter="url(#white-text-shadow)"
          textAnchor="middle"
        >
          {/* Trazo "by" en cursiva */}
          <text
            x="-85"
            y="-6"
            fill="#ffffff"
            fontFamily="'Brush Script MT', 'Dancing Script', 'Caveat', cursive, Georgia, serif"
            fontSize="26"
            fontStyle="italic"
            fontWeight="400"
          >
            by
          </text>

          {/* Firma caligráfica "Lety Moreno" con trazos continuos */}
          <text
            x="20"
            y="2"
            fill="#ffffff"
            fontFamily="'Brush Script MT', 'Dancing Script', 'Caveat', cursive, Georgia, serif"
            fontSize="46"
            fontStyle="italic"
            fontWeight="bold"
            letterSpacing="1"
          >
            Lety Moreno
          </text>

          {/* Floreo sutil bajo la firma como en el original */}
          <path
            d="M -70 18 C -30 24, 40 22, 110 14"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
      </svg>
    </div>
  );
}
