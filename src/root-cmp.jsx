import React ,{useState,useEffect}from "react";
import { Routes, Route, useLocation } from 'react-router'
import routes from './routes'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'

export function RootCmp () {
  const location = useLocation()
    const [layoutClass, setLayoutClass] = useState(false)

    useEffect(() => {
      location.pathname.includes('details')? setLayoutClass(true):  setLayoutClass(false)
    }, [location.pathname])

    return (
      <div className= "full main-layout">
        <AppHeader layoutClass={layoutClass} />
        <main className={`${layoutClass? 'main-layout-details':'full main-layout'} `} >
          <Routes>
            {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
            {/* <Route path="user/:id" element={<UserDetails />} /> */}
          </Routes>
        </main>
        <AppFooter layoutClass={layoutClass} />
      </div>
    )
}
