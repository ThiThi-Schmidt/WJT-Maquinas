"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const list = [
    {name: "Ricardo Almeida", role: "Jardineiro", img: "/images/person_1.jpg", text: "Fui muito bem atendido e encontrei exatamente o que precisava. Produtos de ótima qualidade e um serviço de manutenção rápido e eficiente."},

    {name: "Mariana Costa", role: "Agricultora", img: "/images/person_4.jpg", text: "Comprei equipamentos para facilitar o trabalho na propriedade e fiquei muito satisfeita. Atendimento excelente, produtos de qualidade e entrega dentro do prazo."},

    {name: "Fernanda Oliveira", role: "Empresária", img: "/images/person-1.jpg", text: "No dia a dia dos negócios, contar com fornecedores de confiança faz toda a diferença. Fiquei muito satisfeita com a qualidade dos produtos, a agilidade no atendimento e o compromisso da equipe."}
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
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 border-2 border-orange-500 shrink-0">
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
              className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 px-9 py-3 bg-orange-500 rounded-xl trabsition font-semiboltd hover:bg-[#664533] text-white hover:text-white border border-orange-500 rounded-full flex items-center justify-center shadow-md transition-all duration-200 active:scale-95 sm:flex"
              aria-label="Next testimonial">
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