export default function Testimonials() {
  return (
  <div>
    <div className="py-20 lg:py-24 bg-white text-[#2f2f2f]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#2f2f2f]">Por que nos escolher</h2>
            <p className="text-gray-500 mb-10">
              Há 15 anos, combinamos qualidade e experiência no comércio e manutenção de máquinas para jardinagem e construção civil. Oferecemos tudo o que o seu projeto precisa, com o suporte de uma manutenção especializada de total confiança. Escolha a eficiência e a parceria que o seu trabalho merece!
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="relative inline-block mb-4">
                  <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                  <img src="/images/truck.svg" alt="Fast Shipping" className="h-8 relative z-10" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#2f2f2f]">Envio &amp;  rápido</h3>
                <p className="text-gray-500 text-sm">
                  Entregamos suas máquinas e peças com total agilidade e segurança para que o seu trabalho nunca pare.
                </p>
              </div>
              <div>
                <div className="relative inline-block mb-4">
                  <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                  <img src="/images/bag.svg" alt="Easy Shop" className="h-8 relative z-10" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#2f2f2f]">Loja Confiavel</h3>
                <p className="text-gray-500 text-sm">
                  Nossa loja e site contam com sistemas seguros, para proteger seus dados e sendo transparente e com a credibilidade de quem é especialista no mercado.
                </p>
              </div>
              <div>
                <div className="relative inline-block mb-4">
                  <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                  <img src="/images/support.svg" alt="Support" className="h-8 relative z-10" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#2f2f2f]">Suporte 24 horas por dia, 7 dias por semana</h3>
                <p className="text-gray-500 text-sm">
                  Suporte técnico especializado disponível 24h por dia, 7 dias por semana. Estamos sempre prontos para resolver qualquer imprevisto que ocorrer.
                </p>
              </div>
              <div>
                <div className="relative inline-block mb-4">
                  <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                  <img src="/images/return.svg" alt="Returns" className="h-8 relative z-10" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#2f2f2f]">Devoluções sem complicações</h3>
                <p className="text-gray-500 text-sm">
                  Processo simples e sem burocracia para você trocar ou devolver qualquer produto, com estorno garantido e agilidade no atendimento.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-[-10%] left-[-10%] bg-[#ff7b00] w-3/4 h-3/4 rounded-3xl z-0 transform -rotate-6"></div>
            <img src="/images/why-choose-us-img.jpg" alt="Why Choose Us" className="rounded-3xl relative z-10 w-150 object-cover" />
          </div>
        </div>
      </div>
    </div>
    <div className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-16 text-black">Recomendações</h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-lg lg:text-xl text-gray-600 italic leading-relaxed mb-8">
            &ldquo;Excelente empresa! Seja para comprar equipamento novo ou consertar os meus antigos, eles sempre entregam um resultado perfeito e sem enrolação. Ganharam um cliente fiel.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/person-1.png" alt="Maria Jones" className="w-20 h-20 rounded-full mb-4 object-cover" />
            <h3 className="font-bold text-gray-900">Vânia</h3>
            <span className="text-sm text-gray-500">Jardineira</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}