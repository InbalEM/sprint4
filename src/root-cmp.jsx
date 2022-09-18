import React from "react";
import { Routes, Route } from 'react-router'
// import { AppHeader } from "./cmps/app-header";
import routes from './routes'
import {AppHeader} from './cmps/app-header'
import {AppFooter} from './cmps/app-footer'


export class RootCmp extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="main-container">
=======
      <div  className="main-container" >
>>>>>>> 3e69fae230a774594ae6a1f9447348f25490b481
        <AppHeader />
        <main>
          <Routes>
            {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
            {/* <Route path="user/:id" element={<UserDetails />} /> */}
          </Routes>
        </main>
        <AppFooter />   
      </div>
    );
  }

}
