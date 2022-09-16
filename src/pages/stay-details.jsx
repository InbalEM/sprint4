import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Calender } from "../cmps/calender"
import { Reserve } from "../cmps/reserve"
import { stayService } from "../services/stay.service"



export const StayDetails = () => {
    const [stay, setStay] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadStay()
        // loadReviews()
    }, [])

    const loadStay = () => {
        const stayId = params.id
        stayService.getById(stayId).then((stay) => {
            console.log('stay:', stay)
            setStay(stay)
            // setReviews(reviews)
        })
    }

    if (!stay) return <div>Loading...</div>

    return (
        <div className="stay-details">
            <div className="header-details">
                <h2>{stay.name}</h2>
                <p>{stay.loc.countryCode},{stay.loc.country}</p>
            </div>

            <div className="img-details">
                <div className="main-img">
                    <img src={stay.imgUrls[0]} alt="" srcSet="" />
                </div>
                <div className="top-right">
                    <img src={stay.imgUrls[0]} alt="" srcSet="" />
                </div>
                <div className="bottom-right">
                    <img src={stay.imgUrls[0]} alt="" srcSet="" />
                </div>
            </div>
            <div className="main-details">
                <div className="details-section">
                    <div className="mini-details">
                        <h3>Entire {stay.type} hosted by {stay.host.fullname}</h3>
                        <ul>
                            <li>{stay.capacity.guests} guests</li>
                            <li>{stay.capacity.bedroom} bedroom</li>
                            <li>{stay.capacity.bed} bed</li>
                            <li>{stay.capacity.bath} bath</li>
                        </ul>
                        <p> profile-img</p>
                    </div>
                    <hr />
                    <div>
                        <p>Free cancellation before Sep 27.</p>
                    </div>
                    <hr />
                    <div>
                        {stay.summary}
                        <div className="extra-img-info">

                            <div className="first-img">
                                <img src={stay.imgUrls[0]} alt="" srcSet="" />
                            </div>
                            <div className="second-img">
                                <img src={stay.imgUrls[0]} alt="" srcSet="" />
                            </div>
                            <div className="third-img">
                                <img src={stay.imgUrls[0]} alt="" srcSet="" />
                            </div>
                            <div className="fourth-img">
                                <img src={stay.imgUrls[0]} alt="" srcSet="" />
                            </div>
                            <div className="fifth-img">
                                <img src={stay.imgUrls[0]} alt="" srcSet="" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="date-picker">
                        <Calender/>
                    </div>
                </div>

                <div className="reserve">
                    <Reserve />
                </div>
            </div>
        </div>
    )

}