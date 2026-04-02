// src/componentes/Header.jsx
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, ChevronDown, X } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

const logoNome = new URL("../assets/icones/1.png", import.meta.url).href;
const whatsappLink = "https://wa.me/351914094354";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { currentLang, setCurrentLang, languages, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuItemClick = (itemId: string) => {
    setIsOpen(false);
    if (itemId === "sobre") {
      navigate("/about");
      return;
    }
    if (itemId === "agendamento") {
      window.open(whatsappLink, "_blank");
      return;
    }
    if (location.pathname !== "/") {
      navigate(`/#${itemId}`);
    } else {
      const element = document.getElementById(itemId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 px-4 md:px-10">
        <div className="max-w-[1440px] mx-auto h-24 flex items-center justify-between">
          {/* Lado Esquerdo */}
          <div className="flex items-center gap-8 flex-1">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <Menu
                className="w-6 h-6 text-gray-800 group-hover:text-brand"
                strokeWidth={1.5}
              />
              <span className="hidden sm:inline text-[11px] tracking-[3px] uppercase">
                {t.header.menuButton}
              </span>
            </button>
            <nav className="hidden lg:block">
              <ul className="flex gap-8 text-[13px] tracking-widest uppercase font-light">
                <li>
                  <button
                    onClick={() => handleMenuItemClick("alisamentos")}
                    className="hover:text-brand cursor-pointer"
                  >
                    {t.header.topNavTechniques}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleMenuItemClick("contato")}
                    className="hover:text-brand cursor-pointer"
                  >
                    {t.header.topNavContact}
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Logo Central (SEO: h1 apenas na Home) */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoNome}
                alt="Elaine Paiva"
                className="w-16 h-auto object-contain"
              />
              <div className="hidden md:block">
                <span className="text-2xl font-serif text-brand-dark block leading-none">
                  Elaine
                </span>
                <span className="text-2xl font-serif text-brand-dark block leading-none ml-4">
                  Paiva
                </span>
              </div>
            </Link>
          </div>

          {/* Lado Direito / Seletor */}
          <div className="flex items-center justify-end gap-5 flex-1">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-[11px] tracking-[2px] uppercase cursor-pointer"
              >
                <span className="text-lg">
                  {languages.find((l) => l.code === currentLang)?.flag}
                </span>
                {currentLang} <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-4 w-40 bg-white shadow-xl z-[60] border border-gray-100">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangOpen(false);
                      }}
                      className="px-4 py-3 text-[10px] hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                    >
                      <span>{lang.flag}</span> {lang.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-60">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          <aside className="fixed left-0 top-0 h-full w-72 bg-white shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">
                {t?.header.drawerTitle || "Menu"}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu"
                className="p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav>
              <ul className="flex flex-col gap-4">
                {t?.header?.menuItems?.map((item: any) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuItemClick(item.id)}
                      className="text-base uppercase tracking-widest font-medium"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};
export default Header;
