import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../context/AuthContext';

import { Wrapper } from './Account.styles'

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Wrapper>
  <h1>Account</h1>
  <p>User Email:</p>
  <button onClick={handleLogout}>Logout</button>

    </Wrapper>
  )
}

export default Account