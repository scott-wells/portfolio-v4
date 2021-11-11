// imports
import React from "react";

const Skills = () => {
    return (
        <section className="section-skills px-2 py-5">
            <div className="skills-first">
                <img className="skills-dots" src="https://res.cloudinary.com/abq-trails/image/upload/v1636613218/scott-wells/img/dots-01.png" />
                <img src="https://res.cloudinary.com/abq-trails/image/upload/v1636609399/scott-wells/img/icon_ux-01.png" alt="ux icon" />
                <h3>UX/UI</h3>
                <p className="px-5">Expertise in user interface design. For humans, not bots.</p>
            </div>
            <hr className="skills-line m-5"/>
        </section>
    );
}

export default Skills;