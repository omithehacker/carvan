import React from 'react';

function RangeOfCars() {
  const carTypes = [
    {
      type: 'SUV',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSib33zmCK6J0Hh6KB0WvduV_7ceL4jyrvJ8A&s',
      description: 'Spacious, powerful and perfect for families or adventures.'
    },
    {
      type: 'Sedan',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/2017_Toyota_Camry_%28ASV70R%29_SX_sedan_%282018-11-02%29_01.jpg/1200px-2017_Toyota_Camry_%28ASV70R%29_SX_sedan_%282018-11-02%29_01.jpg',
      description: 'Comfort and style combined for a smooth ride.'
    },
    {
      type: 'Coupe',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKtUFvkUnF2QJzUb5ebX6ck_zdY-FYU2kQQ&s',
      description: 'Sleek, sporty, and built for performance lovers.'
    },
    {
      type: 'Truck',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg/1200px-Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg',
      description: 'Powerful and dependable for heavy-duty tasks.'
    },
    {
      type: 'Hatchback',
      image: 'https://car-images.bauersecure.com/wp-images/3332/0_toyota_corolla_review_1.jpg',
      description: 'Compact and fuel-efficient, perfect for the city.'
    },
    {
      type: 'Convertible',
      image: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-carrera-gts-104-668d438beba3f.jpg?crop=0.740xw:0.554xh;0.0881xw,0.446xh&resize=1200:*',
      description: 'Feel the wind and freedom on the open road.'
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Explore Our Range of Cars</h2>
      <div className="row">
        {carTypes.map((car, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow h-100">
              <img src={car.image} className="card-img-top" alt={`${car.type}`} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{car.type}</h5>
                <p className="card-text">{car.description}</p>
                <a href="/brands" className="btn btn-outline-primary">View Brands</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RangeOfCars;
