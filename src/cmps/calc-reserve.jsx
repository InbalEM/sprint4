import { useSelector } from "react-redux";

export const CalcReserve = ({stay}) => {
// to change all distructuring
    const { order } = useSelector(state => state.orderModule)
   

    const parseDate = (str) => {
        if(!str) return
        const mdy = str.split('/');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    }

    const dateDiff = (first, second) => {
        if(!first || !second) return
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }

    const nightsStay = dateDiff(parseDate(order.startDate), parseDate(order.endDate))
   
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
                    <div>${stay.price * nightsStay + 10 + 51}</div>
                </div>
            </div>
        </section>
    )
}