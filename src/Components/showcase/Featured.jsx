import "./Featured.css";
import newTabIcon from "../../assets/icons/newTab.svg";

export default function Featured({ project }) {
    const isEven = project.id % 2 === 0;

    return (
        <section className="project__container" >
            <h2 className="project__name">{project.name}</h2>
            <div className={isEven ? "project project__even" : "project project__odd"}>
                <aside>
                    <img src={project.image} alt="image" className="project__image" />
                </aside>
                <article className="project__article">
                    <div>
                        <section className="project__description">
                            <p>{project.description}</p>
                            <ul className="project__ul" aria-label="Technologies Used">
                                <li>Frontend:{project.technologies.frontend}</li>
                                <li>Backend{project.technologies.backend}</li>
                                <li>Database:{project.technologies.database} </li>
                                <li>Authentication: {project.technologies.auth}</li>
                                <li>Deployment: {project.technologies.deployment}</li>
                            </ul>
                        </section>

                    </div>
                    <nav className="project__nav">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <button className="project__button">View details on Github<img src={newTabIcon} /></button>
                        </a>
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                            <button className="project__button">Visit website<img src={newTabIcon} /></button>
                        </a>
                    </nav>
                </article>
            </div>
        </section>
    )
}