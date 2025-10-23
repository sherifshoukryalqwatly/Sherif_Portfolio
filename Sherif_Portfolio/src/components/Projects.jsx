import useScrollAnimation from "../hooks/useScrollAnimation.jsx";

function Projects() {
    const ref = useScrollAnimation();
    const projects = [
        {
            title: "AI Multi-Agent System",
            description:
                "An advanced AI platform using LangChain for multi-agent collaboration, tool calling, and knowledge retrieval (RAG).",
            tech: ["Node.js", "LangChain", "React"],
            image: "/react.jpg",
            github: "https://github.com/yourusername/ai-multi-agent",
            live: "https://yourapp.vercel.app/",
        },
        {
        title: "Booking & Listing Platform",
        description:
            "A full-stack web app where hosts publish listings and guests can book them. Integrated Stripe and PayPal for payments.",
        tech: ["Express", "MongoDB", "Stripe", "React"],
        image: "/react.jpg",
        github: "https://github.com/yourusername/booking-app",
        live: "https://booking-app.vercel.app/",
        },
        {
        title: "Player Transfer Dashboard",
        description:
            "An admin dashboard to manage player and coach transfers with analytics, approval system, and KPI tracking.",
        tech: ["React", "Tailwind", "Express", "MongoDB"],
        image: "/react.jpg",
        github: "https://github.com/yourusername/player-dashboard",
        live: "https://dashboard.vercel.app/",
        },
    ];

    return (
        <section id="projects" ref={ref} className="scroll-section projects-section py-5 bg-light">
        <div className="container text-center">
            <h2 className="fw-bold text-danger mb-4">My Projects</h2>
            <p className="text-secondary mb-5">
            Here are some of my favorite projects that showcase my skills in full-stack development.
            </p>

            <div className="row gy-4">
            {projects.map((project, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                    <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    />
                    <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-danger fw-bold">
                        {project.title}
                    </h5>
                    <p className="card-text text-secondary flex-grow-1">
                        {project.description}
                    </p>

                    <div className="mb-3">
                        {project.tech.map((t, i) => (
                        <span
                            key={i}
                            className="badge bg-danger-subtle text-danger border border-danger me-1"
                        >
                            {t}
                        </span>
                        ))}
                    </div>

                    <div>
                        <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-danger btn-sm me-2"
                        >
                        Live Demo
                        </a>
                        <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-danger btn-sm"
                        >
                        GitHub
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}

export default Projects