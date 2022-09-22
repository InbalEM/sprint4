<<<<<<< HEAD
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
=======
import { DetailsHeader } from './details-header'
import { MainHeader } from './main-header'

export function AppHeader({layoutClass, isOpen}) {


    console.log(isOpen);
    return <header className={`${layoutClass ? 'main-layout-details details-header flex full' : 'main-layout app-header flex full'} `}>
        
        {/* {isOpen ?   <DetailsHeader/> : <MainHeader/>} */}
        <MainHeader/>

        
>>>>>>> 73d652a7e117328c7430a5e498e73dfbd4b90229
    </header>

}