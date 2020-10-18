import React, {createContext, useState, useEffect, useContext} from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
import * as Auth from '../services/auth';
import api from '../services/api';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser]= useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = window.localStorage.getItem('@RNAuth:user');
      const storageToken = window.localStorage.getItem('@RNAuth:token');
      console.log('wait', storageUser, storageToken);
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('continue');

      if(storageUser && storageToken) {
        api.defaults.headers.Authorization = `Beader ${storageToken}`;

        setUser(JSON.parse(storageUser));
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    loadStorageData();
  },[])

  async function signIn() {
    const response= await Auth.signIn();
    setUser(response.user);

    api.defaults.headers.Authorization = `Beader ${response.token}`;

    window.localStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    window.localStorage.setItem('@RNAuth:token', response.token);
  }

  function signOut() {
    window.localStorage.clear();
    setUser(null);
  }

  return (
  <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
    {children}
  </AuthContext.Provider>
)}

// export default AuthContext;
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
};
