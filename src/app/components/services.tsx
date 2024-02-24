import CardService from "./cardService";
import { Camera, Instagram, Rss, Palette } from "lucide-react";
import Shadow from "./shadow";
const Services = () => {
  return (
    <section className="w-full flex h-[80vh] relative px-[7rem] items-center flex-col gap-8">
      <div className="flex items-center flex-col">
        <h1 className="m-auto my-0 font-bold text-[48px] mt-[10%]">
          Nossos Serviços
        </h1>
        <p className="text-center">
          Aqui você pode conferir um pouco dos nossos serviços e entender melhor
          o que fazemos
        </p>
      </div>

      <div className="grid grid-flow-row grid-cols-3 gap-8">
        <CardService>
          <Camera className="text-secondary" size={40} />
          <h2 className="text-secondary text-lg opacity-[1]">Fotografia</h2>
          <p>
            Oferecemos serviços profissionais de fotografia para capturar
            momentos únicos e criar conteúdo visualmente cativante para sua
            marca. Nossa equipe de fotógrafos experientes utiliza equipamentos
            de última geração para garantir imagens de alta qualidade que
            impulsionam a identidade e o apelo da sua marca.
          </p>
        </CardService>
        <CardService>
          <Instagram className="text-secondary " size={40} />
          <h2 className="text-secondary text-lg opacity-[1]">Social Midia</h2>
          <p>
            Gerenciamos suas redes sociais de forma estratégica e eficaz,
            criando conteúdo envolvente e relevante para aumentar o alcance,
            engajamento e lealdade do público. Estamos comprometidos em impulsionar o crescimento e a presença da
            sua marca nas principais plataformas de mídia social.
          </p>
        </CardService>
        <CardService>
          <Rss className="text-secondary" size={40} />
          <h2 className="text-secondary text-lg opacity-[1]">Publicidade</h2>
          <p>
            Nossa equipe de especialistas em publicidade digital trabalha para
            aumentar a visibilidade da sua marca, utilizando estratégias
            personalizadas e segmentadas para alcançar seu público-alvo. Desde
            campanhas de anúncios pagos até otimização de SEO.
          </p>
        </CardService>
        <CardService>
          <Palette className="text-secondary" size={40} />
          <h2 className="text-secondary text-lg opacity-[1]">Design</h2>
          <p>
            Transformamos suas ideias em designs visualmente impressionantes que
            comunicam a essência da sua marca. Combinando criatividade e
            expertise técnica, nossa equipe de designers cria materiais gráficos
            únicos, desde logotipos e identidade visual até materiais de
            marketing impressos e digitais, garantindo uma representação visual
            consistente e impactante da sua marca.
          </p>
        </CardService>
        <Shadow className="right-0"/>
      </div>
    </section>
  );
};

export default Services;
