import About from "./components/about";
import Section1 from "./components/home";
import Separator from "./components/separator";
import Services from "./components/services";
import Shadow from "./components/shadow";
import ShadowLogo from "./components/shadow-logo";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center  gap-8 relative ">

      <Section1 />
      <About />   
      <Shadow className="left-0 top-[160vh]"/>
      <Services />
    </div>
  );
}
