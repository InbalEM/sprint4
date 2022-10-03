import { useSelector } from "react-redux";
import {orderService} from '../services/order.service'


export const CalcReserve = ({stay}) => {
// to change all distructuring
    const { order } = useSelector(state => state.orderModule)
   

    const nightsStay = orderService.getDiffDates(order.startDate, order.endDate)
   
    return (
        <section className="calc-reserve">
            <div className="total-price-nights flex">
                <div>${stay.price} x {nightsStay} nights</div>
                <div>${stay.price * nightsStay}</div>
            </div>
            <div className="cleaning-fee flex">
                <div>Cleaning fee</div>
                <div>$10</div>
            </div>
            <div className="service-fee flex">
                <div>Service fee</div>
                <div>${11 + nightsStay * 10}</div>
            </div>
            <div className="total">
                <div className="total-amount flex">
                    <div>Total</div>
                    <div>${stay.price * nightsStay + 10 + 11 + nightsStay * 10}</div>
                </div>
            </div>
        </section>
    )
}