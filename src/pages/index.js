/** Imports **/
import * as React from "react"
//styles
import "../styles.scss"
//components
import Header from "../components/Header";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Footer from "../components/Footer";


// styles
// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }

// const linkStyle = {
//   color: "#8954A8",
//   fontWeight: "bold",
//   fontSize: 16,
//   verticalAlign: "5%",
// }

// const docLinkStyle = {
//   ...linkStyle,
//   listStyleType: "none",
//   marginBottom: 24,
// }


// data
const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial/",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//     color: "#E95800",
//   },
]

// markup
const IndexPage = () => {
  return (
    <main className='section-wrap'>
        <Header />
        <Hero />
        <Work />
        <Footer />
    </main>
  )
}

export default IndexPage
