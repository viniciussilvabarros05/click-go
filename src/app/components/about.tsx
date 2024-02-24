import Separator from "./separator";
import Shadow from "./shadow";
import ShadowLogo from "./shadow-logo";

const triangles = [
    {
      size: 15,
      rotation: 65,
      top: 0,
      left: 15
    },
    {
      size: 5,
      rotation: 65,
      top: 0,
      left: 0
    },
    {
      size: 5,
      rotation: 140,
      top: 0,
      left: 100
    },
    {
      size: 5,
      rotation: 140,
      top: 5,
      left: 200
    },
    {
      size: 5,
      rotation: 140,
      top: 10,
      left: 300
    },
    {
      size: 5,
      rotation: 140,
      top: 10,
      left: 400
    },
    {
      size: 5,
      rotation: 140,
      top: 8,
      left: 500
    },
    {
      size: 5,
      rotation: 140,
      top: 12,
      left: 600
    },
    {
      size: 5,
      rotation: 140,
      top: 100,
      left: 700
    },
    {
      size: 15,
      rotation: 45,
      top: 5,
      left: 800
    },
    {
      size: 5,
      rotation: 45,
      top: 50,
      left: 0
    },
    {
      size: 5,
      rotation: 0,
      top: 2,
      left: 20
    },
    {
      size: 15,
      rotation: 65,
      bottom: 0,
      top: 15
    },
    {
      size: 5,
      rotation: 65,
      top: 0,
      left: 0
    },
    {
      size: 5,
      rotation: 140,
      top: 0,
      left: 100
    },
    {
      size: 5,
      rotation: 140,
      top: 5,
      left: 48
    },
    {
      size: 5,
      rotation: 140,
      top: 10,
      left: 56
    },
    {
      size: 5,
      rotation: 140,
      top: 10,
      left: 12
    },
    {
      size: 5,
      rotation: 140,
      top: 8,
      left: 37
    },
    {
      size: 5,
      rotation: 140,
      top: 12,
      left: 6
    },
    {
      size: 5,
      rotation: 140,
      top: 100,
      left: 35
    },
    {
      size: 15,
      rotation: 45,
      top: 5,
      left: 46
    },
    {
      size: 5,
      rotation: 45,
      left: 15,
      top: 50,
    },
    {
      size: 5,
      rotation: 0,
      left: 0,
      top: 0
    }
  ];


const About = () => {
  return (
    <section className="w-full flex-col flex h-[80vh] relative px-[7rem] items-center justify-center overflow-hidden">
      <Separator />
      <h1 className="m-auto my-0 font-bold text-[48px]">SOBRE</h1>
      <Separator />
      <Shadow className="left-0"/>

      {triangles.map((item, index)=>(
          <ShadowLogo key={index} style={{left:item.left+ "%",top: item.top+"%"}} className={`w-[${item.size}px] absolute rotate-[${item.rotation}deg] top-[${item.top}%] left-[${item.left}%]`}/>
      ))}
      <ShadowLogo className="w-[50px] absolute rotate-45  top-[50%] right-0" />
      <ShadowLogo className="w-[75px] absolute rotate-0  top-2 right-[20%]" />
      <ShadowLogo className="w-[150px] absolute rotate-[65deg]  top-0 right-[15%]" />
      <ShadowLogo className="w-[80px] absolute rotate-[65deg]  top-0 left-0" />
      <ShadowLogo className="w-[15px] absolute rotate-[140deg]  bottom-0 left-[65%]" />
      <ShadowLogo className="w-[12px] absolute rotate-[140deg]  bottom-5 left-[38%]" />
      <ShadowLogo className="w-[11px] absolute rotate-[140deg]  bottom-[43%] left-[44%]" />
      <ShadowLogo className="w-[13px] absolute rotate-[140deg]  bottom-[150px] left-[15%]" />
      <ShadowLogo className="w-[16px] absolute rotate-[140deg]  bottom-8 left-[73%]" />
      <ShadowLogo className="w-[18px] absolute rotate-[140deg]  bottom-12 left-[82%]" />
      <ShadowLogo className="w-[14px] absolute rotate-[140deg]  bottom-[10rem] left-[67%]" />
   
    </section>
  );
};

export default About;
