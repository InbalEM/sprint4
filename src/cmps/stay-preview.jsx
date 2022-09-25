import React from "react";
import { useParams } from "react-router-dom";

export function StayPreview({ stay }) {
    const params = useParams()
    const { checkIn, checkOut } = params

    // const checkIndDate = new Date(checkIn)
    // const checkOutDate = new Date(checkOut)

    // const checkInMonth = checkIndDate.toLocaleString('en-US', { month: 'short' })
    // const checkOutInMonth = checkOutDate.toLocaleString('en-US', { month: 'short' })

    // let isSameMonth = false

    // if (checkIn && checkOut && checkInMonth === checkOutInMonth) isSameMonth = true

    // console.log('checkIn:', checkIn)
    // console.log('checkOut:', checkOut)
    // console.log('checkInMonth:', checkInMonth)
    // console.log('checkOutInMonth:', checkOutInMonth)
    // console.log('isSameMonth:', isSameMonth)

    return (
        <div key={stay._id} className='stay-preview'>
            <img src={stay.imgUrls[0]} />
            <div>
                <p><span>{stay.loc.city}, {stay.loc.country}</span></p>
                {!checkIn && !checkOut && <p>{stay.loc.address}, {stay.loc.city}</p>}
                {checkIn && checkOut && <p>{stay.summary.slice(0,30)}...</p>}
                {checkIn && checkOut && <p>{stay.beds} beds</p>}
                {/* {isSameMonth  && <p > {checkInMonth} {checkIndDate.getDate()} - {checkOutDate.getDate()} </p>} */}
                <p className="price"><span>${stay.price}</span> night</p>
            </div>
        </div>
    )
}