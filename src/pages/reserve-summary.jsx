import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getStayById } from "../store/stay.actions"

export const ReserveSummary = () => {
    // const { adults, children, infants, pets} = order
    
    let { guests } = useSelector(state => state.orderModule.order)
    // let { stays } = useSelector(state => state.stayModule)
    const {adults, children, infants, pets } = guests
    
    
    // const getStayById = () => {
    //     stays
    // }
    return <section>
            {/* <div>{stay}</div> */}
            <span>{adults} adults,</span>
            <span>{children}children,</span>
            <span>{infants}infants</span>
            <span>{pets}pets</span>
        </section>
    
}