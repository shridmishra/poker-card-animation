export default function Home() {
  return (
    <div>
      <div className="container">
        <section className="hero">
          <h1>Keep scrolling to reveal cards</h1>
        </section>
        <section className="cards">
          {[...Array(4)].map((_,index) => {
            <Card key={index} />
          })}
        </section>
        <section className="footer"></section>
        <h1>Footer/Section</h1>
      </div>
    </div>
  );
}
