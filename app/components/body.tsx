export default function Body() {                    
  return (
    <main>
    <div className="text-white py-16 lg:py-24 relative" style={{ backgroundImage: "url('/images/hero.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    

        {/* Camada de preto transparente (Overlay) para dar contraste e leitura ao texto */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LADO ESQUERDO: Textos principais e Botões de Ação */}
            <div className="lg:col-span-5 z-10 text-center lg:text-left">
              {/* Título Principal (Nome da Empresa) */}
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-white">
                WJT <span className="block text-white/90 font-normal">Comércio e manutenção de máquinas</span>
              </h1>
               
              {/* Subtítulos / Especialidades da Empresa */}
              <div className="text-white/70 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed space-y-2">
                <p>Tudo em Jardinagem & Construção Civil</p>
                <p>Manutenção Especializada</p>
                <p>Qualidade e experiência há 15 anos</p>
              </div>

              {/* Botões de Chamada para Ação (CTA) */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="/shop" className="bg-[#f9bf29] text-[#2f2f2f] font-semibold px-8 py-3.5 rounded-full hover:bg-[#f9bf29]/90 transition duration-300 shadow-lg">Compre agora</a>
                <a href="#" className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition duration-300">explore mais</a>
              </div>
            </div>

            {/* LADO DIREITO: Imagem de destaque do Banner (Atualmente a foto do sofá/couch) */}
            <div className="lg:col-span-7 relative mt-8 lg:mt-0">
              <div className="relative lg:-right-16 xl:-right-24">
               
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. SEÇÃO DE PRODUTOS (VITRINE) - Ajustada para alinhamento perfeito */}
      <div className="py-20 lg:py-32 bg-[#eff2f1]">
        <div className="container mx-auto px-4">
          {/* Dividimos a tela em 12 partes: 3 partes para o texto e 9 partes para os produtos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* COLUNA DA ESQUERDA (Texto Institucional) - Ocupa 3/12 do espaço no computador */}
            <div className="lg:col-span-3 mb-12 lg:mb-0 pr-4">
              <h2 className="text-3xl font-bold text-[#2f2f2f] mb-4 leading-tight">Crafted with excellent material.</h2>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <p><a href="/shop" className="inline-block bg-[#2f2f2f] text-white font-medium px-7 py-3 rounded-full hover:bg-[#2f2f2f]/90 transition duration-300 text-sm">Explore</a></p>
            </div> 

            {/* COLUNA DA DIREITA (Grade Exclusiva de Produtos) - Ocupa 9/12 do espaço e organiza os itens sempre de 3 em 3 */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* CARD DO PRODUTO 1 */}
              <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
                <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
                <a className="block" href="/cart">
                  <img src="/images/product-1.png" alt="Nordic Chair" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                  <h3 className="text-gray-900 font-semibold text-base mb-1">Nordic Chair</h3>
                  <strong className="text-gray-900 font-bold text-lg">$50.00</strong>
                </a>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </span>
              </div> 

              {/* CARD DO PRODUTO 2 */}
              <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
                <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
                <a className="block" href="/cart">
                  <img src="/images/product-2.png" alt="Kruzo Aero Chair" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                  <h3 className="text-gray-900 font-semibold text-base mb-1">Kruzo Aero Chair</h3>
                  <strong className="text-gray-900 font-bold text-lg">$78.00</strong>
                </a>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </span>
              </div>

              {/* CARD DO PRODUTO 3 */}
              <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
                <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
                <a className="block" href="/cart">
                  <img src="/images/product-3.png" alt="Ergonomic Chair" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                  <h3 className="text-gray-900 font-semibold text-base mb-1">Ergonomic Chair</h3>
                  <strong className="text-gray-900 font-bold text-lg">$43.00</strong>
                </a>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </span>
              </div>

              {/* CARD DO PRODUTO 4 */}
              <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
                <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
                <a className="block" href="/cart">
                  <img src="/images/product-4.png" alt="Garden Lounge Chair" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                  <h3 className="text-gray-900 font-semibold text-base mb-1">Garden Lounge Chair</h3>
                  <strong className="text-gray-900 font-bold text-lg">$85.00</strong>
                </a>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </span>
              </div>

              {/* CARD DO PRODUTO 5 */}
              <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
                <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
                <a className="block" href="/cart">
                  <img src="/images/product-5.png" alt="Industrial Stool" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                  <h3 className="text-gray-900 font-semibold text-base mb-1">Industrial Stool</h3>
                  <strong className="text-gray-900 font-bold text-lg">$45.00</strong>
                </a>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </span>
              </div>

              {/* CARD DO PRODUTO 6 */}
              <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
                <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
                <a className="block" href="/cart">
                  <img src="/images/product-6.png" alt="Patio Table" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                  <h3 className="text-gray-900 font-semibold text-base mb-1">Patio Table</h3>
                  <strong className="text-gray-900 font-bold text-lg">$120.00</strong>
                </a>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </span>
              </div>

              {/* CARD DO PRODUTO 7 */}
              <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
                <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
                <a className="block" href="/cart">
                  <img src="/images/product-7.png" alt="Work Bench" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                  <h3 className="text-gray-900 font-semibold text-base mb-1">Work Bench</h3>
                  <strong className="text-gray-900 font-bold text-lg">$199.00</strong>
                </a>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </span>
              </div>

              {/* CARD DO PRODUTO 8 */}
              <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
                <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
                <a className="block" href="/cart">
                  <img src="/images/product-8.png" alt="Outdoor Sofa" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                  <h3 className="text-gray-900 font-semibold text-base mb-1">Outdoor Sofa</h3>
                  <strong className="text-gray-900 font-bold text-lg">$250.00</strong>
                </a>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </span>
              </div>

              {/* CARD DO PRODUTO 9 */}
              <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
                <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
                <a className="block" href="/cart">
                  <img src="/images/product-9.png" alt="Tool Cabinet" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                  <h3 className="text-gray-900 font-semibold text-base mb-1">Tool Cabinet</h3>
                  <strong className="text-gray-900 font-bold text-lg">$175.00</strong>
                </a>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </span>
              </div>

            </div>
            
          </div>
        </div>
      </div>

      {/* 3. SEÇÃO "POR QUE NOS ESCOLHER" - Diferenciais da loja divididos em 4 blocos com ícones */}
      <div className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LADO ESQUERDO: Lista de Benefícios */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-gray-500 mb-10">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              
              <div className="grid grid-cols-2 gap-8">
                {/* Benefício 1: Envio Rápido */}
                <div>
                  <div className="relative inline-block mb-4">
                    <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                    <img src="/images/truck.svg" alt="Fast Shipping" className="h-8 relative z-10" />
                  </div>
                  <h3 className="text-sm font-bold mb-2">Fast &amp; Free Shipping</h3>
                  <p className="text-gray-500 text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>

                {/* Benefício 2: Praticidade na Compra */}
                <div>
                  <div className="relative inline-block mb-4">
                    <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                    <img src="/images/bag.svg" alt="Easy Shop" className="h-8 relative z-10" />
                  </div>
                  <h3 className="text-sm font-bold mb-2">Easy to Shop</h3>
                  <p className="text-gray-500 text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>

                {/* Benefício 3: Suporte 24/7 */}
                <div>
                  <div className="relative inline-block mb-4">
                    <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                    <img src="/images/support.svg" alt="Support" className="h-8 relative z-10" />
                  </div>
                  <h3 className="text-sm font-bold mb-2">24/7 Support</h3>
                  <p className="text-gray-500 text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>

                {/* Benefício 4: Devolução Descomplicada */}
                <div>
                  <div className="relative inline-block mb-4">
                    <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                    <img src="/images/return.svg" alt="Returns" className="h-8 relative z-10" />
                  </div>
                  <h3 className="text-sm font-bold mb-2">Hassle Free Returns</h3>
                  <p className="text-gray-500 text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
              </div>
            </div>

            {/* LADO DIREITO: Imagem decorativa de fundo com borda amarela tortinha */}
            <div className="relative">
              <div className="absolute top-[-10%] left-[-10%] bg-[#f9bf29] w-3/4 h-3/4 rounded-3xl z-0 transform -rotate-6"></div>
              <img src="/images/why-choose-us-img.jpg" alt="Why Choose Us" className="rounded-3xl relative z-10 w-full object-cover" />
            </div>

          </div>
        </div>
      </div>

      {/* 4. SEÇÃO "NÓS AJUDAMOS" - Apresentação institucional com mosaico de fotos e tópicos de vantagens */}
      <div className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* LADO ESQUERDO: Mosaico Assimétrico com 3 Imagens */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
              <div className="grid gap-4">
                <img src="/images/img-grid-1.jpg" alt="Interior 1" className="rounded-3xl w-full h-full object-cover" />
              </div>
              <div className="grid gap-4 mt-8">
                <img src="/images/img-grid-2.jpg" alt="Interior 2" className="rounded-3xl w-full h-full object-cover" />
                <img src="/images/img-grid-3.jpg" alt="Interior 3" className="rounded-3xl w-full h-full object-cover" />
              </div>
            </div>

            {/* LADO DIREITO: Texto de Ajuda Institucional e Tópicos com Checkmarks Verdes */}
            <div className="lg:col-span-5 lg:pl-10">
              <h2 className="text-3xl font-bold mb-6">We Help You Make Modern Interior Design</h2>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
              
              {/* Grade de 2 colunas para os tópicos */}
              <ul className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm text-gray-600">
                <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#3b5d50] border-2 border-[#3b5d50] mt-1 mr-3 flex-shrink-0"></span> Donec vitae odio quis nisl dapibus</li>
                <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#3b5d50] border-2 border-[#3b5d50] mt-1 mr-3 flex-shrink-0"></span> Donec vitae odio quis nisl dapibus</li>
                <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#3b5d50] border-2 border-[#3b5d50] mt-1 mr-3 flex-shrink-0"></span> Donec vitae odio quis nisl dapibus</li>
                <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#3b5d50] border-2 border-[#3b5d50] mt-1 mr-3 flex-shrink-0"></span> Donec vitae odio quis nisl dapibus</li>
              </ul>
              <p><a href="#" className="inline-block bg-[#2f2f2f] text-white font-medium px-7 py-3 rounded-full hover:bg-[#2f2f2f]/90 transition duration-300 text-sm">Explore</a></p>
            </div>

          </div>
        </div>
      </div>

      {/* 5. SEÇÃO DE PRODUTOS POPULARES - Exibição menor em formato de lista horizontal de 3 itens */}
      <div className="py-20 lg:py-24 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Item Miniatura 1 */}
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-[#eff2f1] rounded-2xl flex items-center justify-center flex-shrink-0">
                <img src="/images/product-1.png" alt="Product" className="w-16 h-auto" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Nordic Chair</h3>
                <p className="text-sm text-gray-500 mb-2 line-clamp-2">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.</p>
                <a href="#" className="text-sm font-semibold text-gray-900 hover:text-gray-600">Read More</a>
              </div>
            </div>

            {/* Item Miniatura 2 */}
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-[#eff2f1] rounded-2xl flex items-center justify-center flex-shrink-0">
                <img src="/images/product-2.png" alt="Product" className="w-16 h-auto" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Kruzo Aero Chair</h3>
                <p className="text-sm text-gray-500 mb-2 line-clamp-2">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.</p>
                <a href="#" className="text-sm font-semibold text-gray-900 hover:text-gray-600">Read More</a>
              </div>
            </div>

            {/* Item Miniatura 3 */}
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-[#eff2f1] rounded-2xl flex items-center justify-center flex-shrink-0">
                <img src="/images/product-3.png" alt="Product" className="w-16 h-auto" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Ergonomic Chair</h3>
                <p className="text-sm text-gray-500 mb-2 line-clamp-2">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.</p>
                <a href="#" className="text-sm font-semibold text-gray-900 hover:text-gray-600">Read More</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 6. SEÇÃO DE TESTEMUNHOS (DEPOIMENTOS) - Avaliações de clientes centralizadas com foto de perfil */}
      <div className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">Testimonials</h2>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg lg:text-xl text-gray-600 italic leading-relaxed mb-8">
              &ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;
            </blockquote>
            <div className="flex flex-col items-center justify-center">
              <img src="/images/person-1.png" alt="Maria Jones" className="w-20 h-20 rounded-full mb-4 object-cover" />
              <h3 className="font-bold text-gray-900">Maria Jones</h3>
              <span className="text-sm text-gray-500">CEO, Co-Founder, XYZ Inc.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 7. SEÇÃO DO BLOG (POSTS RECENTES) - Grade contendo os 3 últimos artigos publicados */}
      <div className="py-20 lg:py-24 bg-[#eff2f1]">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Recent Blog</h2>
            <a href="#" className="text-sm font-semibold border-b-2 border-gray-300 hover:border-gray-900 transition pb-1">View All Posts</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Artigo 1 */}
            <div>
              <a href="#" className="block mb-4 overflow-hidden rounded-2xl">
                <img src="/images/post-1.jpg" alt="Post" className="w-full h-auto object-cover hover:scale-105 transition duration-300" />
              </a>
              <div>
                <h3 className="text-lg font-semibold mb-2"><a href="#">First Time Home Owner Ideas</a></h3>
                <div className="text-sm text-gray-500">
                  <span>by <a href="#" className="font-medium text-gray-900">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                </div>
              </div>
            </div>

            {/* Artigo 2 */}
            <div>
              <a href="#" className="block mb-4 overflow-hidden rounded-2xl">
                <img src="/images/post-2.jpg" alt="Post" className="w-full h-auto object-cover hover:scale-105 transition duration-300" />
              </a>
              <div>
                <h3 className="text-lg font-semibold mb-2"><a href="#">How To Keep Your Furniture Clean</a></h3>
                <div className="text-sm text-gray-500">
                  <span>by <a href="#" className="font-medium text-gray-900">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                </div>
              </div>
            </div>

            {/* Artigo 3 */}
            <div>
              <a href="#" className="block mb-4 overflow-hidden rounded-2xl">
                <img src="/images/post-3.jpg" alt="Post" className="w-full h-auto object-cover hover:scale-105 transition duration-300" />
              </a>
              <div>
                <h3 className="text-lg font-semibold mb-2"><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                <div className="text-sm text-gray-500">
                  <span>by <a href="#" className="font-medium text-gray-900">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}