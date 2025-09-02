import React from 'react';

function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Welcome to <span className="text-dark">CARVAN</span></h1>
        <p className="lead">Your trusted online destination for everything on four wheels.</p>
      </div>

      <div className="row g-4">
        {[
          {
            title: 'Explore Cars',
            text: 'Find the car that fits your life perfectly.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLot4nidXNBpWnaGaMQscmW7P2_pWPG-l6WA&s',
            link: '/range',
            btn: 'Browse Range'
          },
          {
            title: 'Pre-Owned Cars',
            text: 'Quality checked, budget-friendly used cars.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60daPOCmfojdfYgV4913JTW5HfFHMecHJbw&s',
            link: '/preowned',
            btn: 'Browse Pre-Owned'
          },
          {
            title: 'Luxury Rides',
            text: 'Drive in style with our luxury collection.',
            image: 'https://luxuryrideusa.com/wp-content/uploads/2023/04/Luxury-Ride-NYC-Chauffeur-service-1080x580-min.jpg',
            link: '/range#luxury',
            btn: 'Luxury Cars'
          },
          {
            title: 'Electric Vehicles',
            text: 'Explore the future of driving today.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ47h4ObI3s9_e9xhMJtC3UJhb5QXQpNv1DQ&s',
            link: '/range#electric',
            btn: 'Electric Cars'
          },
          {
            title: 'Family Cars',
            text: 'Spacious and safe rides for the whole crew.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQNRn0XevIX9smoErZ4Ff0JIGQ_YUz0dRZA&s',
            link: '/range#family',
            btn: 'Family Cars'
          },
          {
            title: 'Get In Touch',
            text: 'Questions? We’re just a message away.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GSK-nCnnMWaQbFVo-3-NcvvrC0ZHds779Q&s',
            link: '/contact',
            btn: 'Contact Us'
          }
        ].map((card, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card h-100 shadow-sm border-0 hover-zoom">
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{card.title}</h5>
                <p className="card-text text-muted">{card.text}</p>
                <a href={card.link} className="btn btn-outline-primary">{card.btn}</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .hover-zoom:hover {
            transform: translateY(-5px);
            transition: all 0.3s ease-in-out;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          }
          .card img {
            object-fit: cover;
            height: 250px;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
