import React from 'react';
import { Wrapper } from './Signup.styles';
import { Container, Informations, FormField, Input, Button ,Label,StyledLink} from './Signup.styles';

const Signup = () => {
  return (
    <Wrapper>
      <Container>
        <Informations>
          <h1>Sign up for a free account</h1>
          <p>
            Already have an account yet? <StyledLink to="/">Sign in.</StyledLink>
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

export default Signup;
