import React ,{useState,useEffect}from "react";
import { Routes, Route, useLocation } from 'react-router'
// import { AppHeader } from "./cmps/app-header";
import routes from './routes'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { StayFilter } from "./cmps/stay-filter";


export function RootCmp () {
  
  const location = useLocation()

    const [layoutClass, setLayoutClass] = useState(false)

    console.log('location:', location)
    useEffect(() => {
      location.pathname.includes('details')? setLayoutClass(true):  setLayoutClass(false)

    }, [location.pathname])

  
    return (
      // <div className={(window.location.href.includes('details')) ? "main-container-details" : "full main-container"}>
      <div className= "full main-container">
        <AppHeader layoutClass={layoutClass} />
        <main className={`${layoutClass? 'main-container-details':'full main-container'} `} >
          <Routes>
            {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
            {/* <Route path="user/:id" element={<UserDetails />} /> */}
          </Routes>
        </main>
        <AppFooter layoutClass={layoutClass} />
      </div>
    )
    
}
