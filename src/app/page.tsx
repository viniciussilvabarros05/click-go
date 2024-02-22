import About from "./components/about";
import Section1 from "./components/home";
import Separator from "./components/separator";
import Services from "./components/services";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center  gap-8">
      <Section1 />
      <Separator />
      <About />
      <Separator />
      <Services />
    </div>
  );
}
