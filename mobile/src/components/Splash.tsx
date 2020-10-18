import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoTipoImg from '../images/Logotipo.png';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // padding: 24,
    backgroundColor: '#2AB5D1',
    // borderBottomWidth: 1,
    // borderColor: '#dde3f0',
    // paddingTop: 44,

    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Splash: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logoTipoImg}/>
      <View>
        <Text>
          
        </Text>
      </View>
    </View>
  )
}

export default Splash;
