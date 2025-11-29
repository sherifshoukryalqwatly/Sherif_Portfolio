import useScrollAnimation from "../hooks/useScrollAnimation.jsx";

function Skills() {
    const ref = useScrollAnimation();
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React","Next","Angular", "Bootstrap", "Tailwind CSS"," Material UI"],
            icon: "bi bi-window-sidebar",
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js","Nest.js", "REST APIs","GraphQL"],
            icon: "bi bi-hdd-network",
        },
        {
            title: "Databases",
            skills: ["MongoDB"],
            icon: "bi bi-database",
        },
        {
            title: "Tools & Others",
            skills: ["Git", "GitHub", "Postman", "VS Code"],
            icon: "bi bi-tools",
        },
    ];

    return (
        <section id="skills" ref={ref} className="scroll-section skills-section py-5 bg-light">
        <div className="container text-center">
            <h2 className="fw-bold text-danger mb-4">My Skills</h2>
            <p className="text-secondary mb-5">
            Here are some of the technologies and tools I use to design, build, and deploy modern web applications.
            </p>

            <div className="row gy-4">
            {skillCategories.map((category, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm p-3">
                    <div className="card-body">
                    <div className="mb-3">
                        <i className={`${category.icon} fs-1 text-danger`}></i>
                    </div>
                    <h5 className="fw-bold text-danger mb-3">{category.title}</h5>
                    <ul className="list-unstyled">
                        {category.skills.map((skill, i) => (
                        <li key={i} className="mb-2 text-secondary fw-medium">
                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                            {skill}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};


export default Skills