interface CardServiceProps{
  children: React.ReactNode;
}

const CardService = ({children}: CardServiceProps) => {
  return (
    <div className="flex items-center justify-center rounded-md">
      <div className="h-[300px] w-[540px] rounded-[4px] bg-gradient-to-r to-primary via-secondary from-[#ff9102] p-[3px]">
        <div className="flex h-full w-full items-start justify-start bg-[#171717] back p-8 flex-col gap-4">
        {children}
        </div>
      </div>
    </div>
  );
};

export default CardService;
