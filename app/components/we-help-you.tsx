export default function WeHelpYou() {
  return (
    // Adicionei 'bg-white' aqui para garantir que o fundo não seja escuro
    <div className="py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LADO ESQUERDO: Grid de Imagens */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
            {/* Elemento decorativo de fundo (o ponto amarelo/quadrado comum desse template) */}
            
            <div className="grid gap-4">
              <img src="/images/img-grid-1.jpg" alt="Interior 1" className="rounded-3xl w-full h-full object-cover" />
            </div>
            <div className="grid gap-4 mt-8">
              <img src="/images/img-grid-2.jpg" alt="Interior 2" className="rounded-3xl w-full h-full object-cover" />
              <img src="/images/img-grid-3.jpg" alt="Interior 3" className="rounded-3xl w-full h-full object-cover" />
            </div>
          </div>

          {/* LADO DIREITO: Texto */}
          <div className="lg:col-span-5 lg:pl-10">
            <h2 className="text-3xl font-bold mb-6 text-[#2f2f2f]">We Help You Make Modern Interior Design</h2>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
            </p>
            
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm text-gray-600">
              <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#3b5d50] border-2 border-[#3b5d50] mt-1 mr-3 flex-shrink-0"></span> Donec vitae odio quis nisl dapibus</li>
              <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#3b5d50] border-2 border-[#3b5d50] mt-1 mr-3 flex-shrink-0"></span> Donec vitae odio quis nisl dapibus</li>
              <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#3b5d50] border-2 border-[#3b5d50] mt-1 mr-3 flex-shrink-0"></span> Donec vitae odio quis nisl dapibus</li>
              <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#3b5d50] border-2 border-[#3b5d50] mt-1 mr-3 flex-shrink-0"></span> Donec vitae odio quis nisl dapibus</li>
            </ul>
            
            <p>
              <a href="#" className="inline-block bg-[#2f2f2f] text-white font-medium px-7 py-3 rounded-full hover:bg-[#2f2f2f]/90 transition duration-300 text-sm">
                Explore
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}