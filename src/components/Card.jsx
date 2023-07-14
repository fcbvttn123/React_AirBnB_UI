import React from "react"
import star from "../../public/images/Star.png"

export default function Card(props) {

    let badgeText
    if(props.item.openSpots == 0) {
        badgeText = "SOLD OUT"
    } else {
        badgeText = "ONLINE"
    }

    return (

        <div className="card">

                <div className="photo">
                    <p className="status">{badgeText}</p>
                    <img src={`../../public/images/${props.item.coverImg}`} />
                </div>

                <p className="rating">
                    <img src={star} />
                    <span>{props.item.stats.rating}</span>
                    <span>({props.item.stats.reviewCount})</span>
                    <span> - {props.item.country}</span>
                </p>

                <p className="title">{props.item.title}</p>

                <p className="price">
                    <span>From ${props.item.price}</span> / person
                </p>

        </div>   

    )
}