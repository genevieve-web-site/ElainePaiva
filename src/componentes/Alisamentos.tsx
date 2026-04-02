import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

const image1 = new URL("../assets/servicos/1.jpg", import.meta.url).href;
const image2 = new URL("../assets/servicos/2.jpg", import.meta.url).href;
const image3 = new URL("../assets/servicos/3.jpg", import.meta.url).href;
const image4 = new URL("../assets/servicos/4.jpg", import.meta.url).href;
const image5 = new URL("../assets/servicos/resultado1.jpg", import.meta.url)
  .href;
const image6 = new URL("../assets/servicos/resultado2.jpg", import.meta.url)
  .href;
const image7 = new URL("../assets/servicos/resultado3.jpg", import.meta.url)
  .href;
const image8 = new URL("../assets/servicos/1.jpg", import.meta.url).href;
const image9 = new URL("../assets/servicos/resultado1.jpg", import.meta.url)
  .href;

const alisamentosData = [
  {
    id: 1,
    cat: "ESPELHADO",
    title: " Brilho perfeito",
    img: image1,
  },
  {
    id: 2,
    cat: "ALISAMENTO",

    title: "Profissionalismo e técnica avançada. ",
    img: image2,
  },
  {
    id: 3,
    cat: "Tratamentos",
    title: "Todo brilho e saúde que seu cabelo merece.",
    img: image3,
  },
  {
    id: 4,
    cat: "CUIDADOS",
    title: "CRONOGRAMA CAPILAR PÓS-QUÍMICA",
    img: image4,
  },
  {
    id: 5,
    cat: "SAÚDE CAPILAR",
    title: "O SEGREDO DO BRILHO ESPELHADO",
    img: image5,
  },
  {
    id: 6,
    cat: "PRODUTOS",
    title: "PRODUTOS DE ALTA QUALIDADE PARA UM ALISAMENTO DURADOURO",
    img: image6,
  },
  {
    id: 7,
    cat: "BELEZA",
    sub: "LOIRO LISO",
    title: "LOIRO LISO: DICAS DE CUIDADOS PARA UM LOIRO PERFEITO E SAUDÁVEL",
    img: image7,
  },
  {
    id: 8,
    cat: "BELEZA",
    sub: "CABELO",
    title: "CORTE SHAGGY: O FAVORITO DAS FASHIONISTAS",
    img: image8,
  },
  {
    id: 9,
    cat: "DICAS",
    sub: "VIAGEM",
    title: "MEUS PRODUTOS ESSENCIAIS DE NECESSAIRE",
    img: image9,
  },
];

const AlisamentosSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Calcula o deslocamento baseado na largura do container para ser responsivo
      const width = scrollRef.current.clientWidth;
      const scrollAmount = direction === "left" ? -width / 2 : width / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="alisamentos"
      className="py-12 px-4 md:px-6 max-w-[1440px] mx-auto overflow-hidden"
    >
      {/* Header com Título e Setas */}
      <div className="flex justify-between items-end mb-8 border-b border-[#eee] pb-6">
        <h2 className="text-4xl font-serif text-[#8B4343]  uppercase font-light text-brand block">
          {t.alisamentos.sectionTitle}
        </h2>

        <div className="flex gap-6 pb-2">
          <button
            onClick={() => scroll("left")}
            className="cursor-pointer hover:opacity-50 transition-opacity"
            aria-label={t.alisamentos.prevLabel}
          >
            <svg width="60" height="12" viewBox="0 0 40 12" fill="none">
              <path
                d="M40 6H2M2 6L7 1M2 6L7 11"
                stroke="#8B4343"
                strokeWidth="1"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="cursor-pointer hover:opacity-50 transition-opacity"
            aria-label={t.alisamentos.nextLabel}
          >
            <svg width="60" height="12" viewBox="0 0 40 12" fill="none">
              <path
                d="M0 6H38M38 6L33 1M38 6L33 11"
                stroke="#8B4343"
                strokeWidth="1"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Container do Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {alisamentosData.map((item) => {
          return (
            <div
              key={item.id}
              className="min-w-[85%] md:min-w-[32%] lg:min-w-[30%] flex flex-col gap-5 snap-start group"
            >
              {/* Imagem com Aspect Ratio 4:5 */}
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Textos */}
              <div className="space-y-3">
                <div className="text-[10px] tracking-[0.2em] font-bold text-[#b5b5b5] uppercase">
                  {item.cat}
                </div>
                <h3 className="text-2xl font-serif leading-[1.1] text-[#1a1a1a] uppercase break-words">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AlisamentosSlider;
