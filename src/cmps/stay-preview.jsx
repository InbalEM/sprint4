import { Star } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router-dom";
import { stayService } from "../services/stay.service";

export function StayPreview({ stay }) {
    
    const params = useParams()
    const { checkInDate, checkOutDate } = params
    if (!stay)return
    // const checkInDatedDate = new Date(checkInDate)
    // const checkOutDateDate = new Date(checkOutDate)

    // const checkInDateMonth = checkInDatedDate.toLocaleString('en-US', { month: 'short' })
    // const checkOutDateInMonth = checkOutDateDate.toLocaleString('en-US', { month: 'short' })

    // let isSameMonth = false

    // if (checkInDate && checkOutDate && checkInDateMonth === checkOutDateInMonth) isSameMonth = true

    // console.log('checkInDate:', checkInDate)
    // console.log('checkOutDate:', checkOutDate)
    // console.log('checkInDateMonth:', checkInDateMonth)
    // console.log('checkOutDateInMonth:', checkOutDateInMonth)
    // console.log('isSameMonth:', isSameMonth)

    const avgRate = () => {
        return stayService.avgRate(stay)
    }
    const rate = avgRate()
    console.log('rate:', rate)

    return (
        <div key={stay._id} className='stay-preview'>
            <img src={stay.imgUrls[0]} />
            <div>
                <div className="preview-title">
                    <p><span>{stay.loc.city}, {stay.loc.country}</span></p>
                    <span className="rate-star"><Star /> {+rate}</span>
                </div>
                {/* {stay.type} */}
                {/* roomType {stay.roomType} */}
                {!checkInDate && !checkOutDate && <p>{stay.loc.address}, {stay.loc.city}</p>}
                {checkInDate && checkOutDate && <p>{stay.summary.slice(0, 30)}...</p>}
                {checkInDate && checkOutDate && <p>{stay.beds} beds</p>}
                {/* {isSameMonth  && <p > {checkInDateMonth} {checkInDatedDate.getDate()} - {checkOutDateDate.getDate()} </p>} */}
                <p className="price"><span>${stay.price}</span> night</p>
            </div>
        </div>
    )
}