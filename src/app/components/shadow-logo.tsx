import Image from "next/image";
import { CSSProperties } from "react";

interface ShadowLogoProps{
    className: string;
    style?: CSSProperties;
}
const ShadowLogo = ({className, style}: ShadowLogoProps) => {
    return (  <Image src="/logo-shadow.svg" style={style} width={0} height={0} alt="shadow-logo"  className={className}/>);
}
 
export default ShadowLogo;