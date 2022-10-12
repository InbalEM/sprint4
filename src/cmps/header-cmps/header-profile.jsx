import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import profile from '../../assets/img/user_header.png'
import { LoginSignup } from '../login-signup'

export function HeaderProfile() {
    const [isOpen, setIsOpen] = useState(false)
    const [register, setRegister] = useState(false)
    const user = useSelector(state => state.userModule.user)
    const navigate = useNavigate()

    const toggleOpen = () => {
        setIsOpen(true)
    }

    const toggleRegister = () => {
        document.body.classList.toggle('register-opened');
        setRegister(true)
        setIsOpen(false)
    }

    return (<section>
        <div className="header-profile" onClick={() => toggleOpen()}>
            <p>☰</p>
            <img src={user ? user.imgUrl.thumbnail : profile} alt="" />
        </div>
        <div className={`header-menu-${isOpen}`}>
            <div className='login-signup-section'>
                <div onClick={() => toggleRegister()}><p>Log in</p></div>
               <div><p>Sign up</p></div>
               <div onClick={() => {setIsOpen(false)
                navigate('Dashboard')}}>Dashboard</div>
            </div>
        </div>
        <div className={`login-${register}`}><LoginSignup/></div>
    </section>
    )




    // return <section>
    //     <div className="header-profile" onClick={() => toggleOpen()}>
    //         <div className={`login-${isOpen}`}><LoginSignup onLogin={onLogin} /></div>
    //     </div>

    // </section>
}