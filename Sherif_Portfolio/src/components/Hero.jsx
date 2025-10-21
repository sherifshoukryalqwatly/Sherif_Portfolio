import Navbar from './Navbar.jsx'
function Hero() {
    return <>
        <div className="hero d-flex flex-column">
            <Navbar />
            <div className="hero-content d-flex flex-column justify-content-center align-items-center text-center flex-grow-1"
                id='home'>
                <h1 className="display-3 fw-bold text-white fade-in">Welcome, I'm <span className="text-primary">Sherif Shukrii</span></h1>
                <h3 className="text-light fade-in" style={{ animationDelay: "0.5s" }}>
                    Full-Stack <span className="text-primary fw-bold">MEARN</span> Developer
                </h3>
                <p className="lead text-light fade-in" style={{ animationDelay: "1s" }}>
                    I build modern, scalable web applications with MongoDB, Express, React, Next, Angular, and Node.js.
                </p>
                <div className="mt-4 fade-in" style={{ animationDelay: "1.5s" }}>
                    <a href="#projects" className="btn btn-primary btn-lg me-3">View Projects</a>
                    <a href="#contact" className="btn btn-outline-light btn-lg">Contact Me</a>
                </div>
            </div>
        </div>
    </>
}
export default Hero