// Imports //
import * as React from "react"
// icons
import HtmlIcon from "../images/icons/HtmlIcon"
import CssIcon from "../images/icons/CssIcon"
import JavascriptIcon from "../images/icons/JavascriptIcon"
import BootstrapIcon from "../images/icons/BootstrapIcon"


// Render
const Work = () => {
    return (
        <section className='section-work'>
            <div className="work-container">
                <div className="project">
                    <h4>Work Title</h4>
                    <div className="icons">
                        <HtmlIcon></HtmlIcon>
                        <CssIcon></CssIcon>
                        <JavascriptIcon></JavascriptIcon>
                        <BootstrapIcon></BootstrapIcon>
                    </div>
                    <p>Spicy jalapeno bacon ipsum dolor amet pork tongue flank prosciutto, rump ut laborum ham hock sunt cupidatat dolore ut in kevin. Swine sausage shoulder, tenderloin est pork chop ham velit in landjaeger buffalo.</p>
                    <span>Read more</span><button type="button">arrow</button>
                </div>
            </div>
        </section>
    )
}



export default Work