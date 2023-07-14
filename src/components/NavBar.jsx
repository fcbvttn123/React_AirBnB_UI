import React from "react"
import airbnbLogo from "../../public/images/airbnb-logo.png"

export default function NavBar() {
    return (
        <nav className="main-nav-bar">
            <div className="wrapper wrapper-nav-bar">
                <img src={airbnbLogo} />
            </div>
        </nav>
    )
}