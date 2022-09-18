import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { orderService } from "../services/order.service"
import { savedOrder, saveOrder } from "../store/order.actions"


export const Reserve = ({ stay }) => {

    let { order } = useSelector(state => state.orderModule)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const [guestsCount, setGuestsCount] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    })


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    const onClick = (category, action) => {
        action = action === '+' ? 1 : -1
        if (guestsCount[category] + action < 0 || action > stay.capacity) return
        guestsCount[category] += action
        setGuestsCount(prevGuestsCount => ({ ...prevGuestsCount }))
        console.log(guestsCount)
    }

    const submitReserve = () => {
        const guests = guestsCount
        order = {...order, guests}
        console.log('order:', order)
        dispatch(saveOrder(order))
    }

    return (
        <div className="reserve-form">
            <div>
                <span>${stay.price} night</span>
            </div>

            <div className="reserve-info">
                <div className="pick-dates">
                    <div className="dates-first-layer">
                        <div className="dates-second-layer">
                            <button className="reserve-dates">
                                <div className="check-in">
                                    <div className="txt-reserve">Check-in</div>
                                    <div className="date-reserve">{order.startDate}</div>
                                </div>
                                <div className="check-out">
                                    <div className="txt-reserve">Check-out</div>
                                    <div className="date-reserve">{order.endDate}</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="guest-info">
                    <div className="guest-first-layer">
                        <div className="guest-details-layer">
                            <div className="guest-final-details">
                                <button className="guests-details" onClick={() => toggleMenu()}>
                                    <div className="title">Guests</div>
                                    <div className="saddf">
                                        <div className="guest-description">
                                            {guestsCount.adults + guestsCount.children} guest
                                            {(guestsCount.infants) ? ',' + guestsCount.infants + 'infants' : ''}
                                            {(guestsCount.pets) ? ',' + guestsCount.pets + 'pets' : ''}
                                        </div>
                                    </div>

                                </button>
                            </div>
                            {isOpen &&

                                <div className="select-guests">
                                    <div className="pick-guest-account">
                                        <div>
                                            <h3>Adults</h3>
                                            <h5>Age 13+</h5>
                                        </div>
                                        <div>
                                            <span onClick={() => onClick('adults', '+')}>+</span>
                                            <span>{guestsCount.adults}</span>
                                            <span onClick={() => onClick('adults', '-')}>-</span>
                                        </div>
                                    </div>
                                    <div className="pick-guest-account">
                                        <div>
                                            <h3>Children</h3>
                                            <h5>Ages 2-12</h5>
                                        </div>
                                        <div>
                                            <span onClick={() => onClick('children', '+')}>+</span>
                                            <span>{guestsCount.children}</span>
                                            <span onClick={() => onClick('children', '-')}>-</span>
                                        </div>
                                    </div>
                                    <div className="pick-guest-account">
                                        <div>
                                            <h3>Infants</h3>
                                            <h5>Under 2</h5>
                                        </div>
                                        <div>
                                            <span onClick={() => onClick('infants', '+')}>+</span>
                                            <span>{guestsCount.infants}</span>
                                            <span onClick={() => onClick('infants', '-')}>-</span>
                                        </div>
                                    </div>
                                    <div className="pick-guest-account">
                                        <div>
                                            <h3>Pets</h3>
                                        </div>
                                        <div>
                                            <span onClick={() => onClick('pets', '+')}>+</span>
                                            <span>{guestsCount.pets}</span>
                                            <span onClick={() => onClick('pets', '-')}>-</span>
                                        </div>
                                    </div>
                                    <button onClick={() => toggleMenu()}>close</button>
                                </div>
                            }
                        </div>

                    </div>


                </div>
            </div>

            <div className="reserve-btn-section">
                <Link to="/summary" props={{}}>

                    <button className="reserve-btn" onClick={()=> submitReserve()}>
                        <span>Reserve</span>
                    </button>
                </Link>
            </div>

        </div>
    )
}