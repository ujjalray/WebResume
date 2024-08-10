import React from 'react';

const Intro = () => {
  return (
    <div>
      <section id="Home">
        <div className="row column1">
          <div className="col-lg-6 col-md-6 first-image">
            <img className="boyimage" src="Image/20200630_162659.gif" alt="Ujjal's Image" />
          </div>
          <div className="col-lg-6 section-1">
            <h1 className="Hello">Hello All! I'm Ujjal <span className="wave">👋</span></h1>
            <p>I am a passionate Frontend Web App Developer with experience in Web Development and Competitive Programming. I thrive on problem-solving using C++ and JavaScript. My expertise extends to building websites using the MERN stack, aiming to make a positive impact on those around me.

              Beyond my technical roles, I am a dedicated educator, having mentored over 100+ students in their coding journeys. </p>
            <div className="social_media_icon">
              <a className="btn" href="https://www.instagram.com/ujjal0106/" target="_blank">
                <i className="fab fa-instagram" style={{ color: "#E4405F" }}></i>
              </a>
              <a className="btn" href="https://www.linkedin.com/in/ujjal-ray-41776b254/" target="_blank">
                <i className="fab fa-linkedin" style={{ color: "#0077B5" }} aria-hidden="true"></i>
              </a>
              <a className="btn" href="https://github.com/ujjalray" target="_blank">
                <i className="fab fa-github" style={{ color: "#333" }}></i>
              </a>
              <a className="btn" href="mailto:rayujjal9679@gmail.com" target="_blank">
                <i className="fab fa-google" style={{ color: "#EA4335" }}></i>
              </a>
            </div>
          </div>
          <div className="Image-boy col-lg-6">
            <img className="boy" src="Image/Boy-image.png" alt="Boy" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
