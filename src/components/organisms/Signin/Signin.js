import React from 'react';
import { Wrapper } from './Signin.styles';
import { Container, Informations, FormField, Input, Button ,Label,StyledLink} from './Signin.styles';

const Signin = () => {
  return (
    <Wrapper>
      <Container>
        <Informations>
          <h1>Sign in to your account</h1>
          <p>
            Don't have an account yet? <StyledLink to="/signup">Sign up.</StyledLink>
          </p>
        </Informations>
        <FormField>
          <Label>Email Adress</Label>
          <Input></Input>
          <Label>Password</Label>
          <Input></Input>
        </FormField>
        <Button>Sign Up</Button>
      </Container>
    </Wrapper>
  );
};

export default Signin;
