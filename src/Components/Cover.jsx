import Navbar from "./Navbar"
import Splash from "./Splash"

import "./Cover.css"

export default function Cover() {
    return (
        <header className="cover">
            <Navbar />
            <Splash />
        </header>
    )
}