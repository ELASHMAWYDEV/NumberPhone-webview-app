import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, BackHandler } from "react-native";
import { WebView } from "react-native-webview";

import { WEBSITE_URL } from "../../config";

//Components
import Header from "../Components/Header";
import Loading from "../Components/Loading";

export default Home = (props) => {
  const webView = useRef(null);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackBtn);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackBtn);
    };
  }, []);

  const handleBackBtn = () => {
    if (webView.current.canGoBack) {
      webView.current.goBack();
      return true;
    }
  };

  return (
    <View style={styles.container}>
      <Header {...props} />
      <WebView
        ref={webView}
        source={{
          uri: WEBSITE_URL,
        }}
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
    marginTop: 40,
    backgroundColor: "#fff"
  },
});
