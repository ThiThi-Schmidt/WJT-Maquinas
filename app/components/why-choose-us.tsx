export default function WhyChooseUs() {
  return (
    <div className="py-20 lg:py-24 bg-black text-[#2f2f2f]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: Lista de Benefícios */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#2f2f2f]">Why Choose Us</h2>
            <p className="text-gray-500 mb-10">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {/* Benefício 1: Envio Rápido */}
              <div>
                <div className="relative inline-block mb-4">
                  <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                  <img src="/images/truck.svg" alt="Fast Shipping" className="h-8 relative z-10" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#2f2f2f]">Fast &amp; Free Shipping</h3>
                <p className="text-gray-500 text-sm">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
              </div>

              {/* Benefício 2: Praticidade na Compra */}
              <div>
                <div className="relative inline-block mb-4">
                  <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                  <img src="/images/bag.svg" alt="Easy Shop" className="h-8 relative z-10" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#2f2f2f]">Easy to Shop</h3>
                <p className="text-gray-500 text-sm">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
              </div>

              {/* Benefício 3: Suporte 24/7 */}
              <div>
                <div className="relative inline-block mb-4">
                  <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                  <img src="/images/support.svg" alt="Support" className="h-8 relative z-10" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#2f2f2f]">24/7 Support</h3>
                <p className="text-gray-500 text-sm">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
              </div>

              {/* Benefício 4: Devolução Descomplicada */}
              <div>
                <div className="relative inline-block mb-4">
                  <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                  <img src="/images/return.svg" alt="Returns" className="h-8 relative z-10" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#2f2f2f]">Hassle Free Returns</h3>
                <p className="text-gray-500 text-sm">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Imagem decorativa de fundo com borda amarela tortinha */}
          <div className="relative">
            {/* O efeito "tortinho" abaixo é proposital do design original (transform -rotate-6) */}
            <div className="absolute top-[-10%] left-[-10%] bg-[#f9bf29] w-3/4 h-3/4 rounded-3xl z-0 transform -rotate-6"></div>
            <img src="/images/why-choose-us-img.jpg" alt="Why Choose Us" className="rounded-3xl relative z-10 w-full object-cover" />
          </div>

        </div>
      </div>
    </div>
  );
}