import { NavLink, useNavigate } from 'react-router-dom'

import { HeaderFilter } from './header-filter'
import { HeaderProfile } from './header-profile'

import logo from '../assets/img/logo48.png'

export function AppHeader() {

    return (
        <header className='app-header'>
            <section className='container flex'>
                <nav>
                    <NavLink to='/'>
                        <div className='logo-container flex'>
                            <img src={logo} alt='logo' style={{ maxWidth: '37px' }} />
                            <span>airbnb</span>
                        </div>
                    </NavLink>
                </nav>
                <HeaderFilter />
                <HeaderProfile />
            </section>
        </header>
    )
}