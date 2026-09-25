import { Idioma } from '../types';
import { TEXTOS_UI } from '../data/translations';
import { Award, MapPin, Phone, Globe, Instagram, AlertCircle } from 'lucide-react';

interface RestauranteHistoriaProps {
  idioma: Idioma;
  darkMode?: boolean;
}

export function RestauranteHistoria({ idioma = 'es' }: RestauranteHistoriaProps) {
  const t = TEXTOS_UI[idioma];

  return (
    <footer id="seccion-historia-premios" className="space-y-8 pt-14 pb-16 text-center max-w-2xl mx-auto px-4">
      {/* Premios y Reconocimientos Oficiales - Flotando libremente sin cajas ni bordes */}
      <div id="seccion-premios-flotante" className="space-y-2.5">
        <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest font-bold text-[#8A0C13]">
          <Award className="w-4 h-4 text-[#8A0C13]" />
          <span>{t.premiosTitulo}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-xs sm:text-sm text-stone-600 font-serif">
          <span className="flex items-center gap-1">
            <span className="text-[#8A0C13]">★</span> {t.premioTripadvisor}
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[#8A0C13]">★</span> {t.premioGuru1}
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[#8A0C13]">★</span> {t.premioGuru2}
          </span>
        </div>
      </div>

      {/* Advertencia legal sobre alergias - Texto flotante centrado y sutil */}
      <div id="aviso-legal-alergias" className="space-y-1.5 max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#8A0C13]">
          <AlertCircle className="w-3.5 h-3.5 text-[#8A0C13]" />
          <span>{idioma === 'es' ? 'Aviso Importante de Alergias' : 'Important Allergy Notice'}</span>
        </div>
        <p className="text-xs sm:text-[13px] leading-relaxed text-stone-500 font-sans">
          {t.avisoLegalAlergias}
        </p>
      </div>

      {/* Datos de contacto y ubicación física - Flotante, sutil y centrado */}
      <div className="space-y-2 text-xs sm:text-sm text-stone-600">
        <div className="flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#8A0C13]" />
          <span>{t.contactoUbicacion}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-[#8A0C13]" />
            <span>{t.telefonos}</span>
          </span>
          <span className="flex items-center gap-1">
            <Instagram className="w-3.5 h-3.5 text-[#8A0C13]" />
            <span>{t.redes}</span>
          </span>
          <span className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-[#8A0C13]" />
            <span>{t.sitioWeb}</span>
          </span>
        </div>
      </div>

      {/* Firma de la marca */}
      <div className="pt-2 text-center">
        <span className="text-xs text-stone-400 font-serif tracking-wide block">
          Santa María del Mar — Cartagena de Indias, Colombia
        </span>
      </div>
    </footer>
  );
}
