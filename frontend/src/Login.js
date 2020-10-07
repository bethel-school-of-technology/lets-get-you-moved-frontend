import React, { useState } from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = event => {
    // this stops the refresh
    event.preventDefault();
    // do the login logic...
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        // logged in, redirect to homepage
        history.push('/order');
      })
      .catch(e => alert(e.message));
  };

  const register = event => {
    // this stops the refresh
    event.preventDefault();
    // do the register logic...
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // Creating user on custom backend
        fetch('http://localhost:4000/user/register', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
            firebaseId: auth.user.uid,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res => {
          // created a user and logged in...
          history.push('/order');
        });
      })
      .catch(e => alert(e.message));
  };

  return (
    <div className='login'>
      {/* <img
          className="login_logo"
          src={logo3}
          alt=""
        /> */}
      <h1 className='login_logo'>Sign In To Build Your Pizza Today</h1>

      <div className='login_container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <div className='signIn_input'>
            <input
              value={email}
              onChange={event => setEmail(event.target.value)}
              type='email'
            />
          </div>
          <h5>Password</h5>
          <div className='signIn_input'>
            <input
              value={password}
              onChange={event => setPassword(event.target.value)}
              type='password'
            />
          </div>
          <button onClick={login} type='submit' className='login_signInButton'>
            Sign In
          </button>
        </form>
        <p>By signing in you agree to Mario's Pizza Terms and Conditions.</p>
        <button onClick={register} className='login_registerButton'>
          Create your Mario's Pizza Account
        </button>
      </div>
    </div>
  );
}

export default Login;
