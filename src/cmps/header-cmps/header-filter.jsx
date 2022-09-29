import { useLocation } from 'react-router-dom'

import search from '../../assets/img/search-icon.png'

export function HeaderFilter({ onClickHeaderFilter }) {
    console.log('onClickHeaderFilter:', onClickHeaderFilter)
    const pathname = useLocation().pathname

    const checkIn = pathname.slice(1, 11)
    const checkOut = pathname.slice(12, 22)
    console.log('checkIn, checkOut:', checkIn, checkOut)

    const checkIndDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)

    const checkInMonth = checkIndDate.toLocaleString('en-US', { month: 'short' })
    const checkOutInMonth = checkOutDate.toLocaleString('en-US', { month: 'short' })

    return (
        <section className="header-filter header-filter-position">
            <div className='filter-contaner'>
                <button className='header-btn first-header-btn' onClick={onClickHeaderFilter}>Anywhere</button>
                <span></span>
                <button className='header-btn' onClick={onClickHeaderFilter}>
                    {checkIn && checkOut ? < > {checkInMonth} {checkIndDate.getDate()} - {checkOutInMonth} {checkOutDate.getDate()} </> : <> Any week</>}
                </button>
                <span></span>
                <button className='header-btn search-last-btn' onClick={onClickHeaderFilter}>Add guests</button>
                <button className='search-btn ' onClick={onClickHeaderFilter}><img src={search} /></button>
            </div>
        </section>
    )
}