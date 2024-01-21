const Circles = () => {
  const PF = process.env.PUBLIC_URL;

  return (
    <div className="w-[150px] xl:w-[300px]  opacity-85 animate-pulse duration-1000 z-10 xl:hidden">
      <img src={`${PF}/images/circles.png`} className="w-full xl:w-[300px]" alt="" />
    </div>
  );
};

export default Circles;
