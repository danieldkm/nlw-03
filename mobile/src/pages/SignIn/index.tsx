import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {signIn} from '../../services/auth';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
  }
})

const SignIn: React.FC = () => {
  const {signed, signIn} = useAuth();
  async function handleSignIn() {
    await signIn();
  }

  console.log(signed)

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={handleSignIn}></Button>
    </View>
  )
};

export default SignIn;