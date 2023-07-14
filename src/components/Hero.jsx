import React from "react"
import HeroImage from "../../public/images/hero-img.png"

export default function Hero() {
    return (
        <main className="main-hero">
            <div className="wrapper">
                <img src={HeroImage} />
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
            </div>
        </main>
    )
}