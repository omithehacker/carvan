import React from 'react';

function Brands() {
  const brands = [
    {
      name: 'Toyota',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnG49Ht9722p0eCdIwm0YoZj0IGBzmI5D49Q&s',
      models: ['Corolla', 'Camry', 'RAV4']
    },
    {
      name: 'Honda',
      logo: 'https://1000logos.net/wp-content/uploads/2018/03/Honda-Logo-2000.png',
      models: ['Civic', 'Accord', 'CR-V']
    },
    {
      name: 'BMW',
      logo: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo.png',
      models: ['3 Series', 'X5', 'M4']
    },
    {
      name: 'Mercedes',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKQ6zit6uy-AHenscudhEdPf1W3kUaY7GvA&s',
      models: ['C-Class', 'E-Class', 'GLA']
    },
    {
      name: 'Ford',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZA2SP3AAonmb7RBYsxhH3PJCf8xvM7VCzOr6z7s0_9dbFRomRNskCX7MEvqJz1ychBjc&usqp=CAU',
      models: ['Focus', 'Mustang', 'Explorer']
    },
    {
      name: 'Tesla',
      logo: 'https://images.seeklogo.com/logo-png/32/2/tesla-logo-png_seeklogo-329764.png',
      models: ['Model 3', 'Model S', 'Model X']
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Brands</h2>
      <div className="row">
        {brands.map((brand, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={brand.logo} className="card-img-top p-3" alt={`${brand.name} logo`} style={{ height: '150px', objectFit: 'contain' }} />
              <div className="card-body">
                <h5 className="card-title text-center">{brand.name}</h5>
                <ul className="list-group list-group-flush">
                  {brand.models.map((model, i) => (
                    <li key={i} className="list-group-item">
                      <i className="bi bi-car-front-fill me-2 text-primary"></i> {model}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
