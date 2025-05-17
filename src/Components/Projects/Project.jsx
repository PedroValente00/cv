import "./Project.css";
import yelpcamp from "../../assets/yelpcamp.png";
import newTabIcon from "../../assets/icons/newTab.svg";
export default function Project() {
    return (
        <section className="project">
            <aside className="project__left">
                <img src={yelpcamp} alt="image" className="project__image" />
            </aside>
            <article className="project__right">
                <div>
                    <h1>Yelpcamp</h1>
                    <section>
                        <p>YelpCamp is a dynamic web application designed to help outdoor enthusiasts discover, review, and share campgrounds. Built as part of Colt Steele's Web Developer Bootcamp, this project showcases a blend of front-end and back-end technologies to create an interactive and user-friendly platform.</p>
                        <span className="underlined">Technologies used</span>
                        <ul aria-label="Technologies Used">
                            <li>Frontend: HTML5, CSS3, Bootstrap 5, JavaScript (ES6+), EJS (Embedded JavaScript Templating)</li>
                            <li>Backend: Node.js with Express.js</li>
                            <li>Database: MongoDB</li>
                            <li>Authentication: Passport.js</li>
                            <li>Deployment: Render (free-tier hosting with a loading delay)</li>
                        </ul>
                    </section>

                </div>
                <nav className="project__nav">
                    <a href="https://github.com/PedroValente00/yelpcamp" target="_blank" rel="noopener noreferrer">
                        <button className="project__button">View details on Github<img src={newTabIcon} /></button>
                    </a>
                    <a href="https://yelpcamp-ei7h.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <button className="project__button">Visit website<img src={newTabIcon} /></button>
                    </a>
                </nav>
            </article>
        </section>
    )
}