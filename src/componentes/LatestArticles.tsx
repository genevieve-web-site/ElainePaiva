import { useLanguage } from "../context/useLanguage";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

const video1 = new URL("../assets/videos/1.mp4", import.meta.url).href;
const video2 = new URL("../assets/videos/2.mp4", import.meta.url).href;
const video3 = new URL("../assets/videos/3.mp4", import.meta.url).href;
const video4 = new URL("../assets/videos/4.mp4", import.meta.url).href;

const articles = [
  {
    id: 1,
    category: "Alisamentos",
    title: "O Segredo do Brilho Espelhado: Técnica Espelhado",
    video: video1,
    date: "Março 15, 2026",
  },
  {
    id: 2,
    category: "Cuidados",
    title: "Cronograma Capilar para Cabelos Quimicamente Tratados",
    video: video2,
    date: "Março 10, 2026",
  },
  {
    id: 3,
    category: "Produtos",
    title: "Top 5 Produtos para Manutenção do Alisamento em Casa",
    video: video3,
    date: "Março 05, 2026",
  },
  {
    id: 4,
    category: "Alisamentos",
    title: "Resultados de Alisamento com Efeito Espelhado",
    video: video4,
    date: "Março 02, 2026",
  },
  {
    id: 5,
    category: "Cuidados",
    title: "Cuidados Essenciais para Manter o Liso por Mais Tempo",
    video: video1,
    date: "Fevereiro 27, 2026",
  },
  {
    id: 6,
    category: "Produtos",
    title: "Produtos Recomendados para Brilho e Maciez",
    video: video3,
    date: "Fevereiro 20, 2026",
  },
];

const LatestArticles = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  if (!t || !t.latest) return null;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      const scrollAmount = direction === "left" ? -width / 2 : width / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    // Reduzi o padding vertical de py-20 para py-12
    <section className=" bg-[#B09980] relative w-full py-12 px-4 md:px-10 overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Título da Seção - Mais compacto */}
        <div className="flex justify-between items-end mb-8 border-b border-white/30 pb-4">
          <h2 className="mt-4 ml-2 md:mt-0 text-2xl md:text-3xl font-serif text-white">
            {t.latest.titleStart}{" "}
            <span className=" font-light ">{t.latest.titleHighlight}</span>
          </h2>

          <div className="flex items-center gap-6 pb-1">
            <button
              onClick={() => scroll("left")}
              className="cursor-pointer hover:opacity-60 transition-opacity"
              aria-label={t.alisamentos.prevLabel}
            >
              <svg width="60" height="12" viewBox="0 0 40 12" fill="none">
                <path
                  d="M40 6H2M2 6L7 1M2 6L7 11"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="cursor-pointer hover:opacity-60 transition-opacity"
              aria-label={t.alisamentos.nextLabel}
            >
              <svg width="60" height="12" viewBox="0 0 40 12" fill="none">
                <path
                  d="M0 6H38M38 6L33 1M38 6L33 11"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </button>
            <a
              href="https://www.instagram.com/elainepaiva_hairbeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] tracking-[3px] uppercase font-medium text-white hover:text-white transition-colors"
            >
              {t.latest.viewAll}
            </a>
          </div>
        </div>

        {/* Carrossel de Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="min-w-[85%] md:min-w-[32%] lg:min-w-[30%] group cursor-pointer snap-start"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gray-800 shadow-lg">
                <video
                  src={article.video}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onCanPlay={(e) => {
                    const el = e.currentTarget;
                    if (el.paused) {
                      void el.play().catch(() => {});
                    }
                  }}
                />
              </div>

              <span className="text-[9px] tracking-[2px] uppercase font-semibold text-brand-light mb-2 block">
                {t.latest.articles[index]?.category || article.category}
              </span>
              <h3 className="text-lg font-serif leading-tight text-white/90 group-hover:text-white transition-colors">
                {t.latest.articles[index]?.title || article.title}
              </h3>
            </div>
          ))}
        </div>
        {/* --- Seção de Agendamento via WhatsApp --- */}
        <div className="mt-16 bg-[#E8D9C5]  border border-white/10 py-12 px-6 text-center rounded-sm">
          <div className="max-w-2xl mx-auto space-y-8 text-center">
            <div className="space-y-3 flex flex-col items-center">
              <h3 className="text-4xl md:text-4xl font-serif text-black tracking-tight text-center pl-0 md:pl-12">
                {t.latest.bookingTitle}{" "}
                <span className="italic font-light text-brand-light font-serif">
                  {t.latest.bookingHighlight}
                </span>
              </h3>
              <p className="text-[11px] md:text-xs tracking-[3px] uppercase text-[#4c3c2c] font-light leading-relaxed text-center md:whitespace-nowrap">
                {t.latest.bookingSubtitle}
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <a
                href="https://wa.me/351914094354"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white/60 text-brand-dark text-[11px] tracking-[4px] uppercase font-bold hover:bg-white transition-all duration-300 shadow-xl"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2} />
                {t.latest.bookingCta}
                {/* Efeito de borda flutuante clássico da Camila Coelho */}
                <span className="absolute -bottom-2 -right-2 w-full h-full border border-white/20 group-hover:bottom-0 group-hover:right-0 transition-all -z-10"></span>
              </a>

              <p className="text-[9px] text-[#4c3c2c]  uppercase tracking-[2px]">
                {t.latest.bookingResponse}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
