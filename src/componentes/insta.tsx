import React from "react";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";

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
  return (
    <section className="bg-[#f5f5f5] py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl md:text-2xl font-serif text-red-400">
            Instagram
          </h2>

          <span className="text-xs tracking-[2px] uppercase text-red-400 cursor-pointer flex items-center gap-2 group">
            Ver todos os vídeos
            <span className="w-8 h-[1px] bg-red-400 group-hover:w-12 transition-all"></span>
          </span>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              {/* VÍDEO */}
              <div className="relative overflow-hidden">
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[300px] object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* OVERLAY ESCURO (efeito premium) */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
              </div>

              {/* TAG */}
              <div className="flex items-center gap-2 mt-4 mb-2">
                <span className="w-3 h-3 border border-red-400 rounded-full flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                </span>

                <span className="text-[10px] tracking-[2px] uppercase text-red-400">
                  Vídeo
                </span>
              </div>

              {/* TÍTULO */}
              <h3 className="font-serif text-gray-900 text-lg leading-snug uppercase">
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
