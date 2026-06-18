export default function ProductShowcase() {
  // Para economizar espaço visual aqui, coloquei a estrutura que você já tinha.
  // Recomendo no futuro separar também os "Cards" em um componente <ProductCard />
  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* <div className="lg:col-span-3 mb-12 lg:mb-0 pr-4">
            <h2 className="text-3xl font-bold text-black mb-4 leading-tight">Crafted with excellent material.</h2>
            <p className="text-black mb-6 text-sm leading-relaxed">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <p><a href="/shop" className="inline-block bg-[#2f2f2f] text-black font-medium px-7 py-3 rounded-full hover:bg-[#2f2f2f]/90 transition duration-300 text-sm">Explore</a></p>
          </div>  */}

          {/* //////////////////// ARRUMAR OS PRODUTOS */}
            
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Produto 1 */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
              <div className="absolute bottom-0 left-0 w-full bg-orange-300 shadow-lg-600 rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              <a className="block" href="/cart">
                <img src="/images/lavajato-removebg-preview.png" alt="Nordic Chair" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-black font-semibold text-base mb-1">Lavadora de alta pressão <br /> WAP Líder 2200</h3>
                <strong className="text-black font-bold text-lg">R$ 618,99</strong>
              </a>
            </div> 
            {/* Produto 2 */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
              <div className="absolute bottom-0 left-0 w-full bg-orange-300 rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              <a className="block" href="/cart">
                <img src="/images/parafusadeira.png" alt="Kruzo Aero Chair" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-black font-semibold text-base mb-1">Parafusadeira Furadeira de<br /> Impacto Brushless</h3>
                <strong className="text-black font-bold text-lg">R$ 1449,99</strong>
              </a>
            </div>
            {/* Produto 3 */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
              <div className="absolute bottom-0 left-0 w-full bg-orange-300 rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              <a className="block" href="/cart">
                <img src="/images/ferramentas.png" alt="Ergonomic Chair" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-black font-semibold text-base mb-1">Jogo de Ferramentas<br />com 216 Pecas e Maleta</h3>
                <strong className="text-black font-bold text-lg">R$ 1.149,99</strong>
              </a>
            </div>
            {/* Produto 4 */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
              <div className="absolute bottom-0 left-0 w-full bg-orange-300 rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              <a className="block" href="/cart">
                <img src="/images/motoserra.png" alt="Garden Lounge Chair" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-black font-semibold text-base mb-1">Motosserra a Gasolina<br /> 63CC 3HP</h3>
                <strong className="text-black font-bold text-lg">R$ 649,99</strong>
              </a>
            </div>
            {/* Produto 5 */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
              <div className="absolute bottom-0 left-0 w-full bg-orange-300 rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              <a className="block" href="/cart">
                <img src="/images/aparador.png" alt="Industrial Stool" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-black font-semibold text-base mb-1">Aparador de Grama 1500W<br />GARTHEN-GAM1500BP</h3>
                <strong className="text-black font-bold text-lg">R$ 319,99</strong>
              </a>
            </div>
            {/* Produto 6 */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
              <div className="absolute bottom-0 left-0 w-full bg-orange-300 rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              <a className="block" href="/cart">
                <img src="/images/machado.png" alt="Patio Table" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-black font-semibold text-base mb-1">Machadinha com Cabo de Fibra<br />VONDER-3589000600</h3>
                <strong className="text-black font-bold text-lg">R$ 94,29</strong>
              </a>
            </div>
            {/* Produto 7 */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
              <div className="absolute bottom-0 left-0 w-full bg-orange-300 rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              <a className="block" href="/cart">
                <img src="/images/aparador2.png" alt="Work Bench" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-black font-semibold text-base mb-1">Trator Cortador de Grama<br /> BT 1942 a Gasolina </h3>
                <strong className="text-black font-bold text-lg">R$ 26.899,99</strong>
              </a>
            </div>
            {/* Produto 8 */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
              <div className="absolute bottom-0 left-0 w-full bg-orange-300 rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              <a className="block" href="/cart">
                <img src="/images/mesa.png" alt="Outdoor Sofa" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-black font-semibold text-base mb-1">Carro para Ferramentas com 11 Gavetas <br />SATA-ST95114G-B</h3>
                <strong className="text-black font-bold text-lg">R$ 7.399,99</strong>
              </a>
            </div>
            {/* Produto 9 */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10">
              <div className="absolute bottom-0 left-0 w-full bg-orange-300 rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              <a className="block" href="/cart">
                <img src="/images/soprador.png" alt="Tool Cabinet" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-black font-semibold text-base mb-1">Soprador Aspirador 800W 220V<br />DEWALT-DWB800</h3>
                <strong className="text-black font-bold text-lg">R$ 849,99</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}