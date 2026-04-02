import React from "react";
import { useLanguage } from "../context/useLanguage";
import { MessageCircle } from "lucide-react";

// Importe a imagem principal da Elaine para esta página
const imgElaineAbout = new URL(
  "../assets/elaine/PerfilFrente.jpeg",
  import.meta.url,
).href;

const AboutPage = () => {
  const { t } = useLanguage();

  // Proteção contra carregamento do JSON
  if (!t || !t.about) return null;

  return (
    <main className="min-h-screen bg-[#F9F7F4]">
      {/* SEÇÃO HERO DA PÁGINA SOBRE */}
      <section className="relative pt-12 md:pt-20 pb-16 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LADO ESQUERDO: Imagem Editorial */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
              <img
                src={imgElaineAbout}
                alt={t.about.pageTitle}
                className="w-full h-full object-cover"
              />
              {/* Detalhe de design sutil */}
              <div className="absolute inset-0 border-[15px] border-white/10 pointer-events-none"></div>
            </div>
          </div>

          {/* LADO DIREITO: Texto de Apresentação */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <span className="text-[11px] tracking-[5px] uppercase font-light text-brand block">
              {t.about.category}
            </span>

            <h1 className="text-4xl md:text-6xl font-serif leading-tight text-brand-dark uppercase">
              {t.about.pageTitle}
            </h1>

            <p className="text-lg md:text-xl text-gray-700 font-serif italic leading-relaxed max-w-2xl border-l-2 border-brand pl-6">
              {t.about.pageIntro}
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO HISTÓRIA E VALORES */}
      <section className="py-20 bg-white px-4 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Bloco História */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif text-brand-dark uppercase tracking-wider">
                {t.about.storyTitle}
              </h2>
              <div className="h-[1px] w-20 bg-brand mb-8"></div>
              <p className="text-gray-600 leading-relaxed text-base">
                {t.about.storyParagraph1}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {t.about.storyParagraph2}
              </p>
            </div>

            {/* Bloco Especialidades */}
            <div className="bg-[#F9F7F4] p-10 md:p-12 shadow-sm">
              <h2 className="text-2xl font-serif text-brand-dark uppercase tracking-wider mb-8">
                {t.about.specialtiesTitle}
              </h2>
              <ul className="space-y-5">
                {[
                  t.about.specialty1,
                  t.about.specialty2,
                  t.about.specialty3,
                  t.about.specialty4,
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <span className="w-1.5 h-1.5 bg-brand rounded-full group-hover:scale-150 transition-transform"></span>
                    <span className="text-sm tracking-widest uppercase text-gray-700 font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO VALORES (DESIGN CLEAN) */}
      <section className="py-20 px-4 md:px-10 bg-[#E8D9C5]/30">
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <h2 className="text-2xl font-serif text-brand-dark uppercase tracking-widest">
            {t.about.valuesTitle}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-light italic">
            "{t.about.valuesText}"
          </p>
        </div>
      </section>

      {/* CTA FINAL (ESTILO LUXO) */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark">
            {t.about.ctaTitle}
          </h2>
          <p className="text-sm tracking-[3px] uppercase text-gray-400 font-light">
            {t.about.ctaText}
          </p>
          <a
            href="https://wa.me/351914094354"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-brand-dark text-white text-[11px] tracking-[4px] uppercase font-bold hover:bg-brand transition-all shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            {t.about.ctaButton}
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
