import React from "react";
import { Instagram } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

const video1 = new URL("../assets/videos/video1.mp4", import.meta.url).href;
const video2 = new URL("../assets/videos/video2.mp4", import.meta.url).href;
const video3 = new URL("../assets/videos/video3.mp4", import.meta.url).href;

const videos = [
  {
    id: 1,
    title: "EPISÓDIO 12: TOUR PELO QUARTO DO BEBÊ COELHO",
    src: video1,
  },
  {
    id: 2,
    title: "EPISÓDIO 11: MÃES QUE INSPIRAM",
    src: video2,
  },
  {
    id: 3,
    title: "EPISÓDIO 10: FALANDO SOBRE O PASSADO, O PRESENTE E O FUTURO.",
    src: video3,
  },
];

const InstaSection = () => {
  const { t } = useLanguage();
  const instagramLink = "https://www.instagram.com/elainepaiva_hairbeauty/";

  return (
    <section className="bg-[#f5f5f5] py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xl md:text-2xl font-serif text-[#a69176]"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
            <span>{t.insta.title}</span>
          </a>

          <span className="text-xs tracking-[2px] uppercase text-[#a69176] cursor-pointer flex items-center gap-2 group">
            {t.insta.viewAllVideos}
            <span className="w-8 h-[1px] bg-[#a69176] group-hover:w-12 transition-all"></span>
          </span>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={video.id} className="group cursor-pointer">
              {/* VÍDEO */}
              <div className="relative overflow-hidden">
                <video
                  src={video.src}
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
                  className="w-full h-[300px] object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* OVERLAY ESCURO (efeito premium) */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
              </div>

              {/* TAG */}
              <div className="flex items-center gap-2 mt-4 mb-2">
                <span className="w-3 h-3 border border-[#a69176] rounded-full flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-[#a69176] rounded-full"></span>
                </span>

                <span className="text-[10px] tracking-[2px] uppercase text-[#a69176]">
                  {t.insta.videoTag}
                </span>
              </div>

              {/* TÍTULO */}
              <h3 className="font-serif text-[#a69176] text-lg leading-snug uppercase">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaSection;
