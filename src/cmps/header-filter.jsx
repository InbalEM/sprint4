import { useRef } from 'react'
import search from '../assets/img/search-icon.png'
import { HeaderExpandedFilter } from './header-expanded-filter'

export function HeaderFilter() {
    var isIsFilterOpen = useRef(false)

    const onFilterClicked = (ev)=>{
        ev.preventDefault()
        if (isIsFilterOpen.current)return
        isIsFilterOpen.current = true
    }
    
    console.log('isIsFilterOpen:', isIsFilterOpen)
    return (
        <section className="header-filter">
            <div>
                <button className='header-btn' onClick={onFilterClicked}>Anywhere</button>
                <span></span>
                <button className='header-btn' onClick={onFilterClicked}>Any week</button>
                <span></span>
                <button className='header-btn search-last-btn' onClick={onFilterClicked}>Add guests</button>
                <button className='search-btn ' onClick={onFilterClicked}><img src={search} /></button>
            </div>
           {isIsFilterOpen.current && <HeaderExpandedFilter/>}
        </section>
    )
}