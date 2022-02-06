/** Imports **/
import * as React from "react"
//styles
import "../sass/main.scss"
//components
import Header from "../components/navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Footer from "../components/Footer";


// markup
const IndexPage = () => {
  return (
    <main className="page-wrap">
        <Header />
        <Hero />
        <Skills />
        <Work />
        <Footer />
    </main>
  )
}

export default IndexPage;
