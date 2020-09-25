import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';


//Components
import Header from "../Components/Header";


export default Home = (props) => {
  return (
    <View style={styles.container}>
    <Header />
      <WebView source={{ uri: "http://tech-view.site/tech-view" }} style={styles.webView} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    width: "100%",
    height: 500,
  }
})