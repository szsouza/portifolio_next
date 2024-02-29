import React from "react";
import { Header } from "../Header";
import { HeaderMobile } from "../HeaderMobile";

export default function Menu() {
  return (
    <>
      <div className="md:hidden">
        <HeaderMobile />
      </div>
      <div className="hidden md:flex w-full md:px-20 lg:px-32 fixed top-0 overflow-hidden">
        <Header />
      </div>
    </>
  );
}
