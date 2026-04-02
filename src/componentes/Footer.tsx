import React from "react";
import { useLanguage } from "../context/useLanguage";

const logo1 = new URL("../assets/icones/4.png", import.meta.url).href;
const logo2 = new URL("../assets/icones/3.png", import.meta.url).href;

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer
      id="contato"
      className=" bg-[#B09980] border-t border-gray-200 py-8 px-4 md:px-8 mt-10"
    >
      <div className="max-w-[1200px] mx-auto text-center md:text-left">
        {/* CONTEÚDO */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-0">
          {/* LOGO / NOME */}
          <div className="flex items-center gap-4">
            <img
              src={logo1}
              alt="Logo 1"
              className="w-16 h-16 object-contain"
            />
            <img
              src={logo2}
              alt="Logo 2"
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* INFORMAÇÕES */}
          <div className="text-gray-200 text-xs leading-relaxed text-center md:text-right">
            <p>{t.footer.address}</p>
            <p>{t.footer.phone}</p>
          </div>
        </div>

        {/* LINHA */}
        <div className="mt-6 border-t border-gray-200 pt-4 text-center">
          <p className="text-[10px] text-gray-100 tracking-wide">
            © {new Date().getFullYear()} {t.footer.rightsOwner}.{" "}
            {t.footer.rightsText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
