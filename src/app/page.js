import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
}
