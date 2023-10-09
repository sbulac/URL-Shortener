"use client";

import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef();
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = inputRef.current.value;
    fetch("/api/shortUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((data) => setShortUrl(data.shortUrl));
  };
  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="w-5/6 flex flex-col justify-center items-center"
      >
        <input
          type="text"
          ref={inputRef}
          placeholder="Escribe el link"
          className="pl-5 px-1 py-2 rounded-xl placeholder:text-[#e5e7eb] text-[#e5e7eb] outline-none w-full sm:w-2/3 lg:w-2/4 bg-slate-950"
        />
        <button
          type="submit"
          className="mt-5 px-8 py-3 bg-emerald-800 rounded-full text-[#e5e7eb]"
        >
          Acortar
        </button>
      </form>
      <a target="_blank" href={`/${shortUrl}`}>{shortUrl ? `localhost:3000/${shortUrl}` : ''}</a>
    </Layout>
  );
}
