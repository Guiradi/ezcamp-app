import React, {useCallback, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import logo from '../assets/images/logo.png';

import api from '../store/api';

export default ({navigation: {navigate, getParam}}) => {
  const [users, setUsers] = useState([]);

  const id = getParam('id');

  const onLogout = useCallback(() => {
    navigate('login');
  }, [navigate]);

  const loadUsers = () =>
    useCallback(async () => {
      const {data} = await api.get('/devs', {headers: {user: id}});

      setUsers(data);
    }, [id]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
      }}>
      <TouchableOpacity onPress={onLogout}>
        <Image source={logo} />
      </TouchableOpacity>

      <View
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 8,
          margin: 30,
          elevation: 1,
        }}>
        <Image
          style={{
            height: 300,
            width: 300,
          }}
          source={null}
        />
      </View>
    </View>
  );
};
