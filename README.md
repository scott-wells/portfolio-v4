# Scott Wells Portfolio
----

### Why another portfolio?
The purpose of this project is 1) to obviously showcase projects that I'm working on for prospective employers or clients, but also 2) it is to learn Gatsby more in-depth and to add features over time. At the beginning I will Gatsby's router and Sass intergration. Later on, I intend to add a blog and connect it to a headless CMS, like Sanity. I would also like to explore Gatsby image processing and how image heavy websites can remain performant.

##### Feb. 6th
Moved files. Renamed some components. Started working on the navbar. Made a burger menu for mobile. This was done by adding a toggle onClick and a '.hide' CSS class. Added styled components to get the background image working. Styled hero and navbar for desktop.

##### Feb. 7th
Spent the day creating the skills section of the site. Created new icon images, added copy, and styled for mobile and desktop.

##### Feb. 9th
My site Google font was loading a split second after the rest of the site. It was noticable and annoying, so I went searching for a way to have it load without artifacting. I found a Gatsby plugin, "gatsby-plugin-google-fonts" that solved this issue.

##### Feb. 10th
Only had time for a little coding this evening. Finished styling a card component. I'm really starting to like CSS Grid. It solves so many problems that I was having with Flexbox. Namely, aligning text and buttons across multiple cards in a row, and making sure everything looks uniform.

##### Feb. 13th
Spent the evening trying to loop through data and pass that data to unique components. (I probably should watch a tutorial, because I'm not passing props the correct way to the component.) It's fine though. The component looks good. Just need to get the correct data into it.
*Edit: Got it working!*

todo:
- make component to link to portfolio project pages
- style them in a grid for mobile and desktop
- create unique project components with correct links
- - project page has large thumb
- - title
- - description with more images if necessary (image slideshow?)
- - or description and link to actual website