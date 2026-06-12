export default function Header() {
  return (
    <nav 
      className="py-6 text-white sticky top-0 z-50 shadow-md"
      style={{
        backgroundColor: '#162e56',
        backgroundImage: `
          radial-gradient(circle, rgba(27, 60, 115, 0.8) 0%, rgba(10, 20, 38, 0.95) 100%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M0 0l12 12M12 0L0 12' stroke='%23000' stroke-width='1.2' opacity='0.4'/%3E%3C/svg%3E")
        `,
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a className="flex items-center gap-3 text-3xl font-bold tracking-tight" href="/">
           <img src="/images/couch.png" alt="Logo" className="h-12 w-auto" />
           <span>WTJ</span>
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
          <a href="#" className="hover:opacity-80 transition">
            <img src="/images/user.svg" alt="User" />
          </a>
          <a href="/cart" className="hover:opacity-80 transition">
            <img src="/images/cart.svg" alt="Cart" />
          </a>
        </div>
      </div>
    </nav>
  );
}