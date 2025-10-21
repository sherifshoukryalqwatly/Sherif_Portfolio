import useScrollAnimation from "../hooks/useScrollAnimation.jsx";

function Contact() {
    const ref = useScrollAnimation();
    return <>
        <section id="contact" ref={ref} className=" scroll-section contact-section py-5 bg-light">
            <div className="container text-center">
                <h2 className="fw-bold text-primary mb-4">Contact With Me</h2>
                <p className="mb-5 text-secondary">
                I’d love to hear from you! Whether you want to discuss a project,
                collaboration, or just say hi — feel free to reach out.
                </p>

                <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <form className="p-4 border rounded-3 shadow-sm bg-white">
                    <div className="mb-3 text-start">
                        <label htmlFor="name" className="form-label fw-semibold">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label fw-semibold">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label htmlFor="message" className="form-label fw-semibold">
                        Message
                        </label>
                        <textarea
                        id="message"
                        rows="4"
                        className="form-control"
                        placeholder="Write your message"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 fw-semibold">
                        Send Message
                    </button>
                    </form>
                </div>
                </div>

                <div className="mt-5">
                <p className="text-secondary mb-1">Or connect with me:</p>
                <div className="d-flex justify-content-center gap-3">
                    <a
                    href="mailto:shoukrysherif5@gmail.com"
                    className="text-primary fs-5 text-decoration-none"
                    >
                    <i className="bi bi-envelope"></i> Email
                    </a>
                    <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary fs-5 text-decoration-none"
                    >
                    <i className="bi bi-github"></i> GitHub
                    </a>
                    <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary fs-5 text-decoration-none"
                    >
                    <i className="bi bi-linkedin"></i> LinkedIn
                    </a>
                </div>
                </div>
            </div>
            </section>
    </>
}

export default Contact