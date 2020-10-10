/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 23, marginTop: 10 }}>Setting Screen</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Simple Login Registraction Example
      </Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>https://aboutreact</Text>
    </View>
  );
};
export default SettingsScreen;