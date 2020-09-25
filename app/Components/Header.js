import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';


//Assets
import Colors from "../assets/Colors";

export default Header = (props) => {
  return (<View style={styles.container}>
    <Text>Header</Text>
  </View>);
}


const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.primary
  }
})