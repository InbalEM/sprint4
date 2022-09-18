import { NavLink, useNavigate } from 'react-router-dom'

import { HeaderFilter } from './header-filter'
import { HeaderProfile } from './header-profile'

import logo from '../assets/img/logo48.png'

export function AppHeader() {

    return (
        <header className='app-header'>
            <section className='container flex'>
                <NavLink to='/'>
                    <div className='logo-container flex'>
                        <img src={logo} alt='logo' style={{ maxWidth: '37px' }} />
                        <span>airbnb</span>
                    </div>
                </NavLink>
                <HeaderFilter />
                <div className='flex'>
                <NavLink to='edit'>
                    <span className='become-host-link'>Become a host</span>
                </NavLink>
                <HeaderProfile />
                </div>
            </section>
        </header>
    )
}