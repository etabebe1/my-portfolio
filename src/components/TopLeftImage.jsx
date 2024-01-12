function TopLeftImg() {
  const PF = process.env.PUBLIC_URL;

  return (
    <div className="absolute left-0 top-0 mix-blend-lighten">
      <img
        src={`${PF}/images/top-left-img.png`}
        className="w-[400px] h-[400px]"
        alt=""
      />
    </div>
  );
}

export default TopLeftImg;
