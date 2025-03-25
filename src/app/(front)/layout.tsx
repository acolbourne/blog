const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="section">
      <div className="container">
        <p>Main Layout Test</p>
      </div>
      <div className="container">{children}</div>
    </section>
  );
};

export default MainLayout;
