import React from 'react';

function PreOwnedCars() {
  const preOwnedCars = [
    {
      model: '2018 Toyota Corolla',
      image: 'https://cars.usnews.com/static/images/Auto/izmo/i38431320/2018_toyota_corolla_angularfront.jpg',
      story: 'Previously owned by a careful college professor. Low mileage, well-maintained, and fuel-efficient.'
    },
    {
      model: '2017 BMW 3 Series',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVccWpsd785bdw6tjz_DKGwQYap3kC9BwnRQ&s',
      story: 'Driven by a business exec who loved smooth highway cruises. Just serviced and ready to go.'
    },
    {
      model: '2019 Honda Civic',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d',
      story: 'Owned by a young couple who used it for weekend getaways. Still in top shape with a stylish edge.'
    },
    {
      model: '2016 Ford F-150',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZDMYQvipmS_NmGh24dLRN491ABmu0aLvXw&s',
      story: 'Used by a craftsman who babied this truck. It’s got power, personality, and zero rust.'
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Pre-Owned Cars With Stories</h2>
      <div className="row">
        {preOwnedCars.map((car, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-lg h-100">
              <img src={car.image} className="card-img-top" alt={car.model} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{car.model}</h5>
                <p className="card-text">{car.story}</p>
                <a href="/contact" className="btn btn-outline-success">I'm Interested</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreOwnedCars;
