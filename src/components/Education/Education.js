import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div>
  

            <section>
                <div className="container">
                    <div className="Heading">
                        <h1>Degrees Received</h1>
                        <br />
                    </div>
                    <div className="timeline">
                        <div className="timeline-month">Education</div>
                        <div className="timeline-section">
                            <div className="timeline-date">
                                2019 - 2022
                            </div>
                            <div className="row">
                                <div className="col-lg">
                                    <div className="timeline-box">
                                        <div className="box-title">
                                            <i className="fas fa-graduation-cap" aria-hidden="true"></i>Maulana Abul Kalam Azad University of Technology, Kolkata
                                            <p className="degree">Bachelor of Computer Application</p>
                                        </div>
                                        <div className="box-content">
                                           
                                            <div className="box-item">💥 I have studied software engineering subjects like Data Structures, Algorithms, DBMS, OS, CA, CN etc.</div>
                                            <div className="box-item"><b>💥 CGPA</b>: 8.6/10.0 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-section">
                            <div className="timeline-date">
                                2018-2019
                            </div>
                            <div className="row">
                                <div className="col-lg">
                                    <div className="timeline-box">
                                        <div className="box-title">
                                            <i className="fas fa-school" aria-hidden="true"></i> Higher Secondary Education,Kolkata <p className="degree">Sonapur B.k High School</p>
                                        </div>
                                        <div className="box-content">
                        
                                            <div className="box-item">💥 I have studied the subjects Physics, Chemistry, Mathematics etc. </div>
                                            <div className="box-item"><b>💥CGPA:</b>:CGPA: 7.2/10.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
        </div>
    )
}

export default Education;
