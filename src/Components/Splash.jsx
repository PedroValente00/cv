import "./Splash.css"
import programmer from '../assets/programmer.png'
import express from "../assets/icons/express.svg"
import node from "../assets/icons/node.svg"
import react from "../assets/icons/react.svg"
import mongodb from "../assets/icons/mongodb.svg"
// import vite from "../assets/icons/vite.svg"

const tech = [
    { name: "MongoDB", src: mongodb, style:{filter:"brightness(1.5)"} },
    { name: "ExpressJs", src: express, style:{filter:"invert(1)"} },
    { name: "React", src: react },
    { name: "NodeJs", src: node, style:{filter:"brightness(1.5)"} }
    // { name: "Vite", src: vite },
]


export default function Splash() {
    return (
        <section className="splash">
            <article className="splash__left">
                <h1>Junior web developer</h1>
                <p className="splash__intro">Building clean, responsive websites with React & Node.js</p>
                <aside className="splash__technologies">
                    {tech.map((t, i) => {
                        return <img src={t.src} alt={t.name} key={i} title={t.name}
                        style={t.style} />
                    })}
                </aside>
            </article>
            <div className="splash__right">
                <img src={programmer} alt="code" className="splash__image" />
            </div>
        </section>
    )
}