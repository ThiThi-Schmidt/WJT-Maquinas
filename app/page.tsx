export default function Home() {
  return (
    <div className="bg-[#eff2f1] text-[#2f2f2f] font-sans antialiased min-h-screen overflow-hidden">

      {/* Start Header/Navigation */}
    <nav 
  className="py-6 text-white sticky top-0 z-50 shadow-md"
  style={{
    // 1. Cor base azul escura do panfleto
    backgroundColor: '#162e56',
    // 2. O gradiente radial (efeito de luz no meio) + a malha de grade em SVG
    backgroundImage: `
      radial-gradient(circle, rgba(27, 60, 115, 0.8) 0%, rgba(10, 20, 38, 0.95) 100%),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M0 0l12 12M12 0L0 12' stroke='%23000' stroke-width='1.2' opacity='0.4'/%3E%3C/svg%3E")
    `,
    // 3. Mistura a textura com a cor de fundo para dar o efeito fosco/realista
    backgroundBlendMode: 'overlay'
  }}
>
  {/* O restante do seu código interno da nav continua exatamente igual aqui dentro */}

        <div className="container mx-auto px-4 flex justify-between items-center">
            
          {/* Logo */}
          <a className="text-3xl font-bold tracking-tight" href="/">
            Furni<span className="text-[#f9bf29]">.</span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 text-sm font-medium text-white/70">
              <li className="text-white border-b-2 border-[#f9bf29] pb-1"><a href="/">Início</a></li>
              <li className="hover:text-white transition duration-200"><a href="/shop">Loja</a></li>
              <li className="hover:text-white transition duration-200"><a href="/about">Sobre nós</a></li>
              <li className="hover:text-white transition duration-200"><a href="/services">Serviços</a></li>
              <li className="hover:text-white transition duration-200"><a href="/blog">Clientes</a></li>
              <li className="hover:text-white transition duration-200"><a href="/contact">Contato</a></li>
            </ul>
          </div>

          {/* User & Cart Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:opacity-80 transition"><img src="/images/user.svg" alt="User" /></a>
            <a href="/cart" className="hover:opacity-80 transition"><img src="/images/cart.svg" alt="Cart" /></a>
          </div>

        </div>
      </nav>
      {/* End Header/Navigation */}

      {/* Start Hero Section */}
      <div className="bg-[#3b5d50] text-white py-16 lg:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
            {/* Conteúdo de Texto */}
            <div className="lg:col-span-5 z-10 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                WJT <span className="block text-white/90 font-normal">Comércio e manutenção de máquinas</span>
              </h1>
              <p className="text-white/70 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Tudo em Jardinagem & Construção Civil
                <p>
                Manutenção Especializada
                </p>
                 <p>
                 Qualidade e experiência há 15 anos
                 </p>
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="/shop" className="bg-[#f9bf29] text-[#2f2f2f] font-semibold px-8 py-3.5 rounded-full hover:bg-[#f9bf29]/90 transition duration-300 shadow-lg">
                  Compre agora
                </a>
                <a href="#" className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition duration-300">
                  explore mais
                </a>
              </div>
            </div>

            {/* Imagem do Sofá */}
            <div className="lg:col-span-7 relative mt-8 lg:mt-0">
              <div className="relative lg:-right-16 xl:-right-24">
                <img src="/images/couch.png" alt="Couch" className="w-full h-auto max-w-2xl mx-auto" />
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* End Hero Section */}

      {/* Start Product Section */}
      <div className="py-20 lg:py-32 bg-[#eff2f1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Coluna 1: Texto de Introdução */}
            <div className="mb-8 lg:mb-0 pr-4">
              <h2 className="text-3xl font-bold text-[#2f2f2f] mb-4 leading-tight">Crafted with excellent material.</h2>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <p><a href="/shop" className="inline-block bg-[#2f2f2f] text-white font-medium px-7 py-3 rounded-full hover:bg-[#2f2f2f]/90 transition duration-300 text-sm">Explore</a></p>
            </div> 

            {/* Coluna 2: Produto 1 com Efeito Hover Completo */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10 mb-8 lg:mb-0">
              {/* Efeito do Fundo Verde subindo */}
              <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              
              <a className="block" href="/cart">
                <img src="/images/product-1.png" alt="Nordic Chair" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-gray-900 font-semibold text-base mb-1">Nordic Chair</h3>
                <strong className="text-gray-900 font-bold text-lg">$50.00</strong>
              </a>

              {/* Botão de Adicionar (Aparece no Hover) */}
              <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </span>
            </div> 

            {/* Coluna 3: Produto 2 com Efeito Hover Completo */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10 mb-8 lg:mb-0">
              {/* Efeito do Fundo Verde subindo */}
              <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              
              <a className="block" href="/cart">
                <img src="/images/product-2.png" alt="Kruzo Aero Chair" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-gray-900 font-semibold text-base mb-1">Kruzo Aero Chair</h3>
                <strong className="text-gray-900 font-bold text-lg">$78.00</strong>
              </a>

              {/* Botão de Adicionar (Aparece no Hover) */}
              <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </span>
            </div>

            {/* Coluna 4: Produto 3 com Efeito Hover Completo */}
            <div className="group relative text-center pt-10 pb-8 px-4 cursor-pointer z-10 mb-8 lg:mb-0">
              {/* Efeito do Fundo Verde subindo */}
              <div className="absolute bottom-0 left-0 w-full bg-[#dce5e4] rounded-3xl h-0 group-hover:h-[75%] transition-all duration-300 -z-10"></div>
              
              <a className="block" href="/cart">
                <img src="/images/product-3.png" alt="Ergonomic Chair" className="w-auto h-56 mx-auto mb-6 transform group-hover:-translate-y-6 transition duration-300 object-contain" />
                <h3 className="text-gray-900 font-semibold text-base mb-1">Ergonomic Chair</h3>
                <strong className="text-gray-900 font-bold text-lg">$43.00</strong>
              </a>

              {/* Botão de Adicionar (Aparece no Hover) */}
              <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 bg-[#2f2f2f] w-10 h-10 rounded-full flex items-center justify-center pointer-events-none">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </span>
            </div>

          </div>
        </div>
      </div>
      {/* End Product Section */}

      {/* Start Why Choose Us Section */}
      <div className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-gray-500 mb-10">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

              <div className="grid grid-cols-2 gap-8">
                <div className="feature">
                  <div className="icon relative inline-block mb-4">
                    <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                    <img src="/images/truck.svg" alt="Fast Shipping" className="h-8 relative z-10" />
                  </div>
                  <h3 className="text-sm font-bold mb-2">Fast &amp; Free Shipping</h3>
                  <p className="text-gray-500 text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>

                <div className="feature">
                  <div className="icon relative inline-block mb-4">
                    <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                    <img src="/images/bag.svg" alt="Easy Shop" className="h-8 relative z-10" />
                  </div>
                  <h3 className="text-sm font-bold mb-2">Easy to Shop</h3>
                  <p className="text-gray-500 text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>

                <div className="feature">
                  <div className="icon relative inline-block mb-4">
                    <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                    <img src="/images/support.svg" alt="Support" className="h-8 relative z-10" />
                  </div>
                  <h3 className="text-sm font-bold mb-2">24/7 Support</h3>
                  <p className="text-gray-500 text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>

                <div className="feature">
                  <div className="icon relative inline-block mb-4">
                    <span className="absolute inset-0 bg-[#3b5d50] rounded-full opacity-20 transform -translate-x-2 translate-y-2 w-8 h-8 z-[-1]"></span>
                    <img src="/images/return.svg" alt="Returns" className="h-8 relative z-10" />
                  </div>
                  <h3 className="text-sm font-bold mb-2">Hassle Free Returns</h3>
                  <p className="text-gray-500 text-sm">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-[-10%] left-[-10%] bg-[#f9bf29] w-3/4 h-3/4 rounded-3xl z-0 transform -rotate-6"></div>
              <img src="/images/why-choose-us-img.jpg" alt="Why Choose Us" className="rounded-3xl relative z-10 w-full object-cover" />
            </div>

          </div>
        </div>
      </div>
      {/* End Why Choose Us Section */}

      {/* Start We Help Section */}
      <div className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
              <div className="grid gap-4">
                <img src="/images/img-grid-1.jpg" alt="Interior 1" className="rounded-3xl w-full h-full object-cover" />
              </div>
              <div className="grid gap-4 mt-8">
                <img src="/images/img-grid-2.jpg" alt="Interior 2" className="rounded-3xl w-full h-full object-cover" />
                <img src="/images/img-grid-3.jpg" alt="Interior 3" className="rounded-3xl w-full h-full object-cover" />
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-10">
              <h2 className="text-3xl font-bold mb-6">We Help You Make Modern Interior Design</h2>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>

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
      {/* End We Help Section */}

      {/* Start Popular Product */}
      <div className="py-20 lg:py-24 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

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
      {/* End Popular Product */}

      {/* Start Testimonial Section */}
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
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <div className="py-20 lg:py-24 bg-[#eff2f1]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Recent Blog</h2>
            <a href="#" className="text-sm font-semibold border-b-2 border-gray-300 hover:border-gray-900 transition pb-1">View All Posts</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
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

            {/* Blog Post 2 */}
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

            {/* Blog Post 3 */}
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
      {/* End Blog Section */}

      {/* Start Footer Section */}
      <footer className="bg-white pt-24 pb-12 relative mt-24">
        <div className="container mx-auto px-4 relative">

          {/* Sofa Image Overlapping */}
          <div className="absolute top-[-180px] right-0 w-64 md:w-80 lg:w-[400px] hidden sm:block">
            <img src="/images/sofa.png" alt="Sofa" className="w-full h-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Newsletter */}
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-bold flex items-center mb-6 text-[#3b5d50]">
                <span className="mr-3"><img src="/images/envelope-outline.svg" alt="Mail" className="w-6 h-6" /></span>
                Subscribe to Newsletter
              </h3>

              <form className="flex flex-col sm:flex-row gap-4">
                <input type="text" className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-[#3b5d50]" placeholder="Enter your name" />
                <input type="email" className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-[#3b5d50]" placeholder="Enter your email" />
                <button type="button" className="bg-[#3b5d50] text-white px-6 py-3 rounded-lg hover:bg-[#3b5d50]/90 transition">
                  <i className="fa fa-paper-plane"></i> Send
                </button>
              </form>
            </div>
          </div>

          {/* Main Footer Links */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="mb-4"><a href="#" className="text-3xl font-bold text-[#3b5d50]">Furni<span className="text-[#f9bf29]">.</span></a></div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

              <ul className="flex space-x-4">
                <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center text-[#3b5d50] hover:bg-[#3b5d50] hover:text-white transition"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center text-[#3b5d50] hover:bg-[#3b5d50] hover:text-white transition"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center text-[#3b5d50] hover:bg-[#3b5d50] hover:text-white transition"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center text-[#3b5d50] hover:bg-[#3b5d50] hover:text-white transition"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-500">
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">About us</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Services</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Contact us</a></li>
              </ul>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Support</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Knowledge base</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Live chat</a></li>
              </ul>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Jobs</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Our team</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Leadership</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              </ul>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Nordic Chair</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Kruzo Aero</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition">Ergonomic Chair</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="mb-4 md:mb-0 text-center md:text-left">
              Copyright &copy; {new Date().getFullYear()}. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co" className="text-gray-900 hover:underline">Untree.co</a> Distributed By <a href="https://themewagon.com" className="text-gray-900 hover:underline">ThemeWagon</a>
            </p>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-gray-900 transition">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
      </footer>
      {/* End Footer Section */} 

    </div>
  );
}