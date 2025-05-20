import "./Contact.css";
import linkedInIcon from "../assets/icons/linkedin.svg";
import emailIcon from "../assets/icons/email.svg";
import contactIcon from "../assets/icons/contact.svg";
import githubIcon from "../assets/icons/github.svg";

export default function Contact() {
    //trying to make life a bit harder for web scrapers
    // const encEmail = "cGVkcm92YWxlbnRlXzAwQGhvdG1haWwuY29t";
    // const email = atob("cGVkcm92YWxlbnRlXzAwQGhvdG1haWwuY29t")
    

    const isSmallMobile = window.innerWidth <= 580;

    const contacts = [
        {
            name: "Email",
            img: emailIcon,
            url: atob("cGVkcm92YWxlbnRlXzAwQGhvdG1haWwuY29t"),
        },
        {
            name: "LinkedIn",
            img: linkedInIcon,
            url: "https://www.linkedin.com/in/pedro-valente-pedro-valente",
        },
        {
            name: "GitHub",
            img: githubIcon,
            url: "https://github.com/PedroValente00"
        }
    ]

    return <section className="contact">
        <div className="contact__container">
            <div className="contact__title"><img src={contactIcon} alt="Contact" className="contact__icon" />Contact Details</div>

            {contacts.map((contact,index)=> {
                return <p key={index} className="contact__item">
                    <img src={contact.img} alt={contact.name} className="contact__icon" />
                    {
                        contact.name === "Email" ?  contact.url 
                        :
                        <a href={contact.url} target="_blank" rel="noopener noreferrer">
                            {contact.name === "LinkedIn" && isSmallMobile ? contact.name : contact.url}
                            </a>
                        
                    }
                    </p>
                    
            })}
            
            {/* {contacts.map((contact,index)=> {
                return <p key={index} className="contact__item">
                    <img src={contact.img} alt={contact.name} className="contact__icon" />
                    {contact.url}
                </p>
            })} */}



            {/* <p className="contact__item"><img src={emailIcon} alt="Email" className="contact__icon" />{email}</p> */}
            {/* <p className="contact__item"><img src={linkedInIcon} alt="LinkedIn" className="contact__icon" />
                <a href="https://www.linkedin.com/in/pedro-valente-pedro-valente/"
                    target="_blank" rel="noopener noreferrer">
                    {isSmallMobile ? "LinkedIn" : linkedInUrl}</a>
            </p> */}
                
        </div>
    </section>
}