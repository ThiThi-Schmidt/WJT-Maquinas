export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 relative mt-24">
      <div className="container mx-auto px-4 relative">

        {/* Sofa Image Overlapping */}
        <div className="absolute top-[-180px] right-0 w-64 md:w-80 lg:w-[400px] hidden sm:block">
          <img src="/images/sofa.png" alt="Sofa" className="w-full h-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Newsletter */}
          <div className="lg:col-span-8">
            {/* Título alterado para laranja escuro */}
            <h3 className="text-2xl font-bold flex items-center mb-6 text-[#ea580c]">
              <span className="mr-3"><img src="/images/envelope-outline.svg" alt="Mail" className="w-6 h-6" /></span>
              Subscribe to Newsletter
            </h3>
            <form className="flex flex-col sm:flex-row gap-4">
              {/* Bordas ao focar alteradas para laranja */}
              <input type="text" className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-[#ea580c]" placeholder="Enter your name" />
              <input type="email" className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-[#ea580c]" placeholder="Enter your email" />
              {/* Botão alterado para laranja */}
              <button type="button" className="bg-[#ea580c] text-white px-6 py-3 rounded-lg hover:bg-[#c2410c] transition">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4">
            {/* Logo alterada para combinar com a identidade */}
            <div className="mb-4"><a href="#" className="text-3xl font-bold text-[#2f2f2f]">WTJ</a></div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

            {/* Redes sociais com hover laranja */}
            <ul className="flex space-x-4 text-[#2f2f2f]">
              <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition">F</a></li>
              <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition">T</a></li>
              <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition">I</a></li>
              <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition">L</a></li>
            </ul>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-500">
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">About us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Contact us</a></li>
            </ul>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Support</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Knowledge base</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Live chat</a></li>
            </ul>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Jobs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Our team</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Leadership</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Privacy Policy</a></li>
            </ul>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Nordic Chair</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Kruzo Aero</a></li>
              <li className="mb-2"><a href="#" className="hover:text-[#ea580c] transition">Ergonomic Chair</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co" className="text-gray-900 hover:text-[#ea580c] transition">Untree.co</a>
          </p>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-[#ea580c] transition">Terms &amp; Conditions</a></li>
            <li><a href="#" className="hover:text-[#ea580c] transition">Privacy Policy</a></li>
          </ul>
        </div>
    
      </div>
    </footer>
  );
}