"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const list = [
    {name: "Mariana Costa", role: "Médica Veterinária", img: "/images/person_1.jpg", text: "Excelente atendimento e produtos de alta qualidade. Meu cachorro apresentou uma melhora significativa na saúde da pelagem após algumas semanas de uso. Recomendo pela confiança e pelo cuidado com os animais."},

    {name: "Ricardo Almeida", role: "Tutor de Pets", img: "/images/person_4.jpg", text: "Encontrei tudo o que precisava para o meu pet em um só lugar. A entrega foi rápida, os produtos chegaram em perfeito estado e o atendimento ao cliente foi muito prestativo."},

    {name: "Fernanda Oliveira", role: "Adestradora Canina", img: "/images/person-1.jpg", text: "Trabalho diariamente com cães e sempre busco produtos de qualidade. A variedade do catálogo e a excelente experiência de compra fazem desta loja uma das minhas principais recomendações."}
  ];

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="comentarios" className="py-16 scroll-mt-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-5 sm:mb-5">Recomendações</h1>
        <div className="relative px-2 sm:px-0">
          <button
            onClick={handlePrev}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 px-9 py-3 bg-orange-500  rounded-xl trabsition font-semiboltd  hover:bg-[#664533] text-white hover:text-white border border-orange-400 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 active:scale-95 sm:flex"
            aria-label="Previous testimonial"
          >
            &#10094;
          </button>
          <div className=" rounded-2xl p-6 sm:p-12 shadow-xl flex flex-col items-center space-y-4 sm:space-y-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 border-2 border-orange-400 shrink-0">
              <Image src={list[active].img} alt={list[active].name} fill className="rounded-full object-cover" />
            </div>
            <p className="text-white italic max-w-2xl text-sm sm:text-base leading-relaxed min-h-30 sm:min-h-auto flex items-center justify-center">
              "{list[active].text}"
            </p>
            <div>
              <h5 className="font-bold text-white text-base sm:text-lg">{list[active].name}</h5>
              <span className="text-xs sm:text-sm text-white font-medium">{list[active].role}</span>
            </div>

            <button
              onClick={handleNext}
              className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 px-9 py-3 bg-orange-500 rounded-xl trabsition font-semiboltd hover:bg-[#664533] text-gray-700 hover:text-white border border-orange-400 rounded-full flex items-center justify-center shadow-md transition-all duration-200 active:scale-95 sm:flex"
              aria-label="Next testimonial"
            >
              &#10095;
            </button>
          </div>
          <div className="flex justify-center gap-3 mt-6">
            {list.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 rounded-xl transition-all duration-300 ${active === index ? "w-3 bg-orange-500" : "w-3 bg-white"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}