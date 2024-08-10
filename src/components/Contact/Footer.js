import React from 'react';
import './Contact.css';

const Footer = () => {
    return (
        <div>

            <section>
                <div className="second-section">
                    <h1 className="connect">Let's connect and build something together!</h1>
                    <a className="sayhello" href="https://www.linkedin.com/in/ujjal-ray-41776b254/">Say Hello <span className="wave">👋</span></a>
                    <div className="col-lg-6 connect-image">
                        <img className="connection" src="Image/connection.svg" alt="Connection" />
                    </div>
                </div>
            </section>
            <footer className="footer">Made with ❤️ by Ujjal Ray</footer>  

        </div>
    )
}

export default Footer
