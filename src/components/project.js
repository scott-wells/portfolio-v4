import * as React from "react"
// icons
import HtmlIcon from "../images/icons/HtmlIcon"
import CssIcon from "../images/icons/CssIcon"
import JavascriptIcon from "../images/icons/JavascriptIcon"
import BootstrapIcon from "../images/icons/BootstrapIcon"
import SassIcon from "../images/icons/SassIcon"
import reactIcon from "../images/icons/react-logo.png"
import gatsbyIcon from "../images/icons/GatsbyIcon.png"
import WordpressIcon from "../images/icons/WordpressIcon"
import squarespaceIcon from "../images/icons/squarespace-logo.png"
import mapboxIcon from "../images/icons/mapbox-logo.png"

// Render
const Project = ({ project: { title, icons, desc } }) => {
    
    const html = <HtmlIcon></HtmlIcon>

    return (
        <div className="project">
            <h4>{title}</h4>
            <div className="icons">
                // loop through the icons and display the appropriate tech logo
                {icons.map((icon, index) => {
                    if(icon === 'html') {
                        return (
                            <span key={index}><HtmlIcon></HtmlIcon></span>
                        )
                    }  
                    else if(icon === 'css') {
                        return (
                            <span key={index}><CssIcon></CssIcon></span>
                        )
                    }  
                    else if(icon === 'js') {
                        return (
                            <span key={index}><JavascriptIcon></JavascriptIcon></span>
                        )
                    }  
                    else if(icon === 'bootstrap') {
                        return (
                            <span key={index}><BootstrapIcon></BootstrapIcon></span>
                        )
                    }  
                    else if(icon === 'sass') {
                        return (
                            <span key={index}><SassIcon></SassIcon></span>
                        )
                    }  
                    else if(icon === 'react') {
                        return (
                            <img key={index} src={reactIcon} alt="react icon"/>
                        )
                    }  
                    else if(icon === 'gatsby') {
                        return (
                            <img key={index} src={gatsbyIcon} alt="gatsby icon"/>
                        )
                    }  
                    else if(icon === 'wordpress') {
                        return (
                            <span key={index}><WordpressIcon></WordpressIcon></span>
                        )
                    }  
                    else if(icon === 'squarespace') {
                        return (
                            <img key={index} src={squarespaceIcon} alt="squarespace icon"/>
                        )
                    } 
                    else if(icon === 'mapbox') {
                        return (
                            <img key={index} src={mapboxIcon} alt="mapbox icon"/>
                        )
                    } 
                })}
            </div>
            <p>{desc}</p>
            <span>Read more</span><button type="button">arrow</button>
        </div>
    )
}

export default Project