import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

const imgAbout = new URL("../assets/elaine/DeCostas.jpeg", import.meta.url)
  .href;

const HeroEditorial = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#E8D9C5] py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* IMAGEM */}
        <div className="w-full h-[500px] md:h-[550px] lg:h-[800px] overflow-hidden">
          <img
            src={imgAbout}
            alt={t.about.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXTO */}
        <div className="flex flex-col justify-start">
          {/* CATEGORIA */}
          <span className="text-[11px] tracking-[2px] text-black uppercase mb-4">
            {t.about.category}
          </span>

          {/* TÍTULO */}
          <h1 className="font-serif text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight uppercase mb-6">
            {t.about.title}
          </h1>

          {/* DESCRIÇÃO */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-[400px]">
            {t.about.description}
          </p>

          {/* LINHA + SETA */}
          <Link
            to="/about"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span className="text-[11px] tracking-[2px] text-black uppercase mb-4">
              {t.about.continueReading}
            </span>
            <span className="w-10 h-[1px] bg-black group-hover:w-16 transition-all"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroEditorial;
