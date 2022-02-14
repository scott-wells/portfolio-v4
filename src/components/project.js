import * as React from "react"
// icons
import HtmlIcon from "../images/icons/HtmlIcon"
import CssIcon from "../images/icons/CssIcon"
import JavascriptIcon from "../images/icons/JavascriptIcon"
import BootstrapIcon from "../images/icons/BootstrapIcon"

// Render
const Project = ({ title, icons, desc }) => {
    return (
        <div className="project">
            {/* <h4>Work Title</h4> */}
            {/* <div className="icons">
                <HtmlIcon></HtmlIcon>
                <CssIcon></CssIcon>
                <JavascriptIcon></JavascriptIcon>
                <BootstrapIcon></BootstrapIcon>
            </div> */}
            {/* <p>Spicy jalapeno bacon ipsum dolor amet pork tongue flank prosciutto, rump ut laborum ham hock sunt cupidatat dolore ut in kevin. Swine sausage shoulder, tenderloin est pork chop ham velit in landjaeger buffalo.</p> */}
            {/* {projects.map((project, index) => {
                    return(
                        <>
                            <h4 key={index}>
                                {project.title}
                            </h4>
                            {project.icons.map((icon, key) => {
                                return (
                                    <div className="icons" key={key}>{icon}</div>
                                )
                            })}
                            <p key={index}>{project.desc}</p>
                        </>
                    )
                })}
                {projects.map((project, key) => {
                    return (
                        <p>{project.icons[0]}</p>
                    )
                })}
                {projects.map((project, key) => {
                    return (
                        <p key={key}>{project.desc}</p>
                    )
                })} */}
                <h4>{title}</h4>
            <span>Read more</span><button type="button">arrow</button>
        </div>
    )
}



export default Project