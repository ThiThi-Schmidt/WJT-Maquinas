 // Vamos criar esse abaixo!

import ProductManager from "./components/ProductManager";



export default function AdmProductPage() {
    return (
        <div className="min-h-screen bg-[#121212] p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* 1. Nosso Header de Admin entra aqui no topo */}

                
                {/* 2. O Motor do CRUD de produtos entra aqui embaixo */}
                <ProductManager />
            </div>
        </div>
    );
}