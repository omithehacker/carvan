import React from 'react';

function AboutUs() {
  return (
    <div className="container-fluid px-0">
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x400/?car-showroom)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-black bg-opacity-50 py-5">
          <h1 className="display-4 fw-bold">About CARVAN</h1>
          <p className="lead">Driven by passion, powered by trust.</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 hover-glow text-center p-3">
              <i className="bi bi-flag fs-1 text-primary mb-3"></i>
              <h5 className="fw-semibold">Our Mission</h5>
              <p className="text-muted">To simplify car buying and selling by bringing transparency, quality, and comfort to every journey.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 hover-glow text-center p-3">
              <i className="bi bi-people fs-1 text-primary mb-3"></i>
              <h5 className="fw-semibold">Who We Are</h5>
              <p className="text-muted">A team of car enthusiasts and tech experts who believe finding the perfect car should be a breeze.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 hover-glow text-center p-3">
              <i className="bi bi-award fs-1 text-primary mb-3"></i>
              <h5 className="fw-semibold">Our Promise</h5>
              <p className="text-muted">Quality service, verified listings, and a smooth ride from browsing to buying.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h3 className="fw-bold mb-3">Why Choose CARVAN?</h3>
          <p className="text-muted">With years of expertise and a deep passion for automobiles, CARVAN offers a curated platform for every car lover—from the casual commuter to the speed freak. We’re here to make your car journey smooth, exciting, and reliable.</p>
        </div>
      </div>

      <style>
        {`
          .hover-glow:hover {
            transform: translateY(-4px);
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
}

export default AboutUs;
