import React from "react";

import image1 from "../assets/servicos/bg-salon.jpg";

import image2 from "../assets/servicos/lavatorio.jpg";

const blogPosts = [
  {
    id: 1,
    category: "Beleza • Tratamentos",
    title:
      "Bioestimuladores de colágeno: benefícios, resultados e quando iniciar o tratamento.",
    image: image1,
    link: "#",
  },
  {
    id: 2,
    category: "Moda • Semana de Moda",
    title: "Look do dia: Ralph Lauren na Semana de Moda de Nova York",
    image: image2,
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#F9F7F4] py-24 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Grid de 2 Colunas */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer flex flex-col">
              {/* Imagem Vertical Estilo Editorial */}
              <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Overlay sutil ao passar o mouse */}
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors duration-500"></div>
              </div>

              {/* Conteúdo do Card */}
              <div className="space-y-4 max-w-xl">
                <span className="text-[10px] tracking-[4px] uppercase font-light text-brand block">
                  {post.category}
                </span>

                <h3 className="text-3xl md:text-4xl font-serif leading-[1.1] text-brand-dark group-hover:text-brand transition-colors duration-300">
                  {post.title}
                </h3>

                <div className="pt-4 overflow-hidden">
                  <a
                    href={post.link}
                    className="inline-block text-[11px] tracking-[3px] uppercase font-medium text-gray-400 group-hover:text-brand-dark transition-all relative"
                  >
                    Ler Artigo
                    <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-brand-dark transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
