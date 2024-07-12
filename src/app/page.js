import About from "@/components/About";
import Technologies from "./../components/Technologies";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="homepage">
      <Header />
      <Technologies />
      <About />
    <Footer/>
    </main>
  );
}
