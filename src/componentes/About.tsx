import React from "react";

import IMGAbout from "../assets/elaine/frenteElaine.jpg";

const HeroEditorial = () => {
  return (
    <section className="bg-[#E8D9C5] py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* IMAGEM */}
        <div className="w-full h-[500px] md:h-[550px] lg:h-[800px] overflow-hidden">
          <img
            src={IMGAbout}
            alt="Look verão"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          {/* CATEGORIA */}
          <span className="text-[11px] tracking-[2px] text-black uppercase mb-4">
            sobre Elaine
          </span>

          {/* TÍTULO */}
          <h1 className="font-serif text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight uppercase mb-6">
            A ESPECIALISTA POR TRÁS DOS LISOS PERFEITOS
          </h1>

          {/* DESCRIÇÃO */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-[400px]">
            Com anos de experiência no universo da beleza, Elaine Paiva se
            tornou referência em alisamentos que unem resultado e saúde capilar.
            À frente do Dlux Salão, ela desenvolveu um método focado em...
          </p>

          {/* LINHA + SETA */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <span className="text-[11px] tracking-[2px] text-black uppercase mb-4">
              Continuar lendo
            </span>
            <span className="w-10 h-[1px] bg-black group-hover:w-16 transition-all"></span>
            <span className="text-black text-sm group-hover:translate-x-1 transition-all">
              →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEditorial;
