import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useAuth} from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const {signOut, user, signed} = useAuth();
  
  // useEffect(() => {
  //   console.log('signed', signed);
  //   if(!signed) {
  //     history.push('signin');
  //   }
  // }, [history, signed])

  function handleSignOut() {
    signOut();
  }
  console.log(user)

  return (
    <div id="page-dashboard">
      <main>
        <span>{user?.name}</span>
        dashboard
        <button type="button" onClick={handleSignOut}>Sign out</button>
      </main>
    </div>
  )
};

export default Dashboard;