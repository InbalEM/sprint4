import React from "react";

export function StayPreview({ stay }) {
    return (
        <React.Fragment>
<<<<<<< HEAD
            <div><img src={stay.imgUrls[0]}/></div>
            <div>
                <h4>{stay.loc.city}, {stay.loc.country}</h4>
                <p>{stay.loc.address}, {stay.loc.city}</p>
                <p>{stay.capacity.guests} bads</p>
                <p>Oct 12-18</p>
                <p>$<span>{stay.price}</span> night</p>
            </div>
=======
            <div><img src={stay.imgUrls[0]} alt="" /></div>
            <h4>{stay.loc.city}, {stay.loc.country}</h4>
            <p>{stay.loc.address}, {stay.loc.city}</p>
            <p>{stay.capacity.guests} bads</p>
            <p>Oct 12-18</p>
            <p>$<span>{stay.price}</span> night</p>
>>>>>>> 3e69fae230a774594ae6a1f9447348f25490b481
        </React.Fragment>
    )
}