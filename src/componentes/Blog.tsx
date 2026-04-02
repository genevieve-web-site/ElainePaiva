import React, { useRef } from "react";
import { useLanguage } from "../context/useLanguage";
const image1 = new URL("../assets/servicos/bg-salon.jpg", import.meta.url).href;
const image2 = new URL("../assets/elaine/Elaine_premio.jpg", import.meta.url)
  .href;
const image3 = new URL("../assets/elaine/PerfilFrente.jpeg", import.meta.url)
  .href;
const image4 = new URL("../assets/elaine/Com_Secador.jpeg", import.meta.url)
  .href;
const image5 = new URL(
  "../assets/elaine/Perfil_Elaine_olhar.jpg",
  import.meta.url,
).href;

const blogPosts = [
  {
    id: 1,
    image: image3,
    link: "https://brazilpost.online/geral/elaine-paiva-a-brasileira-que-redefine-a-beleza-capilar-na-europa/",
  },
  {
    id: 2,
    image: image2,
    link: "https://www.jornaldarepublicaonline.com.br/noticia/especialista-em-alisamentos-elaine-paiva-vence-premio-com-mais-de-40-dos-votos",
  },
  {
    id: 3,
    image: image4,
    link: "https://www.gazetadetodosesportes.com/noticia/especialista-em-alisamentos-elaine-paiva-conquista-a-europa-com-tecnica-exclusiva",
  },
  {
    id: 4,
    image: image5,
    link: "https://www.jornaldaregiao.com/noticias/beleza/elaine-paiva-o-segredo-do-liso-espelhado-que-conquistou-a-europa",
  },
  {
    id: 5,
    image: image1,
    link: "https://www.instagram.com/elainepaiva_hairbeauty/",
  },
];

const BlogSection = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const scroll = (direction: "left" | "right") => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F9F7F4] py-20 px-4 md:px-10 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-10 border-b border-[#eee] pb-4">
          <h2 className="text-3xl font-serif text-brand-dark uppercase">
            Blog
          </h2>
          <div className="flex gap-4">
            <button onClick={() => scroll("left")} className="cursor-pointer">
              ←
            </button>
            <button onClick={() => scroll("right")} className="cursor-pointer">
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden snap-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onWheel={(e) => {
            // bloqueia rolagem horizontal via roda/trackpad, permite vertical
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          onTouchStart={(e) => {
            const t = e.touches[0];
            touchStartRef.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchMove={(e) => {
            if (!touchStartRef.current) return;
            const t = e.touches[0];
            const dx = t.clientX - touchStartRef.current.x;
            const dy = t.clientY - touchStartRef.current.y;
            // se o gesto for mais horizontal que vertical, previne
            if (Math.abs(dx) > Math.abs(dy)) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        >
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="min-w-[85%] md:min-w-[45%] snap-start group"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={t.blog.posts[index]?.title || "Post"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-[10px] tracking-[4px] uppercase text-brand block mb-2">
                {t.blog.posts[index]?.category}
              </span>
              <h3 className="text-2xl font-serif text-brand-dark mb-4">
                {t.blog.posts[index]?.title}
              </h3>
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] tracking-[3px] uppercase border-b border-black pb-1 hover:text-brand"
              >
                {t.blog.readArticle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
