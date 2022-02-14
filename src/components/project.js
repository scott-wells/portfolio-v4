import * as React from "react"
// icons
import HtmlIcon from "../images/icons/HtmlIcon"
import CssIcon from "../images/icons/CssIcon"
import JavascriptIcon from "../images/icons/JavascriptIcon"
import BootstrapIcon from "../images/icons/BootstrapIcon"

// Render
const Project = ({ project: { title, icons, desc } }) => {
    return (
        <div className="project">
            <h4>{title}</h4>
            {icons.map((icon, index) => {
                return(
                    <span key={index} className="icons">{icon}</span>
                )
            })}
            <p>{desc}</p>
            <span>Read more</span><button type="button">arrow</button>
        </div>
    )
}



export default Project