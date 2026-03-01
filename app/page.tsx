import Navbar  from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/Products/Products";
import WhyChoose from "./components/whychoose/WhyChoose";
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/testimonial/Testimonial";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO SECTION */}
        <Hero />
        <Products />
        <WhyChoose />
        <Testimonials />
    
      </main>

      <Footer/>

     
    </>
  );
}
