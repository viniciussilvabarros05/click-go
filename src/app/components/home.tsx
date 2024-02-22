import Image from "next/image";

const Section1 = () => {
  return (
    <section className="w-[85%] flex h-[80vh] justify-between relative">
      <div className="absolute bottom-0 right-0 w-[0] h-[0] bg-secondary rounded-full shadow-[-0px_0px_1000px_300px_rgba(255,106,24,0.147)]"></div>

      <div className="flex justify-center items-start flex-col w-[55%] gap-4">
        <Image
          src="/click-go1.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          alt="click go"
          className="w-[50%] "
        />
        <p className="">
          A Click Go é a melhor opção para você engajar sua marca, desenvolver a
          imagem de sua empresa e ganhar visibilidade para o seu negócio.
        </p>
      </div>
      <div className="relative flex-1 flex">
        <Image
          src="/go.svg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "cover", position: "absolute", right: 0 }}
          alt="click go"
          className="w-[300px] max-w-[400px]"
        />
        <Image
          src="/go.svg"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
            right: 200,
            top: "70%",
          }}
          alt="click go"
          className="w-[3%] drop-shadow-2xl"
        />
        <Image
          src="/go.svg"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
            right: 150,
            top: "10%",
          }}
          alt="click go"
          className="w-[5%] drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Section1;
