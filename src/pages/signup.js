import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");

  const isInvalid = emailAddress === "" || password === "" || firstName === "";

  const handleSignup = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setFirstName("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-up"
            >
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
