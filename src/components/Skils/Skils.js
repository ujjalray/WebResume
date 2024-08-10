import React from 'react';
import './Skils.css'; // Ensure the path to the CSS file is correct
import { Icon } from '@iconify/react';
import cplusplusIcon from '@iconify/icons-logos/c-plusplus';
import cIcon from '@iconify/icons-logos/c';
import pythonIcon from '@iconify/icons-logos/python';
import html5Icon from '@iconify/icons-logos/html-5';
import css3Icon from '@iconify/icons-logos/css-3';
import javascriptIcon from '@iconify/icons-logos/javascript';
import databaseIcon from '@iconify/icons-dashicons/database';
import reactIcon from '@iconify/icons-logos/react';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import typescriptIcon from '@iconify/icons-logos/typescript';



const Skills = () => {
    return (
        <div>
            <section className="Section1">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <img className="skill-img" src="Image/Skills.svg" alt="Skills" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div id="SkillBox">
                            <div className="Skill-heading">Proficiency</div>








                            <div className="SkillBar">
                                <div id="Skill-React">
                                    <Icon icon={reactIcon} className="Skill-Area" width="35" height="35" />
                                </div>
                            </div>

                            <div className="SkillBar">
                                <div id="Skill-JS">
                                    <Icon icon={javascriptIcon} className="Skill-Area" width="35" height="35" />
                                </div>
                            </div>

                            <div className="SkillBar">
                                <div id="Skill-HTML">
                                    <Icon icon={html5Icon} className="Skill-Area" width="35" height="35" />
                                </div>
                            </div>
                            <div className="SkillBar">
                                <div id="Skill-CSS">
                                    <Icon icon={css3Icon} className="Skill-Area" width="35" height="35" />
                                </div>
                            </div>
                          
                            <div className="SkillBar">
                                <div id="Skill-SQL">
                                    <Icon icon={databaseIcon} className="Skill-Area" width="35" height="35" style={{ color: 'black' }} />
                                </div>
                            </div>

                            <div className="SkillBar">
                                <div id="Skill-MongoDB">
                                    <Icon icon={mongodbIcon} className="Skill-Area" width="35" height="35" />
                                </div>
                            </div>
                            <div className="SkillBar">
                                <div id="Skill-TypeScript">
                                    <Icon icon={typescriptIcon} className="Skill-Area" width="35" height="35" />
                                </div>
                            </div>




                            <div className="SkillBar">
                                <div id="Skill-Cplus">
                                    <Icon icon={cplusplusIcon} className="Skill-Area" width="35" height="35" />
                                </div>
                            </div>
                            <div className="SkillBar">
                                <div id="Skill-C">
                                    <Icon icon={cIcon} className="Skill-Area" width="35" height="35" />
                                </div>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;
