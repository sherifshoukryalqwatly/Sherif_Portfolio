import useScrollAnimation from "../hooks/useScrollAnimation.jsx";

function About() {
    const ref = useScrollAnimation();
    return (
    <section id="about" ref={ref} className="scroll-section about-section py-5 bg-white">
        <div className="container">
            <div className="row align-items-center">
            {/* Left side — Image */}
            <div className="col-md-5 text-center mb-4 mb-md-0">
                <img
                src="myPhoto.jpg" // place your image inside public/images
                alt="Sherif Shukri"
                className="img-fluid rounded-circle shadow-sm about-img"
                width="250"
                height="250"
                />
            </div>

            {/* Right side — Text */}
            <div className="col-md-7">
                <h2 className="fw-bold text-danger mb-3">About Me</h2>
                <p className="text-secondary fs-5">
                Hi! I’m <span className="fw-semibold text-danger">Sherif Shukri</span>,
                a passionate <span className="fw-semibold">Full-Stack Developer</span> skilled in
                <span className="text-danger"> React, Node.js, Express, and MongoDB</span>.
                I love building dynamic, user-friendly web applications that solve real-world problems.
                </p>
                <p className="text-secondary fs-5">
                My focus is on writing clean, efficient, and scalable code — from responsive
                frontend interfaces to robust backend APIs.
                I’m always learning new technologies and pushing myself to improve as a developer.
                </p>

                <div className="mt-4">
                <a href="#projects" className="btn btn-danger me-3">
                    View My Projects
                </a>
                <a href="/Sherif Shukri ALQwatli.pdf" className="btn btn-outline-danger" download>
                    My Ruseme
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default About