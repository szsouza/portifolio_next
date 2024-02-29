"use client";
import { useState } from "react";
import { MenuAlt1Icon, XIcon } from "../icons"; // Importe os ícones do Heroicons UI

export const HeaderMobile = () => {
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar se o menu está aberto ou fechado

  return (
    <>
      <div className="flex p-6 items-center justify-end">
        {/* Condicionalmente renderiza o ícone do menu apenas se a largura da tela for menor que 700px */}
        <div className="block">
          <div
            className="w-9 h-9 cursor-pointer"
            onClick={() => setIsVisible(!isVisible)}
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isVisible ? "transform rotate-180" : ""
              }`}
            >
              <MenuAlt1Icon className={`${isVisible ? "hidden" : ""}`} />
              <XIcon className={`${isVisible ? "" : "hidden"}`} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end w-100">
        <div
          className={`bg-slate-600 h-full max-w-80 fixed transition-all duration-300 ease-in-out ${
            isVisible ? "w-72" : "w-0"
          }`}
        ></div>
      </div>
    </>
  );
};
