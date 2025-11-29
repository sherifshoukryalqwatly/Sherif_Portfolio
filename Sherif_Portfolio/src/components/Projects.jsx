import useScrollAnimation from "../hooks/useScrollAnimation.jsx";

function Projects() {
    const ref = useScrollAnimation();
    const projects = [
        {
            title: "Maskn (Real Estate Rental Platform)",
            description:
                "A full-stack rental platform where hosts can publish property listings (with admin approval) and guests can book, review, and interact with them",
            tech: [" Express.js", "MongoDB Atlas", "Swagger","SendGrid","Nodemailer","Multer","Cloudinary","RAG (AI Chatbot)","React","Angular"],
            image: "https://res.cloudinary.com/deuxt0stn/image/upload/v1754995944/hero_f71osg.jpg",
            github: "https://github.com/AbdullaNassar/Maskan.git",
            live: "https://maskn.netlify.app/home",
        },
        {
            title: "Koora App",
            description:
                "seamless ecommerce app specialized in sporting goods. Explore high-quality sportswear, gear, and accessories with fast delivery, secure checkout, and a smooth shopping experience",
            tech: ["Angular", "Bootstrap"],
            image: "https://africastoreas.com/storage/app/public/banner/2025-10-17-68f1f469b7406.webp",
            github: "https://github.com/sherifshoukryalqwatly/Al-Khalifa-UI.git",
            live: "https://jolly-valkyrie-2ffc1d.netlify.app/home",
        },
        {
            title: "Makeup Artist APP",
            description:
                "The Makeup Artist Backend is a robust server-side application designed to manage bookings, services, portfolios, and client interactions for professional makeup artists. It provides secure authentication, organized data management, and seamless API endpoints for powering a smooth and efficient user experience on the frontend",
            tech: ["Express", "MongoDB Atlas", "Swagger", "SendGrid","Multer","Cloudinary","Passport"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-sdRIvQxSBfArITwaURCNiCo1hu9Vf_uEQ&s",
            github: "https://github.com/Minamaher-sw/MakeupArtistBackend.git",
            live: "#",
        },
        {
            title: "Movie App",
            description:
                ": A modern movies app that lets you explore films, view details, watch trailers, and save your favorites — all in one smooth, fast experience",
            tech: ["Angular"," (TMDB) API"],
            image: "/7cM6SF.jpg",
            github: "https://github.com/sherifshoukryalqwatly/Angular-Movie-App.git",
            live: "https://reliable-cobbler-cd2a58.netlify.app",
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