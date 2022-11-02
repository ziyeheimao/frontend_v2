import React, { Children, Fragment } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import routerConfig from './route'

const AuthRouteSwitch = () => {
  const allRoute = () => {
    return <Routes>
      {routerConfig.map((item) => {
        return Children.toArray(<Route path={item.path} element={item.component} />);
      })}
      <Route path='*' element={<Navigate to="/home" />}></Route>
    </Routes>;
  };
  return <Fragment>{allRoute()}</Fragment>;
};
export default AuthRouteSwitch;
