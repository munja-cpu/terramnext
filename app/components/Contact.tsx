"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setStatus("Šalje se...");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 🔥 OVO JE BITNO
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Poruka je poslata ✅");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Greška pri slanju ❌");
    }
  } catch (error) {
    setStatus("Greška ❌");
  }
};

  return (
    <section className="py-16 px-6">
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Kontakt
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Imate pitanje, ideju ili želite terarijum po meri?
          Slobodno nam pišite — odgovaramo brzo.
        </p>
      </section>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6"
      >
        <input
          type="text"
          placeholder="Ime"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
          required
        />

        <textarea
          placeholder="Poruka"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white h-32"
          required
        />

        <button className="w-full bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition">
          Pošalji
        </button>

        {status && (
          <p className="text-center text-gray-400">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}