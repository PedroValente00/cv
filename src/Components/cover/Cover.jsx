import Navbar from "./navbar/Navbar"
import Splash from "./splash/Splash"

import "./Cover.css"

export default function Cover() {
    return (
        <header className="cover">
            <Navbar />
            <Splash />
        </header>
    )
}