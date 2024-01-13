function TopLeftImg() {
  const PF = process.env.PUBLIC_URL;

  return (
    <div className="absolute top-0 left-0 mix-blend-lighten z-10 w-[200px] xl:w-[400px]">
      <img
        src={`${PF}/images/top-left-img.png`}
        className="w-[400px] h-[400px]"
        alt=""
      />
      TopLeftImage
    </div>
  );
}

export default TopLeftImg;
