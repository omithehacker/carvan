import React from 'react';

function ContactUs() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h4>Get in Touch</h4>
          <p>Have questions, feedback, or need help finding the right car? Fill out the form and we’ll get back to you!</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Contact Information</h4>
          <ul className="list-unstyled">
            <li><strong>Email:</strong> support@carvan.com</li>
            <li><strong>Phone:</strong> +234 900 000 0000</li>
            <li><strong>Address:</strong> 123 Carvan Street, Auto City, NG</li>
          </ul>
          <div className="mt-4">
            <iframe
              title="Carvan Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.594648712425!2d3.379205216069291!3d6.52437942359924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53e3c14f3a3%3A0xe50a7b2cfd999999!2sCar%20Showroom!5e0!3m2!1sen!2sng!4v1615558821023!5m2!1sen!2sng"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
