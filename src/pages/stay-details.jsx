import { useEffect } from "react"
import { useState } from "react"



export const StayDetails = () => {
    const [stay, setStay] = useState(null)

    useEffect(() => {
        loadStay()
    })

    const loadStay = () => {
        const stayId = 123
    }

    return(
        <h1>working</h1>
    )
}