import {useState, useRef} from "react"
import {links, social} from "./data"
import {FaBars} from "react-icons/fa"
import logo from "./logo.svg"

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    const linkStyle = {
        height: showLinks
            ? `${linksRef.current.getBoundingClientRect().height}px`
            : "0px",
    }

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img className="logo" src={logo} alt="logo" />
                    <button
                        className="nav-toggle"
                        type="button"
                        onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                <div
                    className="links-container"
                    ref={linksContainerRef}
                    style={linkStyle}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const {id, url, text} = link
                            return (
                                <li key={id}>
                                    <a className="link" href={url}>
                                        {text}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="social-icons">
                    <ul className="links">
                        {social.map((link) => {
                            const {url, icon} = link
                            return (
                                <li>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
