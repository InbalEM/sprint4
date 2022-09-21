import { NavLink } from 'react-router-dom'
import { HeaderFilter } from './header-filter'
import { HeaderProfile } from './header-profile'
import logo from '../assets/img/logo48.png'

export function AppHeader({layoutClass}) {

    return <header className={`${layoutClass ? 'main-container-details app-header flex full' : 'main-container app-header flex full'} `}>
        <section className='container flex'>
            <NavLink to='/'>
                <div className='logo-container flex'>
                    <img src={logo} alt='logo' style={{ maxWidth: '37px' }} />
                    <span>idebnb</span>
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

}