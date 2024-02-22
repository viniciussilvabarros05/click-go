import CardService from "./cardService";
import {Camera, Instagram,Rss, Palette} from 'lucide-react'
const Services = () => {
  return (
    <section className="w-full flex h-[80vh] relative px-[7rem] items-center flex-col gap-8">
       <div className="flex items-center flex-col">
        <h1 className="m-auto my-0 font-bold text-[48px] mt-[10%]">Nossos Serviços</h1>
         <p className="text-center">Aqui você pode conferir um pouco dos nossos serviços e entender melhor o que fazemos</p>
       </div>
       
       <div className="grid grid-flow-row grid-cols-3 gap-8">
        <CardService>
         <Camera className="text-secondary" size={40}/>
         <h2 className="text-secondary text-lg opacity-[1]">Fotografia</h2>
        </CardService>
        <CardService>
        <Instagram className="text-secondary " size={40}/>
        <h2 className="text-secondary text-lg opacity-[1]">Social Midia</h2>
        </CardService>
        <CardService>
         <Rss className="text-secondary" size={40}/>
         <h2 className="text-secondary text-lg opacity-[1]">Publicidade</h2>
        </CardService>
        <CardService>
         <Palette className="text-secondary" size={40}/>
         <h2 className="text-secondary text-lg opacity-[1]">Design</h2>
        </CardService>
       </div>
    </section>
  );
};

export default Services;
