// import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderFilter } from './header-filter'
import { HeaderProfile } from './header-profile'
import { HeaderExpandedFilter } from './header-expanded-filter'

import logo from '../../assets/img/logo48.png'

export function AppHeader({ layoutClass, onClickHeaderFilter , isHeaderFilterOpen}) {
console.log('isHeaderFilterOpen:', isHeaderFilterOpen)
console.log('onClickHeaderFilter:', onClickHeaderFilter)
    // const [isHeaderFilterOpen, setIsFilterOpen] = useState(false)

    // const onClickHeaderFilter = (ev) => {
    //     if (ev) ev.preventDefault()
    //     setIsFilterOpen(!isHeaderFilterOpen)
    // }
    console.log('layoutClass:', layoutClass)

    return <header className={`${layoutClass ? 'main-layout-details details-header flex full' : 'main-layout app-header flex full'} `}>
        <section className='container flex'>
            <NavLink to='/'>
                <div className='logo-container flex'>
                    <img src={logo} alt='logo' style={{ maxWidth: '37px' }} />
                    <span>idebnb</span>
                </div>
            </NavLink>
            {/*to fix here */}

            {layoutClass ? <input type="text" /> :
                isHeaderFilterOpen ?
                    (!layoutClass && <div ><div className='expanded-filter-stay'><p >Stays</p> </div> <HeaderExpandedFilter onClickHeaderFilter={onClickHeaderFilter} /></div>)
                    : (<HeaderFilter onClickHeaderFilter={onClickHeaderFilter} isHeaderFilterOpen={isHeaderFilterOpen} />)}
            <div className='flex'>
                <NavLink to='edit'>
                    <span className='become-host-link'>Become a host</span>
                </NavLink>
                <HeaderProfile />
            </div>
        </section>

    </header>

}