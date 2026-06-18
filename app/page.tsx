import Footer from "./components/footer";
import Header from "./components/header";
import Front from "./components/front";

import Products from "./components/products";
import Posts from "./components/posts";
import Avaliacao from "./components/avaliacao";


export default function Body() {                    
  return (
    
    <main>
      <Header />
      <Front />
      <Products />
      <Avaliacao />
      <Posts />
      <Footer />
    </main>
  );
}