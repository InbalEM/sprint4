import profile from '../../assets/img/user_header.png'

export function HeaderProfile() {
    return (
        <div className="header-profile">
            <p>☰</p>
            <img src={profile} alt="" />
        </div>
    )
}