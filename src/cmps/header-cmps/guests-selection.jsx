import { useState } from "react"
import { useSelector } from "react-redux"

export const GustSelection= ({changeWho, guestsCount})=>{

    return(
        <div className="select-guests guests-selection">
        <div className="pick-guest-account">
            <div>
                <h3>Adults</h3>
                <h5>Age 13+</h5>
            </div>
            <div>
                <span onClick={() => changeWho('adults', 1)}>+</span>
                <span>{guestsCount.adults}</span>
                <span onClick={() => changeWho('adults', -1)}>-</span>
            </div>
        </div>
        <div className="pick-guest-account">
            <div>
                <h3>Children</h3>
                <h5>Ages 2-12</h5>
            </div>
            <div>
                <span onClick={() => changeWho('children', 1)}>+</span>
                <span>{guestsCount.children}</span>
                <span onClick={() => changeWho('children', -1)}>-</span>
            </div>
        </div>
        <div className="pick-guest-account">
            <div>
                <h3>Infants</h3>
                <h5>Under 2</h5>
            </div>
            <div>
                <span onClick={() => changeWho('infants', 1)}>+</span>
                <span>{guestsCount.infants}</span>
                <span onClick={() => changeWho('infants', -1)}>-</span>
            </div>
        </div>
        <div className="pick-guest-account">
            <div>
                <h3>Pets</h3>
            </div>
            <div>
                <span onClick={() => changeWho('pets', 1)}>+</span>
                <span>{guestsCount.pets}</span>
                <span onClick={() => changeWho('pets', -1)}>-</span>
            </div>
        </div>
    </div>
    )
}