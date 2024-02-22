interface ShadowProps{
    className?: any;
    
}
const Shadow = ({ className}: ShadowProps) => {
    return ( 
        <div className={`${className} absolute bottom-0 h-[0] bg-secondary rounded-full shadow-[0px_50px_1000px_300px_rgba(255,106,24,0.147)]`}></div>
     );
}
 
export default Shadow;