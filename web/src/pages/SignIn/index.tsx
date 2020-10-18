import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import {signIn} from '../../services/auth';
import {useAuth} from '../../contexts/auth';

const SignIn: React.FC = () => {
  const history = useHistory();
  const {signed, signIn} = useAuth();
  
  useEffect(() => {
    console.log('signed', signed);
    if(signed) {
      history.push('/dashboard');
    }
  }, [history, signed])

  async function handleSignIn() {
    await signIn();
    history.push('dashboard');
  }

  console.log(signed)

  return (
    <div>
      <button type="button" onClick={handleSignIn}>Sign in</button>
    </div>
  )
};

export default SignIn;