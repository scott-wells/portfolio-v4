// Imports //
import * as React from "react"
// components
import Project from './project'


// Render
const Work = () => {

    // projects array
const projects = [
    {
        title: 'Albuquerque Church',
        icons: [
            'html', 'css', 'javascript', 'bootstrap', 'react', 'gatsby', 'sanity'
        ],
        desc: 'Spicy jalapeno bacon ipsum dolor amet pork tongue flank prosciutto, rump ut laborum ham hock sunt cupidatat dolore ut in kevin.',
    },
    {
        title: 'Community Educator Interactive Modules',
        icons: [
            'html', 'css', 'javascript'
        ],
        desc: 'Spicy jalapeno bacon ipsum dolor amet pork tongue flank prosciutto, rump ut laborum ham hock sunt cupidatat dolore ut in kevin.',
    },
    {
        title: 'ASU Educator Development',
        icons: [
            'html', 'css', 'javascript'
        ],
        desc: 'Spicy jalapeno bacon ipsum dolor amet pork tongue flank prosciutto, rump ut laborum ham hock sunt cupidatat dolore ut in kevin.',
    },
    {
        title: 'Lisa Meyer-Hagan for State Senate',
        icons: [
            'html', 'css', 'wordpress'
        ],
        desc: 'Spicy jalapeno bacon ipsum dolor amet pork tongue flank prosciutto, rump ut laborum ham hock sunt cupidatat dolore ut in kevin.',
    },
    {
        title: 'Sandy Rausch for State Senate',
        icons: [
            'html', 'css', 'wordpress'
        ],
        desc: 'Spicy jalapeno bacon ipsum dolor amet pork tongue flank prosciutto, rump ut laborum ham hock sunt cupidatat dolore ut in kevin.',
    },
    {
        title: 'ABQ Trails',
        icons: [
            'html', 'css', 'javascript', 'react', 'mapbox'
        ],
        desc: 'Spicy jalapeno bacon ipsum dolor amet pork tongue flank prosciutto, rump ut laborum ham hock sunt cupidatat dolore ut in kevin.',
    },
    {
        title: 'Elizabeth Wells Photography',
        icons: [
            'html', 'css', 'javascript', 'squarespace'
        ],
        desc: 'Spicy jalapeno bacon ipsum dolor amet pork tongue flank prosciutto, rump ut laborum ham hock sunt cupidatat dolore ut in kevin.',
    },
    {
        title: 'Fancy Slideshow',
        icons: [
            'html', 'css', 'javascript'
        ],
        desc: 'Spicy jalapeno bacon ipsum dolor amet pork tongue flank prosciutto, rump ut laborum ham hock sunt cupidatat dolore ut in kevin.',
    },
    {
        title: 'Doge Meme Generator',
        icons: [
            'html', 'css', 'javascript'
        ],
        desc: 'Spicy jalapeno bacon ipsum dolor amet pork tongue flank prosciutto, rump ut laborum ham hock sunt cupidatat dolore ut in kevin.',
    },
]

    return (
        <section className='section-work'>
            <div className="work-container">
            {projects.map((project, index) => {
                <Project key={index} projects={project.title, project.icons, project.desc}></Project>
            })}
            </div>
        </section>
    )
}


export default Work