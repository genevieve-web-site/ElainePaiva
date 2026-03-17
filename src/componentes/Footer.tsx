import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#B09980] border-t border-gray-200 py-8 px-4 md:px-8 mt-10">
      <div className="max-w-[1200px] mx-auto text-center md:text-left">
        {/* CONTEÚDO */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* LOGO / NOME */}
          <h3 className="font-serif text-gray-100 text-sm tracking-wide uppercase">
            Elaine Paiva
          </h3>

          {/* INFORMAÇÕES */}
          <div className="text-gray-200 text-xs leading-relaxed text-center md:text-right">
            <p>Rua das Flores 123, Lisboa, Portugal</p>
            <p>+351 912 345 678</p>
          </div>
        </div>

        {/* LINHA */}
        <div className="mt-6 border-t border-gray-200 pt-4 text-center">
          <p className="text-[10px] text-gray-100 tracking-wide">
            © {new Date().getFullYear()} Genevieve. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
