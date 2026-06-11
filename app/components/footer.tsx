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
            <h3 className="text-2xl font-bold flex items-center mb-6 text-[#3b5d50]">
              <span className="mr-3"><img src="/images/envelope-outline.svg" alt="Mail" className="w-6 h-6" /></span>
              Subscribe to Newsletter
            </h3>
            <form className="flex flex-col sm:flex-row gap-4">
              <input type="text" className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-[#3b5d50]" placeholder="Enter your name" />
              <input type="email" className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-[#3b5d50]" placeholder="Enter your email" />
              <button type="button" className="bg-[#3b5d50] text-white px-6 py-3 rounded-lg hover:bg-[#3b5d50]/90 transition">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4">
            <div className="mb-4"><a href="#" className="text-3xl font-bold text-[#3b5d50]">Furni<span className="text-[#f9bf29]">.</span></a></div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

            <ul className="flex space-x-4 text-[#3b5d50]">
              <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#3b5d50] hover:text-white transition">F</a></li>
              <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#3b5d50] hover:text-white transition">T</a></li>
              <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#3b5d50] hover:text-white transition">I</a></li>
              <li><a href="#" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#3b5d50] hover:text-white transition">L</a></li>
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
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co" className="text-gray-900 hover:underline">Untree.co</a>
          </p>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-900 transition">Terms &amp; Conditions</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}