/** Imports **/
import * as React from "react"
//styles
import "../sass/main.scss"
//components
import Header from '../components/header'
import Skills from '../components/skills'
import Work from "../components/work"
import Footer from "../components/footer"


// markup
const IndexPage = () => {
  return (
    <main className="page-wrap">
        <Header />
        <Skills />
        <Work />
        <Footer />
    </main>
  )
}

export default IndexPage;
