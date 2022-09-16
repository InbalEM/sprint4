import React from "react";

export function StayPreview({ stay }) {
    return (
        <React.Fragment>
            <div><img src={stay.imgUrls[0]} /></div>
            <div>
                <h4>{stay.loc.city}, {stay.loc.country}</h4>
                <p>{stay.loc.address}, {stay.loc.city}</p>
                <p>{stay.capacity.bed} bads</p>
                <p>Oct 12-18</p>
                <p>$<span>{stay.price}</span> night</p>
            </div>
        </React.Fragment>
    )
}