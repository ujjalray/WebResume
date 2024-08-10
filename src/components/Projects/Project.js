import React from "react";
// import './Project.css';

const Project = () => {
    return (
        <div>
            <section id="Whatido">
                <h1>What I Do ?</h1>
                

                <div className="row feature-2">
                    <div className="col-lg-6 col-md-6 feature-web">
                        <h1 className="Feature-Heading">Web Development</h1>
                        <ul className="dev-icon">
                            <li><i className="fab fa-html5 fa-5x" style={{ color: "#e34f26" }}></i></li>
                            <li><i className="fab fa-css3-alt fa-5x" style={{ color: "#1572b6" }}></i></li>
                            <li><i className="fab fa-bootstrap fa-5x" style={{ color: "#543b79" }}></i></li>
                            <li><i className="fab fa-js-square fa-5x" style={{ color: "#f7df1e" }}></i></li>
                            <li><i className="fab fa-react fa-5x" style={{ color: "#61dafb" }}></i></li>
                            <li><i className="fab fa-node fa-5x" style={{ color: "#679e63" }}></i></li>
                            <li><i className="fab fa-figma fa-5x" style={{ color: "#f24e1e" }}></i></li>
                        </ul>
                        <div className="Data-Analytic">
                            <p className="Features-paragraph">
                                💥  Expertise in developing fully responsive website frontends using HTML, CSS, Bootstrap, and JavaScript.
                            </p>
                            <p className="Features-paragraph">
                                💥  Extensive experience with various technologies including React, Node.js, Express, MongoDB, and more.
                            </p>
                            <p className="Features-paragraph">
                                💥 Skilled in using Adobe Photoshop, Illustrator, and Figma for designing user interfaces for websites and mobile applications, as well as in logo creation.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 Feature-second-image">
                        <img className="Feature-svg-image" src="Image/website.svg" alt="" />
                    </div>
                </div>

                <div className="row feature-3">
                    <div className="col-lg-6 col-md-6 Feature-third-image">
                        <img className="Feature-svg-image-3" src="Image/Coding.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 feature-coding">
                        <h1 className="Feature-Heading">Data Structures and Algorithms</h1>
                        <ul className="dev-icon">
                            <li><i className="fas fa-laptop-code fa-4x"></i></li>
                            <li><i className="fas fa-file-code fa-4x" style={{ color: "#a8afcb" }}></i></li>
                        </ul>
                        <div className="Data-Analytic">
                            <p className="Features-paragraph">
                                💥 I have knowledge of Data Structures like Hash Tables, Trees, Tries, Graphs, and various algorithms for solving various problems efficiently.
                            </p>
                            <p className="Features-paragraph">
                                💥 As I know Data Structures and Algorithms are the heart of programming, so I love to solve programming questions in different competitive websites like Codeforces,Leedcode, Hackerrank and many more.
                            </p>
                        </div>
                    </div>
                </div>



                <div className="row feature-1">
                    <div className="col-lg-6 col-md-6 Feature-first-image">
                        <img className="Feature-svg-image" src="Image/Data_Analysis.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h1 className="Feature-Heading">Data Analytics & ML</h1>
                        <ul className="dev-icon">
                            <li><i className="fab fa-python fa-5x" style={{ color: "#3776ab" }}></i></li>
                            <li><img className="numpy" src="Image/numpy-ar21.svg" alt="" /></li>
                            <li><img className="pandas" src="Image/kindpng_5747046.png" alt="" /></li>
                        </ul>
                        <div className="Data-Analytic">
                            <p className="Features-paragraph">
                                💥 Developing Models that clean, transform and analyse raw data to discover useful information, in order to make conclusions about the data.
                            </p>
                            <p className="Features-paragraph">
                                💥 Experience of working with different Python Libraries like Numpy, Pandas, Matplotlib, Seaborn etc. and have knowledge of Data analysis algorithms and techniques.
                            </p>
                        </div>
                    </div>
                </div>













            </section>
        </div>
    );
}

export default Project;
