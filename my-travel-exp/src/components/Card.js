import React from 'react'
// import Katie from '../images/Katie.png'
import Star from '../images/star.png'


export default function Card(props) {
    let badgeText
    if (props.item.Openspots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.item.coverImg} alt="" className="card--image" />
            <div className="card--stats">
                <img src={Star} alt="" className="card--star" />
                <span> {props.item.rating} </span>
                <span className="gray">({props.item.stat.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}