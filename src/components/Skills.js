// imports
import React from "react";
// images
import skillImage1 from "../images/icon_ux-01.png"
import skillImage2 from "../images/icon_web_01.png"
import skillImage3 from "../images/icon_design_01.png"

const Skills = () => {
    return (
        <section className="section-skills">
            <div className="skills-container">
                <div className="skills"><img src={skillImage1} alt="ux icon"/>
                    <h3>UX/UI</h3>
                    <p>Expertise in user interface design. For humans, not bots.</p>
                </div>
                <div className="skills">
                    <img src={skillImage2} alt="web icon"/>
                    <h3>Web</h3>
                    <p>Development on the front end and in the JAMStack.</p>
                </div>
                <div className="skills">
                    <img src={skillImage3} alt="web icon"/>
                    <h3>Design</h3>
                    <p>If you need page layout, motion graphics, or icons, I'm your guy.</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;