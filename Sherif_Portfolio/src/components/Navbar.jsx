function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light px-4 py-2 fixed-top shadow-sm">
                <div className="container-fluid">
                    {/* Brand */}
                    <a className="navbar-brand text-danger fw-bold fs-1" href="#home">
                    Q
                    </a>

                    {/* Toggler Button (hamburger) */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-lg-4 text-center">
                        <li className="nav-item">
                        <a className="nav-link active nav-link-custom text-light fs-5" href="#home">
                            Home
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link nav-link-custom text-light fs-5" href="#about">
                            About
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link nav-link-custom text-light fs-5" href="#skills">
                            Skills
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link nav-link-custom text-light fs-5" href="#projects">
                            Projects
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link nav-link-custom text-light fs-5" href="#contact">
                            Contact
                        </a>
                        </li>
                        <li className="nav-item">
                        <a
                            className="btn btn-danger ms-lg-3 mt-2 mt-lg-0 fs-5"
                            href="/Sherif Shukri ALQwatli.pdf"
                            download
                        >
                            Resume
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar
