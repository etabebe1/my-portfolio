const Circles = () => {
  const PF = process.env.PUBLIC_URL;

  return (
    <div className="w-[200px] xl:w-[300px] absolute -bottom-2 -right-10  opacity-85 animate-pulse duration-1000 z-10 xl:hidden">
      <img src={`${PF}/images/circles.png`} alt="" />
    </div>
  );
};

export default Circles;
