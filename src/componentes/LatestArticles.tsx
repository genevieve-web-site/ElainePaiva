import React from "react";
import { MessageCircle } from "lucide-react"; // Adicione esta linha
import imageHero from "../assets/servicos/bg-salon.jpg";
import image1 from "../assets/servicos/resultado1.jpg";
import image2 from "../assets/servicos/resultado2.jpg";
import image3 from "../assets/servicos/resultado3.jpg";
const articles = [
  {
    id: 1,
    category: "Alisamentos",
    title: "O Segredo do Brilho Espelhado: Técnica Espelhado",
    image: image1,
    date: "Março 15, 2026",
  },
  {
    id: 2,
    category: "Cuidados",
    title: "Cronograma Capilar para Cabelos Quimicamente Tratados",
    image: image2,
    date: "Março 10, 2026",
  },
  {
    id: 3,
    category: "Produtos",
    title: "Top 5 Produtos para Manutenção do Alisamento em Casa",
    image: image3,
    date: "Março 05, 2026",
  },
];

const LatestArticles = () => {
  return (
    // Reduzi o padding vertical de py-20 para py-12
    <section className=" bg-[#B09980] relative w-full py-12 px-4 md:px-10 overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Título da Seção - Mais compacto */}
        <div className="flex justify-between items-end mb-8 border-b border-white/30 pb-4">
          <h2 className="text-2xl md:text-3xl font-serif text-white">
            Resultados <span className=" font-light "> recentes</span>
          </h2>
          <a
            href="#"
            className="text-[9px] tracking-[3px] uppercase font-medium text-white hover:text-white transition-colors"
          >
            Ver todos
          </a>
        </div>

        {/* Grid de Cards - Imagens menores (aspect-video) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              {/* Mudei de aspect-[3/4] para aspect-video para diminuir a altura */}
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gray-800 shadow-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <span className="text-[9px] tracking-[2px] uppercase font-semibold text-brand-light mb-2 block">
                {article.category}
              </span>
              <h3 className="text-lg font-serif leading-tight text-white/90 group-hover:text-white transition-colors">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
        {/* --- Seção de Agendamento via WhatsApp --- */}
        <div className="mt-16 bg-[#E8D9C5]  border border-white/10 py-12 px-6 text-center rounded-sm">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-serif text-[#B09980] tracking-tight">
                Agende seu horário{" "}
                <span className="italic font-light text-brand-light font-serif">
                  Agora
                </span>
              </h3>
              <p className="text-[11px] md:text-xs tracking-[3px] uppercase text-[#4c3c2c] font-light leading-relaxed">
                Experiência exclusiva • Atendimento personalizado • Brilho
                espelhado
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <a
                href="https://wa.me/seunumerodowhatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white/60 text-brand-dark text-[11px] tracking-[4px] uppercase font-bold hover:bg-white transition-all duration-300 shadow-xl"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2} />
                Falar com Elaine no WhatsApp
                {/* Efeito de borda flutuante clássico da Camila Coelho */}
                <span className="absolute -bottom-2 -right-2 w-full h-full border border-white/20 group-hover:bottom-0 group-hover:right-0 transition-all -z-10"></span>
              </a>

              <p className="text-[9px] text-[#4c3c2c]  uppercase tracking-[2px]">
                Resposta imediata em horário comercial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
