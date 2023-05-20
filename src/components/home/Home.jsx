import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-home-container">
        <div className="info-container container mt-5">
          <h1 className="expanding-heading">Bienvenido a PAR-KUD</h1>
          <div className="card shaking">
            <div className="card-header">
              <h5 className="card-title">Quienes somos</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse pretium arcu ac urna mattis tincidunt. Aliquam
                luctus eleifend risus, at venenatis neque fermentum at. Morbi
                rutrum lectus nec ipsum tempor, vitae bibendum tortor tincidunt.
                Nullam semper fringilla quam, vitae euismod velit scelerisque
                vel. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; In fermentum efficitur
                tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
