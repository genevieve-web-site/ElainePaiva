import React, { useState } from "react";
import { useLanguage } from "../context/useLanguage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { MessageCircle } from "lucide-react";

// Importe os estilos do Swiper (essencial para funcionar)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- IMPORTAÇÃO DE IMAGENS ---
// (Substitua pelos caminhos reais das fotos de alta qualidade da Elaine)
import liso1 from "../assets/servicos/resultado1.jpg";
import liso2 from "../assets/servicos/resultado2.jpg";
import liso3 from "../assets/servicos/resultado3.jpg";
import formacao1 from "../assets/elaine/Elaine_premio.jpg";
import formacao2 from "../assets/elaine/Com_Secador.jpeg";
import formacao3 from "../assets/elaine/PerfilFrente.jpeg";
import salon1 from "../assets/servicos/bg-salon.jpg";
// Adicione mais imagens conforme necessário

const galleryData = [
  {
    id: "liso",
    categoryKey: "gallery.catLiso", // Chave para o JSON (ex: "Liso Espelhado")
    images: [liso1, liso2, liso3, liso1, liso2], // Carrossel 1
  },
  {
    id: "formacoes",
    categoryKey: "gallery.catFormacoes", // Chave para o JSON (ex: "Masterclasses & Europa")
    images: [formacao1, formacao2, formacao3, formacao1], // Carrossel 2
  },
  {
    id: "salon",
    categoryKey: "gallery.catSalon", // Chave para o JSON (ex: "O Espaço Dlux Porto")
    images: [salon1, liso1, salon1], // Carrossel 3
  },
];

const GalleryPage = () => {
  const { t } = useLanguage();

  // Proteção simples contra carregamento do JSON
  if (!t || !t.gallery) return null;

  return (
    <main className="min-h-screen bg-[#F9F7F4] pt-12 md:pt-20 pb-20 px-4 md:px-10 max-w-[1440px] mx-auto">
      {/* HEADER DA GALERIA */}
      <header className="text-center mb-16 md:mb-24 space-y-4">
        <span className="text-[11px] tracking-[5px] uppercase font-light text-brand block mb-4">
          {t.gallery.eyebrow}
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-brand-dark uppercase tracking-tight">
          {t.gallery.title}{" "}
          <span className="italic font-light">{t.gallery.titleHighlight}</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed pt-4 max-w-xl mx-auto">
          {t.gallery.description}
        </p>
      </header>

      {/* SEÇÕES DE CARROSSÉIS */}
      <section className="space-y-16 md:space-y-24">
        {galleryData.map((category) => (
          <div key={category.id} className="gallery-category-block">
            {/* TÍTULO DA CATEGORIA (Editorial) */}
            <div className="flex items-center gap-6 mb-10 border-b border-[#eee] pb-4">
              <span className="w-10 h-[1px] bg-brand"></span>
              <h2 className="text-xl md:text-2xl font-serif text-brand-dark uppercase tracking-wider">
                {t.gallery[category.categoryKey.split(".")[1]]}
                {/* t.gallery.catLiso, t.gallery.catFormacoes, etc. */}
              </h2>
            </div>

            {/* CARROSSÉL SWIPER MODERNO */}
            <Swiper
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              spaceBetween={20} // Espaço entre os slides
              slidesPerView={1.2} // Quantos slides aparecem (responsivo)
              centeredSlides={false}
              grabCursor={true} // Cursor de mão
              navigation={true} // Setas Laterais
              pagination={{ clickable: true, dynamicBullets: true }} // Bolinhas
              mousewheel={true} // Rolar com o mousewheel
              keyboard={true} // Controlar com o teclado
              breakpoints={{
                // Quando a tela for >= 640px (mobile landscape)
                640: { slidesPerView: 2.2, spaceBetween: 20 },
                // Quando a tela for >= 1024px (desktop)
                1024: { slidesPerView: 3.2, spaceBetween: 30 },
              }}
              className="gallery-swiper !pb-12" // pb-12 para dar espaço para a paginação
            >
              {category.images.map((image, index) => (
                <SwiperSlide key={index} className="snap-start">
                  {/* Container da imagem com Aspect Ratio 4:5 (Estilo Editorial) */}
                  <div className="relative aspect-[4/5] overflow-hidden shadow-lg group">
                    <img
                      src={image}
                      alt={`${t.gallery.title} ${t.gallery[category.categoryKey.split(".")[1]]} - ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Overlay sutil ao passar o mouse */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors pointer-events-none"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </section>

      {/* CTA FINAL (UX para Agendamento) */}
      <section className="py-24 px-4 text-center mt-12 bg-white">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark tracking-tight">
            {t.gallery.ctaTitle}
          </h2>
          <p className="text-sm tracking-[3px] uppercase text-gray-400 font-light">
            {t.gallery.ctaText}
          </p>
          <a
            href="https://wa.me/351914094354"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-brand-dark text-white text-[11px] tracking-[4px] uppercase font-bold hover:bg-brand transition-all shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            {t.gallery.ctaButton}
          </a>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
