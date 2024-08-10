import React from 'react';
import { FaReact } from 'react-icons/fa'; // Import React icon from react-icons
import { SiDialogflow } from 'react-icons/si'; // Dialogflow icon
import './Work.css';

const Work = () => {
  return (
    <div>
      <section id="Projects" className="Section1">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img className="projectimage" src="Image/Project.svg" alt="Projects" />
          </div>
          <div className="col-lg-6 col-md-6 project-heading">
            <h1 className="P-heading">Projects</h1>
            <p className="p-text">
              My projects use various technologies to improve accuracy and stability. Currently, I haven't done many projects, but I plan to create more in the near future.
            </p>
          </div>
        </div>
        <div className="row Section1">
          <div className="col-sm-6">
            <a className="Project-box" href="https://cryptocoin1.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="card boxx">
                <div className="card-body">
                  <h5 className="card-title">CRYPTO COIN</h5>
                  <p className="card-text project-text">
                    Developed a Crypto Coin platform with an intuitive interface for managing crypto portfolios, tracking market
                    trends, and making informed trading decisions with Progressive web app features.
                    – Utilized REST APIs to fetch real-time data, providing users with up-to-date market information and in-depth analysis
                    of multiple cryptocurrencies.Leveraged a modern tech stack, including JavaScript, Node.js, Express, MongoDB, and React.js, to ensure scalability
                    and efficiency, resulting in a smooth and fast user experience.
                    .
                    <FaReact style={{ color: '#61DAFB', fontSize: '2rem', marginRight: '0.5rem' }} />
                    <SiDialogflow style={{ color: '#FF9800', fontSize: '2rem' }} />
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-6">
            <a className="Project-box" href="/" target="_blank" rel="noopener noreferrer">
              <div className="card boxx">
                <div className="card-body">
                  <h5 className="card-title">Pet’s Medicine WebApp</h5>
                  <p className="card-text project-text">
                    Implemented state management using Redux to efficiently manage the application’s state. Integrated various UI libraries Material-UI and Bootstrap to enhance the visual appeal and functionality of the website. Implemented authentication and authorization using JWT (JSON Web Tokens) to secure user data and access.Consumed external APIs to fetch and display relevant information such as  medicine details, and user
                    reviews etc.Monitored database performance and performed regular maintenance tasks such as indexing and backup.

                    <FaReact style={{ color: '#61DAFB', fontSize: '2rem', marginRight: '0.5rem' }} />
                    <SiDialogflow style={{ color: '#FF9800', fontSize: '2rem' }} />
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
