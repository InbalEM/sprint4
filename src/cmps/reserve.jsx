import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useSelector } from "react-redux"


export const Reserve = ({ stay }) => {

    const { order } = useSelector(state => state.orderModule)
    const [isOpen, setIsOpen] = useState(false)

    let [adults, setAdults] = useState(0) 
   

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const onClickPlus = (category) => {
        console.log(category)
        switch (category) {
            case 'Adults':
                setAdults(prevAdults => prevAdults + 1)
                break;
        
            default:
                break;
        }
       
    }

    const onClickMinus = (category) => {
        console.log('minus')
    }

    return (
        <div className="reserve-form">
            <div>
                <span>{stay.price} night</span>
            </div>

            <div className="reserve-info">
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

                <div className="guest-info">
                    <button className="guests-details" onClick={() => toggleMenu()}>
                        <div>Guests</div>
                        <div>1 guest</div>
                    </button>
                    {isOpen &&
                        <div className="select-guests">
                            <div className="pick-guest-account">
                                <div>
                                    <h3>Adults</h3>
                                    <h5>Age 13+</h5>
                                </div>
                                <div>
                                    <span onClick={() => onClickPlus('Adults')}>+</span>
                                    <span>{adults}</span>
                                    <span onClick={() => onClickMinus()}>-</span>
                                </div>
                            </div>
                            <div className="pick-guest-account">
                                <div>
                                    <h3>Children</h3>
                                    <h5>Ages 2-12</h5>
                                </div>
                                <div>
                                    <span onClick={() => onClickPlus('Children')}>+</span>
                                    <span>0</span>
                                    <span onClick={() => onClickMinus()}>-</span>
                                </div>
                            </div>
                            <div className="pick-guest-account">
                                <div>
                                    <h3>Infants</h3>
                                    <h5>Under 2</h5>
                                </div>
                                <div>
                                    <span onClick={() => onClickPlus('Infants')}>+</span>
                                    <span>0</span>
                                    <span onClick={() => onClickMinus()}>-</span>
                                </div>
                            </div>
                            <div className="pick-guest-account">
                                <div>
                                    <h3>Pets</h3>
                                </div>
                                <div>
                                    <span onClick={() => onClickPlus('Pets')}>+</span>
                                    <span>0</span>
                                    <span onClick={() => onClickMinus()}>-</span>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}