import React from 'react';
import { Wrapper } from './Signin.styles';
import { Container, Informations, FormField, Input, Button ,Label,StyledLink} from './Signin.styles';
import { useNavigate} from 'react-router-dom';
import { UserAuth } from '../../../context/AuthContext';
import { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };
  const handleKeyDown = async event => {

    if (event.key === 'Enter') {
  
      event.preventDefault();
      setError('');
      try {
        await signIn(email, password);
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
          <h1>Sign in to your account</h1>
          <p>
            Don't have an account yet? <StyledLink to="/signup">Sign up.</StyledLink>
          </p>
        </Informations>
        <FormField onSubmit={handleSubmit}>
          <Label>Email Adress</Label>
          <Input onChange={(e) => setEmail(e.target.value)} type='email' 
          onKeyDown={handleKeyDown}/>
          <Label>Password</Label>
          <Input onChange={(e) => setPassword(e.target.value)} type='password'
          onKeyDown={handleKeyDown}/>
        </FormField>
        <Button onClick={handleSubmit}>Sign In</Button>
      </Container>
    </Wrapper>
  );
};

export default Signin;
