import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Idioma } from '../types';

interface CabeceraCitasFadingProps {
  idioma: Idioma;
}

export function CabeceraCitasFading({ idioma }: CabeceraCitasFadingProps) {
  const citas = [
    {
      id: 'lety',
      texto: {
        es: '“Soy Lety Moreno. En Santa María del Mar comparto la cocina cartagenera que aprendí de mi familia y el legado gastronómico de mi tío Lacydes Moreno Blanco. Cada plato una tradición, Caribe y hospitalidad junto al Museo Naval.”',
        en: '“I am Lety Moreno. At Santa María del Mar, I share the Cartagena cuisine I learned from my family and the culinary legacy of my uncle Lacydes Moreno Blanco. Every dish is a tradition, Caribbean spirit, and hospitality beside the Naval Museum.”',
      },
      autor: null,
    },
    {
      id: 'lacydes',
      texto: {
        es: '“Esencialmente, la cocina, como el amor, es una forma de la contemplación y del sabio manejo del fuego.”',
        en: '“Essentially, cooking, like love, is a form of contemplation and the wise mastery of fire.”',
      },
      autor: '— LACYDES MORENO BLANCO',
    },
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % citas.length);
    }, 7000);

    return () => clearInterval(intervalo);
  }, [citas.length]);

  const citaActual = citas[indice];

  return (
    <section
      id="bloque-nuestra-historia"
      className="max-w-2xl mx-auto mt-6 px-4 text-center"
      aria-label={idioma === 'es' ? 'Nuestra Historia' : 'Our Story'}
    >
      <p className="text-xs uppercase tracking-widest font-bold text-[#8A0C13] font-serif mb-2.5">
        {idioma === 'es' ? 'Nuestra Historia' : 'Our Story'}
      </p>

      {/* Contenedor con altura mínima fija para alternar citas sin saltos de layout */}
      <div className="min-h-[6.5rem] sm:min-h-[4.5rem] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${idioma}-${citaActual.id}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-[13.5px] sm:text-[15.5px] text-stone-700 italic leading-[1.75] font-serif max-w-xl select-none">
              {citaActual.texto[idioma]}
              {citaActual.autor && (
                <span className="block mt-1 text-[11px] sm:text-xs uppercase tracking-widest text-[#8A0C13] font-serif font-semibold not-italic">
                  {citaActual.autor}
                </span>
              )}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
