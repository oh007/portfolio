import About from "@/components/About";
import Technologies from "./../components/Technologies";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="homepage">
      <Header />
      <Technologies />
      <About />
    </main>
  );
}
