import "./Navbar.css"
import logo from '/logo.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
            <section className="navbar__left">
                <ul className="navbar__list">
                    <img src={logo} alt="logo" className="navbar__image" />
                    <h1 className="navbar__title">Pedro Valente</h1>
                </ul>
            </section>

            <section className="navbar__right">
                <ul className="navbar__list">
                    <li className="navbar__item"><a href="#about">About</a></li>
                    <li className="navbar__item"><a href="#skills">Skills</a></li>
                    <li className="navbar__item"><a href="#projects">Projects</a></li>
                    <li className="navbar__item"><a href="#contact">Contact</a></li>
                </ul>
            </section>
        </nav>
    )
}