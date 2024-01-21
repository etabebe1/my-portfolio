const Bulb = () => {
  const PF = process.env.PUBLIC_URL;

  return (
    <div className=" w-[150px]">
      <img src={`${PF}/images/bulb.png`} alt="" />
    </div>
  );
};

export default Bulb;
