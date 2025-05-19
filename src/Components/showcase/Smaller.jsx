import "./Smaller.css";
import newTabIcon from "../../assets/icons/newTab.svg";
import news from "../../assets/news.png";
import movies from "../../assets/movies.png";
import calculator from "../../assets/calculator.png";
import portfolio from "../../assets/portfolio.png";

export default function Smaller() {

    const oldProjects  = [
        {
            name: "News Outlet",
            image: news,
            website: "https://pedrovalente00.github.io/news-gallery/root/",
        },
        {
            name: "Movies and TvShows",
            image: movies,
            website: "https://pedrovalente00.github.io/tv-shows/",
        },
        {
            name: "Simple calculator",
            image: calculator,
            website: "https://pedrovalente00.github.io/calculator/",
        },
        {
            name: "Old portfolio",
            image: portfolio,
            website: "https://pedrovalente00.github.io/simple-portfolio/root/",
        }
    ]

    return (
        <section className="smaller__section">

            {
                oldProjects.map((oldProjects, i)=> {
                    return (
                        <figure key={i}>
                            <img src={oldProjects.image} alt="news outlet" className="smaller__image" />
                            <figcaption>{oldProjects.name}</figcaption>
                            <a href={oldProjects.website} target="_blank" rel="noopener noreferrer">
                                <button className="smaller__button">Visit website<img src={newTabIcon} /></button>
                            </a>
                        </figure>
                    )
                }) 
            }
        </section>
    )
}