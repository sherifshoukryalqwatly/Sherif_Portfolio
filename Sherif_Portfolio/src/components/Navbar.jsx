function Navbar() {
    return (
        <nav className="navbar-custom d-flex justify-content-between align-items-center px-5 py-3">
            <h2 className="m-0 text-primary fw-bold fs-1">Q</h2>
            <ul className="d-flex gap-5 list-unstyled m-0 fs-5">
                <li><a className="nav-link-custom" href="#">Home</a></li>
                <li><a className="nav-link-custom" href="#projects">Projects</a></li>
                <li><a className="nav-link-custom" href="#about">About</a></li>
                <li><a className="nav-link-custom" href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar
