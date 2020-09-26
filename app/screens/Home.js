import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

//Components
import Header from "../Components/Header";
import Loading from "../Components/Loading";

export default Home = (props) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <WebView
        source={{ uri: "http://tech-view.site/tech-view" }}
        style={styles.webView}
        renderLoading={() => <Loading />}
        allowsBackForwardNavigationGestures
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webView: {
    width: "100%",
  },
});
