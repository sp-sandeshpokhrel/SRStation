import ProductList from "@components/ProductList";
import Slider from "@components/Slider";
import About from "@components/About";
import ContactSection from "@components/ContactSection";

export default function Home() {
  return (
    <>
      <Slider />
      <ProductList />
      <About />
      <ContactSection />
    </>
  );
}
