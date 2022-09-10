import React from 'react';
import { Wrapper } from './Signup.styles';
import { Container, Informations, FormField, Input, Button, Label, StyledLink } from './Signup.styles';
import { useState } from 'react';
import { UserAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleKeyDown = async event => {

    if (event.key === 'Enter') {
  
      event.preventDefault();
      setError('');
      try {
        await createUser(email, password);
        navigate('/account')
      } catch (event) {
        setError(event.message);
        console.log(event.message);
      }

    }
  };


  return (
    <Wrapper>
      <Container>
        <Informations>
          <h1>Sign up for a free account</h1>
          <p>
            Already have an account yet? <StyledLink to="/">Sign in.</StyledLink>
          </p>
        </Informations>
        <FormField onSubmit={handleSubmit} >
          <Label>Email Adress</Label>
          <Input   onChange={(e) => setEmail(e.target.value)}
onKeyDown={handleKeyDown}
            type='email' />

          <Label>Password</Label>
          <Input    onChange={(e) => setPassword(e.target.value)}
            type='password'
            onKeyDown={handleKeyDown} />
            
        </FormField>
        <Button onClick={handleSubmit}>Sign Up</Button>
      </Container>
    </Wrapper>
  );
};

export default Signup;
