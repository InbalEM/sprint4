import { useSelector } from "react-redux"


export const ReserveSummary = () => {
    const { adults, children, infants, pets} = useSelector(state => state.orderModule.order.guests)
   
    return (
        <section>
            <span>{adults} adults,</span>
            <span>{children}children,</span>
            <span>{infants}infants</span>
            <span>{pets}pets</span>
        </section>
    )
}