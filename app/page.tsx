import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

import ProductShowcase from "./components/product-showcase";
import RecentBlog from "./components/recent-blog";
import Testimonials from "./components/testimonials";
import WeHelpYou from "./components/we-help-you";
import WhyChooseUs from "./components/why-choose-us";

export default function Body() {                    
  return (
    <main>
      <Header />
      <Hero />
      <ProductShowcase />
      <WhyChooseUs />
      <WeHelpYou />
      <Testimonials />
      <RecentBlog />
      <Footer />
    </main>
  );
}