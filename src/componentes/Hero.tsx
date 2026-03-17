import Image from "../assets/elaine/Perfil_Elaine_olhar.jpg";
import React from "react";

const Hero = () => {
  return (
    // pb-0 garante que não haja espaço extra no fundo da seção
    <section className="relative w-full bg-[#F9F7F4] pb-0 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 pt-4 pb-0">
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* LADO ESQUERDO: Texto Congelado */}
          <div className="md:col-span-5 md:sticky md:top-32 self-start z-20 pb-10">
            <div className="space-y-6">
              <span className="text-[11px] tracking-[5px] uppercase font-light text-brand block">
                Luxury Hair & Care
              </span>

              <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.85] text-brand-dark">
                O Efeito <br />
                <span className="italic font-light block mt-2">espelhado</span>
              </h2>

              <p className="max-w-sm text-gray-600 text-sm font-light leading-relaxed pt-4">
                Alisamentos profissionais que alinham os fios, eliminam o frizz
                e entregam brilho intenso sem comprometer a saúde do cabelo.
              </p>

              <div className="pt-6">
                <button className="px-10 py-4 border border-brand-dark text-brand-dark text-[10px] tracking-[3px] uppercase hover:bg-brand-dark hover:text-white transition-all duration-500 cursor-pointer">
                  Conferir Coleção
                </button>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Imagem que Rola */}
          <div className="md:col-span-7 relative">
            <div className="flex flex-col gap-4">
              {" "}
              {/* Diminuído o gap de 10 para 4 */}
              <div className="overflow-hidden shadow-sm">
                <img
                  src={Image}
                  alt="Trabalho de Alisamento"
                  // h-[70vh] reduz a altura em aprox. 30% em relação ao seu h-[90vh] antigo
                  className="w-full h-[70vh] md:h-[90vh] object-cover"
                />
              </div>
              <p className="text-[10px] tracking-widest text-gray-400 uppercase text-right">
                Editorial Collection 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* REMOVIDO: O div de h-[50vh] que estava empurrando tudo para baixo */}
    </section>
  );
};

export default Hero;
