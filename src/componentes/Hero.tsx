// src/componentes/Hero.jsx
import React from "react";
import { useLanguage } from "../context/useLanguage";

const heroImage = new URL(
  "../assets/elaine/Perfil_Elaine_olhar.jpg",
  import.meta.url,
).href;

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#F9F7F4] overflow-hidden">
      <div className="max-w-[1110px] mx-auto px-4 md:px-10 pt-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 md:sticky md:top-24 z-20 pb-10">
            <span className="text-[11px] tracking-[5px] uppercase text-brand mb-4 block">
              {t.hero.eyebrow}
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif leading-[0.85] text-brand-dark">
              {t.hero.titleLine} <br />
              <span className="italic font-light block mt-2">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <p className="max-w-sm text-gray-600 text-[14px] font-light leading-relaxed pt-6">
              {t.hero.description}
            </p>
            <button className="mt-8 px-10 py-4 border border-brand-dark text-brand-dark text-[10px] tracking-[3px] uppercase hover:bg-brand-dark hover:text-white transition-all">
              {t.hero.cta}
            </button>
          </div>
          <div className="md:col-span-7 relative">
            <img
              src={heroImage}
              alt={t.hero.imageAlt}
              className="w-full h-[90vh] md:h-[110vh] object-cover shadow-2xl"
            />
            <p className="text-[10px] tracking-widest text-gray-400 uppercase text-right mt-2">
              {t.hero.collectionLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
