import React from "react";
import { Routes, Route } from 'react-router'
import routes from './routes'

function App() {
  return (
    <div className="App">
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

export default App;
