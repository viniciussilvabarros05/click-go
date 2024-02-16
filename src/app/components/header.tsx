import Image from "next/image";

const Header = () => {
    return ( 
        <header className="w-full flex items-center justify-around h-[100px] gap-[30rem]">
            <div className="w-[4rem] h-[4rem]flex items-center justify-center">
                <Image width={50} height={50} alt="logo" src="/logo.png" className="w-fit h-fit" style={{objectFit: 'contain'}}/>
            </div>

            <div className="flex gap-8">
                <a>Contatos</a>
                <a>Portfólio</a>
                <a>Trabalhos</a>
                <a>Sobre</a>
            </div>
        </header>
     );
}
 
export default Header;