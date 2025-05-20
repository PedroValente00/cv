import pedro from "../../assets/Pedro.jpg"
import "./About.css"
export default function About() {
                
    return (
        <section className="about" id="about">
            <img src={pedro} alt="Picture of me" className="about__picture" />
            <article className="about__description">
                <p>
                    With over a decade of experience in customer service and support roles across diverse industries, I bring
                    very strong skills around communication, teamwork, problem-solving and analytical thinking.
                    These are skills that are essential in the world of web development.
                </p>
                <p>
                    My background has equipped me with the ability to understand user behavior and needs, identify pain points,
                    and deliver practical, user-focused solutions that meet both business requirements and customer expectations.
                    I thrive in collaborative settings, value continuous learning, and am committed to building
                    user-friendly and accessible web experiences.
                </p>
            </article>
        </section>
    )
}