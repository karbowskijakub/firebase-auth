import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import { GlobalStyle } from '../components/assets/styles/globalStyles';
import Signin from '../components/organisms/Signin/Signin';
import Signup from '../components/organisms/Signup/Signup';
import Account from '../components/organisms/Account/Account';
const Root = () => {
  return (
    <Router>
        <GlobalStyle/>
        <MainTemplate>

    <Routes>
        <Route path="/" element={<Signin/>} />
        <Route  path="/signup" element={<Signup/>} />
        <Route path="/account" element={<Account/>} />
      </Routes> 
              </MainTemplate>
    </Router>
  );
};

export default Root;
