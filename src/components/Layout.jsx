function Layout({ children }) {
  const PF = process.env.PUBLIC_URL;

  return (
    <div
      className="h-[100vh] text-white font-mono"
      style={{
        backgroundImage: `url(${PF}/images/white.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}

export default Layout;
