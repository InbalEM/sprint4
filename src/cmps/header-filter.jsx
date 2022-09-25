import { useLocation, useParams } from 'react-router-dom'
import search from '../assets/img/search-icon.png'

export function HeaderFilter({ onFilterClicked }) {
    const pathname = useLocation().pathname

    const checkIn = pathname.slice(1, 11)
    const checkOut = pathname.slice(12, 22)
    console.log('checkIn, checkOut:', checkIn, checkOut)

    const checkIndDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)

    const checkInMonth = checkIndDate.toLocaleString('en-US', { month: 'short' })
    const checkOutInMonth = checkOutDate.toLocaleString('en-US', { month: 'short' })

    return (
        <section className="header-filter">
            <div className='filter-contaner'>
                <button className='header-btn' onClick={onFilterClicked}>Anywhere</button>
                <span></span>
                <button className='header-btn' onClick={onFilterClicked}>
                    {checkIn && checkOut ? <p > {checkInMonth} {checkIndDate.getDate()} - {checkOutInMonth} {checkOutDate.getDate()} </p> : <p> Any week</p>}
                </button>
                <span></span>
                <button className='header-btn search-last-btn' onClick={onFilterClicked}>Add guests</button>
                <button className='search-btn ' onClick={onFilterClicked}><img src={search} /></button>
            </div>
        </section>
    )
}