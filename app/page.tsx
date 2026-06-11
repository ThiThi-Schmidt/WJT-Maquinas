import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-[#eff2f1] text-[#2f2f2f] font-sans antialiased min-h-screen overflow-hidden">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}