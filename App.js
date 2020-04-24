import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

export default function App() {
  return (
    <View style={styles.container}>
      <UserAvatar
        size={100}
        name="Avishay Bar"
        src="https://randomuser.me/api/portraits/women/90.jpg"
        component={Image} // This code throws an error on 1.0.6 but works as it should on 1.0.5
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
