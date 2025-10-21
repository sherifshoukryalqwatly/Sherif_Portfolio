import Hero from "../components/Hero.jsx"
import Projects from "../components/Projects.jsx"
import About from "../components/About.jsx"
import Skills from "../components/Skills.jsx"
import Contact from "../components/Contact.jsx"
function Home() {
    return <>
        <div>
            <Hero/>
            <div className="container-fluid">
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        </div>
    </>
}

export default Home