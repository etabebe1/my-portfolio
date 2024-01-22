    const Bulb = () => {
      const PF = process.env.PUBLIC_URL;

      return (
        <div className=" w-[150px] xl:w-[200px]  opacity-85 animate-pulse duration-1000 z-10">
          <img src={`${PF}/images/bulb.png`} alt="" />
        </div>
      );
    };

    export default Bulb;
