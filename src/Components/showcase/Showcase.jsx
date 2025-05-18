import Featured from "./Featured"
import yelpcamp from "../../assets/yelpcamp.png";
import todo from "../../assets/todo.png";

export default function Showcase() {

    const featuredProjects = [{
        name: "Yelpcamp",
        image: yelpcamp,
        description: "YelpCamp is a dynamic web application designed to help outdoor enthusiasts discover, review, and share campgrounds. Built as part of Colt Steele's Web Developer Bootcamp, this project showcases a blend of front-end and back-end technologies to create an interactive and user-friendly platform.",
        technologies: {
            frontend: "HTML5, CSS3, Bootstrap 5, JavaScript (ES6+), EJS (Embedded JavaScript Templating)",
            backend: "Node.js with Express.js",
            database: "MongoDB (with Mongoose)",
            auth: "Passport.js and bcrypt",
            deployment: "Render (free-tier hosting with a loading delay)"
        },
        website: "https://yelpcamp-ei7h.onrender.com/",
        github: "https://github.com/PedroValente00/yelpcamp",
    },
    {
        name: "Todo List",
        image: todo,
        description: "Todo List is a full-stack task management web app that lets users add, edit, and delete tasks in a clean and modern interface. Built with the MERN stack, it showcases practical use of component-based design, RESTful APIs, and responsive styling. It allows usage through authentication, or via localStorage.",
        technologies: {
            frontend: "React.js, Vite, Material UI, React Router",
            backend: "Node.js with Express.js",
            database: "MongoDB (with Mongoose)",
            auth: "express-session with connect-mongo and bcrypt",
            deployment: "vercel (free-tier hosting)"
        },
        website: "https://wishlist-three-alpha.vercel.app/",
        github: "https://github.com/PedroValente00/todo-list",
    }]

    return (
        <section className="showcase">
            {
                featuredProjects.map((project, i) => {
                    return <Featured project={project} key={i} />
                })
            }
        </section>
    )
}