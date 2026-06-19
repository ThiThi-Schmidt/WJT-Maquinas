export default function Footer() {
  return (
    // Removemos o mt-24 e aumentamos o pt-24 para pt-44 para o fundo branco subir
    <footer className="bg-white text-[#2f2f2f] pt-44 pb-12 relative">
      
      <div className="container mx-auto px-4 relative">
        

        {/* Imagem do sofá reajustada para flutuar no topo branco */}
        <div className="absolute top-[-140px] right-0 w-64 md:w-80 lg:w-[400px] hidden sm:block">
          <img src="/images/sofa.png" alt="Sofa" className="w-full h-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Newsletter */}
          <div className="lg:col-span-8">
            <h3 className="text-2xl font-bold flex items-center mb-6 text-[#ea580c]">
              <span className="mr-3"><img src="/images/envelope-outline.svg" alt="Mail" className="w-6 h-6" /></span>
              Contate-nos:
            </h3>
            <form className="flex flex-col sm:flex-row gap-4">
              <input type="text" className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-[#ea580c] bg-white text-gray-900" placeholder="Escreva seu nome" />
              <input type="email" className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-[#ea580c] bg-white text-gray-900" placeholder="Escreva seu email" />
              <button type="button" className="bg-[#ea580c] text-white px-6 py-3 rounded-lg hover:bg-[#c2410c] transition">
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4">
            <div className="mb-4"><a href="#" className="text-3xl font-bold text-[#2f2f2f]">WTJ</a></div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Atuamos no comércio e manutenção de máquinas para jardinagem e construção civil, com assistência técnica especializada e mais de 15 anos de experiência. Oferecemos qualidade, eficiência e confiança em cada serviço, porque mais do que máquinas, entregamos resultados que fazem a diferença.</p>

            <ul className="flex space-x-4 text-[#2f2f2f]">
              <li><a href="https://www.instagram.com/smbmaquinas/" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition">I</a></li>
              <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=corporativo@smbmaquinas.com.br" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition">E</a></li>
            </ul>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-500">
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Sobre nós</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Serviços</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Clientes</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Suporte</a></li>
            </ul>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Trabalhos</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Nossa equipe</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Política de privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-[#ea580c] transition">Termos &amp; Condições</a></li>
            <li><a href="#" className="hover:text-[#ea580c] transition">Política de privacidade</a></li>
          </ul>
        </div>
    
      </div>
    </footer>
  );
}