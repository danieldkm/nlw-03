import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
  }
})

const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth();
  function handleSignOut() {
    signOut();
  }
  console.log(user)

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Sign out" onPress={handleSignOut}></Button>
    </View>
  )
};

export default Dashboard;