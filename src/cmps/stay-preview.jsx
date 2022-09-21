import React from "react";

export function StayPreview({ stay }) {
    return (
            <div key={stay._id} className='stay-preview'>
                <img src={stay.imgUrls[0]} />
                <div>
                    <p><span>{stay.loc.city}, {stay.loc.country}</span></p>
                    <p>{stay.loc.address}, {stay.loc.city}</p>
                    {/* <p>{stay.capacity.guests} beds</p> */}
                    <p>Oct 12-18</p>
                    <p className="price"><span>${stay.price}</span> night</p>
                </div>
            </div>
    )
}