import { useState } from "react";
import { Menu, ChevronDown, X, Instagram, MessageCircle } from "lucide-react";

// Constantes que não mudam podem ficar fora (boa prática)
const languages = [
  { code: "EN", label: "English", flag: "🇺🇸" },
  { code: "PT-PT", label: "Português (PT)", flag: "🇵🇹" },
  { code: "PT-BR", label: "Português (BR)", flag: "🇧🇷" },
  { code: "ES", label: "Español", flag: "🇪🇸" },
];

const menuItems = ["Sobre", "Alisamentos", "Serviços", "Agendamento"];

const Header = () => {
  // TODOS os hooks devem ficar aqui dentro, no início da função
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("PT-BR");

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 px-4 md:px-10">
        <div className="max-w-[1440px] mx-auto h-24 flex items-center justify-between">
          {/* Esquerda: Menu */}
          <div className="flex items-center gap-8 flex-1">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 group cursor-pointer border-none bg-transparent"
            >
              <Menu
                className="w-6 h-6 text-gray-800 group-hover:text-brand transition-colors"
                strokeWidth={1.5}
              />
              <span className="hidden sm:inline text-[11px] tracking-[3px] uppercase font-light">
                Menu
              </span>
            </button>

            <nav className="hidden lg:block">
              <ul className="flex gap-8 text-[13px] tracking-widest uppercase font-light text-gray-700">
                <li className="hover:text-brand cursor-pointer transition-colors">
                  Técnicas
                </li>
                <li className="hover:text-brand cursor-pointer transition-colors">
                  Contato
                </li>
              </ul>
            </nav>
          </div>

          {/* Centro: Logo */}
          <div className="flex-1 flex justify-center">
            <div className="text-center leading-none">
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-brand-dark leading-none">
                Elaine
              </h1>
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-brand-dark leading-none ml-6">
                Paiva
              </h1>
            </div>
          </div>

          {/* Direita: Redes + Idioma */}
          <div className="flex items-center justify-end gap-2 md:gap-5 flex-1">
            <a
              href="#"
              className="hidden md:inline-flex text-gray-800 hover:text-brand transition-colors"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="hidden md:inline-flex text-gray-800 hover:text-brand transition-colors"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
            </a>

            {/* Seletor de Idioma */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-[11px] tracking-[2px] uppercase font-light text-gray-700 cursor-pointer ml-2 hover:text-brand transition-colors outline-none bg-transparent border-none"
              >
                {/* Aqui pegamos a flag do idioma atual */}
                <span className="text-base">
                  {languages.find((l) => l.code === currentLang)?.flag}
                </span>
                {currentLang}
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                />
              </button>
              {langOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLangOpen(false)}
                  ></div>
                  <ul className="absolute right-0 mt-4 w-40 bg-white border border-gray-100 shadow-xl z-20">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangOpen(false);
                        }}
                        className="px-4 py-3 text-[10px] tracking-widest uppercase text-gray-600 hover:bg-brand-light/20 hover:text-brand cursor-pointer transition-colors border-b border-gray-50 last:border-none flex items-center gap-3"
                      >
                        <span className="text-base">{lang.flag}</span>
                        {lang.label}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Menu Lateral (Drawer) */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 w-full sm:w-80 h-full bg-white shadow-2xl transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-16">
              <span className="text-[11px] tracking-[4px] uppercase font-light text-gray-400">
                Navegação
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                <X className="w-6 h-6 text-gray-800" strokeWidth={1} />
              </button>
            </div>

            <ul className="flex flex-col gap-8">
              {menuItems.map((item, index) => (
                <li key={item} className="group overflow-hidden">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-3xl font-serif text-brand-dark hover:text-brand transition-colors flex items-center gap-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[10px] font-sans font-light text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                      0{index + 1}
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-6 md:hidden">
              <a
                href="#"
                className="text-gray-800 hover:text-brand transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-brand transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
