import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { saveOrder } from "../store/order.actions"
import { ReactComponent as Star } from '../assets/icons/star.svg';
import { CalcReserve } from "./calc-reserve"

export const Reserve = ({ stay, avgRate }) => {

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
        order = { ...order, guests }
        console.log('order:', order)
        dispatch(saveOrder(order))
    }

    const mouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const mouseX = e.pageX - e.currentTarget.offsetLeft;
        const mouseY = e.pageY - e.currentTarget.offsetTop;
        e.currentTarget.style.cssText = `
    --mouse-x: ${mouseX}; 
    --mouse-y: ${mouseY};
  `;
    }



    return (
        <div className="reserve-form">
            <div className="reserve-header">
                <div>
                    <div><span className="price">${stay.price}</span><span> night</span></div>
                </div>
                <div className="reserve-rate">
                    <div><span><Star /></span><span> {avgRate()}</span></div>&middot;
                    <button>{stay.reviews.length} reviews</button>
                </div>
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
                <Link to="/summary" params={stay}>

                    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                        <button onMouseMove={(e) => mouseMove(e)} onClick={() => submitReserve()} id="gradientBtn">
                            <span className="absolute inset-0 gradient opacity-0 transition-opacity duration-300"></span>
                            <span className="relative z-1 pointer-events-none">Let's Go</span>
                        </button>
                    </div>

                </Link>
            </div>

            {order.endDate &&
                <section>
                    <div className="msg-txt">
                        <div>You won't be charged yet</div>
                    </div>
                    <CalcReserve stay={stay} />
                </section>
            }

        </div>
    )
}