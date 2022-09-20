import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Calender } from "../cmps/calender"
import { Reserve } from "../cmps/reserve"
import { stayService } from "../services/stay.service"
import { ReactComponent as Star } from '../assets/icons/star.svg';
import { ReactComponent as Heart } from '../assets/icons/heart.svg';
import { ReactComponent as Share } from '../assets/icons/share.svg';
import { ReactComponent as Footprint } from '../assets/icons/footprint.svg';
import { ReactComponent as Security } from '../assets/icons/security.svg';
import { ReactComponent as Location } from '../assets/icons/location.svg';
import { ReactComponent as User } from '../assets/icons/user.svg';
import wifi from '../assets/img/wifi.png'
import monitor from '../assets/img/monitor.png'
import kitchen from '../assets/img/kitchen-tools.png'
import hairDryer from '../assets/img/hair-dryer.png'
import hanger from '../assets/img/clothes-hanger.png'
import airConditioner from '../assets/img/air-conditioner.png'
import { Review } from "../cmps/stay-review"

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

    const avgRate = () => {
        let rates = stay.reviews.map(review => review.rate)
        rates = rates.reduce((a, b) => a + b, 0)
        console.log('rates:', rates)
        return (rates / stay.reviews.length).toFixed(2)
    }

    if (!stay) return <div>Loading...</div>

    return (
        <div className="stay-details">
            <div className="header-details">
                <h1>{stay.name}</h1>
                <div className="mini-details">
                    <div className="mini-info">
                        <span><Star /> {avgRate()}</span>&middot;
                        <button className="review-amount">{stay.reviews.length} reviews</button>&middot;
                        <span className="country-code">{stay.loc.countryCode},{stay.loc.country}</span>
                    </div>
                    <div className="details-actions">
                        <div className="share-details"><button href="#"><span><Share /></span>Share</button></div>
                        <div className="save-details"><button href="#"><span><Heart /></span> Save</button></div>
                    </div>
                </div>
            </div>

            <div className="img-details">
                <div className="main-img">
                    <img src={stay.imgUrls[0]} alt="" srcSet="" />
                </div>
                <div className="middle-top">
                    <img src={stay.imgUrls[1]} alt="" srcSet="" />
                </div>
                <div className="middle-bottom">
                    <img src={stay.imgUrls[2]} alt="" srcSet="" />
                </div>
                <div className="top-right">
                    <img src={stay.imgUrls[3]} alt="" srcSet="" />
                </div>
                <div className="bottom-right">
                    <img src={stay.imgUrls[4]} alt="" srcSet="" />
                </div>
            </div>
            <div className="main-details">
                <div className="details-section">
                    <div className="mini-details">
                        <div className="stay-details">
                            <h2>{stay.roomType} hosted by {stay.host.fullname}</h2>
                            <span>{stay.capacity} guests</span>&middot;
                            <span>{stay.bathrooms} bathrooms</span>&middot;
                            <span>{stay.bedrooms} bedrooms</span>
                        </div>
                        <div><User /></div>
                    </div>
                    <hr />
                    <div className="some-keys">
                        <div className="guest-impression">
                            <div className="logo"><Location /></div>
                            <div className="txt">
                                <div className="header">Great location</div>
                                <div className="description">100% of recent guests gave the location a 5-star rating.</div>
                            </div>
                        </div>
                        <div className="guest-impression">
                            <div className="logo"><Security /></div>
                            <div className="txt">
                                <div className="header">Great check-in experience</div>
                                <div className="description">100% of recent guests gave the check-in process a 5-star rating.</div>
                            </div>
                        </div>
                        <div className="guest-impression">
                            <div className="logo"><Footprint /></div>
                            <div className="txt">
                                <div className="header">Furry friends welcome</div>
                                <div className="description">Bring your pets along for the stay.</div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="air-cover">
                        <h2 className="air-cover-img">
                            <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="" />
                        </h2>
                        <div className="air-cover-description">
                            Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
                        </div>
                        <button aria-label="Learn more" type="button" className="learn-more-link">Learn more</button>
                    </div>
                    <hr />
                    <div className="more-description">
                        <div className="summary">{stay.summary}</div>
                        <button className="show-more">Show more </button>
                    </div>
                    <hr />
                    <div className="amenities-section">
                        <div className="amenities-header">
                            <h2>What this place offers</h2>
                        </div>
                        <div className="amenities">
                            <div>
                                <div className="amenitie">
                                    <div>Wifi</div>
                                    <div className="wifi-icon"><img src={wifi} alt=""/></div>
                                </div>
                            </div>
                            <div>
                                <div className="amenitie">
                                    <div>Kitchen</div>
                                    <div className="kitchen-icon"><img src={kitchen} alt=""/></div>
                                </div>
                            </div>
                            <div>
                                <div className="amenitie">
                                    <div>hair-dryer</div>
                                    <div className="hairDryer-icon"><img src={hairDryer} alt=""/></div>
                                </div>
                            </div>
                            <div>
                                <div className="amenitie">
                                    <div>Hanger</div>
                                    <div className="hanger-icon"><img src={hanger} alt=""/></div>
                                </div>
                            </div>
                            <div>
                                <div className="amenitie">
                                    <div>Air-Conditioner</div>
                                    <div className="airConditioner-icon"><img src={airConditioner} alt=""/></div>
                                </div>
                            </div>
                            <div>
                                <div className="amenitie">
                                    <div>Monitor</div>
                                    <div className="monitor-icon"><img src={monitor} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="date-picker">
                        <Calender stay={stay} />
                    </div>
                </div>

                <div className="reserve-section">
                    <div className="reserve-form">
                        <div className="reserve">
                            <Reserve stay={stay} avgRate={avgRate}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reviews-section">
                <Review stay={stay} avgRate={avgRate}/>
            </div>
        </div>
    )

}