import React from 'react';
import {View, Image, TextInput} from 'react-native';

import logo from './src/assets/images/logo.png';

export default () => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Image source={logo} />
    <TextInput
      autoCapitalize="none"
      placeholder="Digite seu usuário no GitHub"
      style={{
        marginTop: 20,
        height: 45,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        alignSelf: 'stretch',
        marginHorizontal: 15,
      }}
    />
  </View>
);
