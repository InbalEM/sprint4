import React from "react";


export function StayPreview({ stay }) {
    console.log('stay.img:', stay)
    return (
        <React.Fragment>
            <div><img src={stay.imgUrls[0]} alt="" /></div>
            <div>
            <h4>{stay.loc.city}, {stay.loc.country}</h4>
            <p>{stay.loc.address}, {stay.loc.city}</p>
            <p>{stay.capacity} bads</p>
            <p>Oct 12-18</p>
            <p>$<span>{stay.price}</span> night</p>
            </div>
        </React.Fragment>
    )
}