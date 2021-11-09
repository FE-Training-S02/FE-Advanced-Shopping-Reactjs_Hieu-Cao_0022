import React from 'react';

const Contact = () => {
  return (
    <section className="section-contact">
      <div className="container d-flex align-items-center">
        <div className="contact-content row">
          <div className="col-6 col-sm-12">
            <p className="contact-description">
              Subscribe to our newsletter andreceive exclusive offers every week
            </p>
          </div>
          <div className="col-6 col-sm-12">
            <form className="form">
              <input
                type="email"
                placeholder="Enter your email"
                className="input"
              />
              <button className="btn btn-primary">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
