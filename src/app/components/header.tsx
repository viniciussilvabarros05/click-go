import Image from "next/image";

const Header = () => {
    return ( 
        <header className="w-[85%] flex items-center justify-between m-auto h-[100px] gap-[30rem]">
            <div className="w-[4rem] h-[4rem]flex items-center justify-center">
                <Image width={50} height={50} alt="logo" src="/logo.png" className="w-fit h-fit" style={{objectFit: 'contain'}}/>
            </div>

            <div className="flex gap-8">
                <a>Sobre</a>
                <a>Nossos Serviços</a>
                <a>Portfólio</a>
                <a>Contatos</a>
            </div>
        </header>
     );
}
 
export default Header;