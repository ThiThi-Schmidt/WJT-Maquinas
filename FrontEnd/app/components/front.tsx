export default function Capa() {
  return (
    <div className="text-white min-h-screen flex items-center relative" style={{ backgroundImage: "url('/images/hero.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 z-10 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-white">
              WJT <span className="block text-white/90 font-normal">Comércio e manutenção de máquinas</span>
            </h1>
            <div className="text-white/70 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed space-y-2">
              <p>Tudo em Jardinagem & Construção Civil</p>
              <p>Manutenção Especializada</p>
              <p>Qualidade e experiência há 15 anos</p>
            </div>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="/shop" className="bg-[#ff7b00] text-[#2f2f2f] font-semibold px-8 py-3.5 rounded-full hover:bg-[#ff7b00]/90 transition duration-300 shadow-lg">Compre agora</a>
              <a href="#" className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition duration-300">explore mais</a>
            </div>
          </div>
          <div className="lg:col-span-7 relative mt-8 lg:mt-0">
            <div className="relative lg:-right-16 xl:-right-24">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}