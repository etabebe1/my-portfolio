const Avatar = () => {
  const PF = process.env.PUBLIC_URL;
  return (
    <>
      <img src={`${PF}/images/avatar.png`} className="w-[510px]" alt="" />
    </>
  );
};

export default Avatar;
