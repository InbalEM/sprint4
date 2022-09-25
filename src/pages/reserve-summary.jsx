<<<<<<< HEAD
// import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux"
// import { getStayById } from "../store/stay.actions"

// export const ReserveSummary = () => {
//     // const { adults, children, infants, pets} = order
    
//     let { guests } = useSelector(state => state.orderModule.order)
//     // let { stays } = useSelector(state => state.stayModule)
//     // const {adults, children, infants, pets } = guests
    
    
//     // const getStayById = () => {
//     //     stays
//     // }
//     return <section>
//             {/* <div>{stay}</div> */}
//             <span>{guests.adults} adults,</span>
//             <span>{guests.children}children,</span>
//             <span>{guests.infants}infants</span>
//             <span>{guests.pets}pets</span>
//         </section>
    
// }
=======

import { useLocation } from "react-router-dom";
import { CalcReserve } from "../cmps/calc-reserve";

export const ReserveSummary = () => {

    const params = useLocation()
    console.log('location:', params)
    const { guests: { adults, children, infants, pets }, startDate, endDate} = params.state.order
    const { type, imgUrls } = params.state.stay
    return <section className="summary-section">
        <div>
            <div>Your order summary is:</div>
        </div>
        <div className="stay-details">
            <div>{type}</div>
            <div><img src={imgUrls[0]} alt=''></img></div>
        </div>
        <div className="guests-details">
            <div>
                Guests:
            </div>
            <div>
                <span>{(adults) ? `${adults} adults ` : ''} </span>
                <span>{(children) ? `${children}, children` : ''}</span>
                <span>{(infants) ? `${infants}, infants`: '' }</span>
                <span>{(pets) ? `${pets}, pets`: ''}</span>
            </div>
            
        </div>

        <div className="stay-dates">
            <div>Dates:</div>
            <div>
                Arrive at: {startDate}&middot;
                Leaving at: {endDate}
            </div>
        </div>

        <div className="order-total-price">
            <div>Total:</div>
            <div>
               <CalcReserve stay={params.state.stay}/>

            </div>
        </div>
    </section>

}
>>>>>>> b5191937f4dcfa73a77c3839302975cc5f86d153
