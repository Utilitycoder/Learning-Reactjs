import React from 'react'
// import Katie from '../images/Katie.png'
import Star from '../images/star.png'


export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="" className="card--image" />
            <div className="card--stats">
                <img src={Star} alt="" className="card--star" />
                <span> {props.rating} </span>
                <span className="gray">{props.reviewCount} • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}