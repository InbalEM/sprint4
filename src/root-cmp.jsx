import React from "react";
import { Routes, Route, useParams } from 'react-router'
// import { AppHeader } from "./cmps/app-header";
import routes from './routes'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { useEffect } from "react";


export const RootCmp = () =>  {
   
    
    return (
      <div className={(window.location.href.includes('details')) ? "main-container-details" : "main-container"}>
        <AppHeader />
        <main>
          <Routes>
            {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
            {/* <Route path="user/:id" element={<UserDetails />} /> */}
          </Routes>
        </main>
        <AppFooter />
      </div>
    )
  

}
