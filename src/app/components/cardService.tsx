interface CardServiceProps{
  children: React.ReactNode;
}

const CardService = ({children}: CardServiceProps) => {
  return (
    <div className="flex items-center justify-center rounded-md">
      <div className="h-[340px] w-[550px] rounded-[4px] bg-gradient-to-r to-primary via-secondary from-[#ff9102] p-[3px]">
        <div className="flex h-full w-full items-start justify-start bg-[#171717] back p-6 flex-col gap-4">
        {children}
        </div>
      </div>
    </div>
  );
};

export default CardService;
