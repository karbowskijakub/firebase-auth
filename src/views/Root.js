import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import { GlobalStyle } from '../components/assets/styles/globalStyles';
import Signin from '../components/organisms/Signin/Signin';
import Signup from '../components/organisms/Signup/Signup';
import Account from '../components/organisms/Account/Account';
import { AuthContextProvider } from 'context/AuthContext';
import ProtectedRoute from 'components/ProtectedRoute';
const Root = () => {
  return (
    <Router>
      <GlobalStyle />
      <MainTemplate>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }/>
          </Routes>
        </AuthContextProvider>
      </MainTemplate>
    </Router>
  );
};

export default Root;
