import React from "react";
import { Routes, Route } from 'react-router'
import routes from './routes'


export class RootCmp extends React.Component {
  render() {
    return (
      <div>
        {/* <AppHeader /> */}
        <main>
          <Routes>
            {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
            {/* <Route path="user/:id" element={<UserDetails />} /> */}
          </Routes>
        </main>
        {/* <AppFooter /> */}
      </div>
    );
  }

}
