import "./Contact.css";
import linkedInIcon from "../assets/icons/linkedin.svg";
import emailIcon from "../assets/icons/email.svg";
import contactIcon from "../assets/icons/contact.svg";

export default function Contact() {
    //trying to make life a bit harder for web scrapers
    const encEmail = "cGVkcm92YWxlbnRlXzAwQGhvdG1haWwuY29t";
    const email = atob(encEmail)

    const isSmallMobile = window.innerWidth <= 580;
    const linkedInUrl = "https://www.linkedin.com/in/pedro-valente-pedro-valente/"

    return <section className="contact">
        <div className="contact__container">
            <div className="contact__title">
                <img src={contactIcon} alt="Contact" className="contact__icon" />
                Contact Details</div>
            <p className="contact__item">
                <img src={emailIcon} alt="Email" className="contact__icon" />
                {email}</p>
            <p className="contact__item">
                <img src={linkedInIcon} alt="LinkedIn" className="contact__icon" />
                <a href="https://www.linkedin.com/in/pedro-valente-pedro-valente/"
                    target="_blank" rel="noopener noreferrer">
                    {isSmallMobile ? "LinkedIn" : linkedInUrl}</a>
            </p>
        </div>
    </section>
}