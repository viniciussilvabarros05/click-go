
interface SeparatorProps {
  className?: string;
}


const Separator = ({className}: SeparatorProps) => {
  return (
    <div className={`w-[500px] h-[2px] bg-gradient-to-r from-transparent to-transparent via-secondary ${className}`}></div>
  );
};

export default Separator;
