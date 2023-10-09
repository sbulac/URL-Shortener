import Layout from "@/components/Layout";
import React from "react";

const linksPage = () => {
  return (
    <div className="w-screen h-screen flex-col flex justify-center items-center">
      <span className="text-3xl text-center lg:text-5xl">
        Esta página aun está en desarrollo
      </span>
      <a
        className="mt-5 px-6 py-2 bg-emerald-800 rounded-full text-[#e5e7eb]"
        href="/"
      >
        Volver
      </a>
    </div>
  );
};

export default linksPage;
