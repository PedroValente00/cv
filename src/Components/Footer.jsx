import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
          <section>Pedro Valente</section>
          <section> &copy; {new Date().getFullYear()}</section>
        </footer>
    )
}