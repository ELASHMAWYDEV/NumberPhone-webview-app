import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, BackHandler, Platform } from "react-native";
import { WebView } from "react-native-webview";

import { WEBSITE_URL } from "../../config";

//Admob
import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";

//Components
import Header from "../Components/Header";
import Loading from "../Components/Loading";

//Config
import {
  BANNER_TEST_ID_IOS,
  BANNER_TEST_ID_ANDROID,
  INTERSTITIAL_TEST_ID_IOS,
  INTERSTITIAL_TEST_ID_ANDROID,
  INTERSTITIAL_UNIT_ID_ANDROID,
  INTERSTITIAL_UNIT_ID_IOS,
  BANNER_UNIT_ID_ANDROID,
  BANNER_UNIT_ID_IOS,
} from "../../config";

export default Home = (props) => {
  const webView = useRef(null);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackBtn); //handle back btn press

    setTimeout(displayInterstitial, 10000); //Display interstitial add after 10 sec

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackBtn);
    };
  }, []);

  const displayInterstitial = async () => {
    try {
      await AdMobInterstitial.setAdUnitID(
        __DEV__
          ? Platform.OS === "ios" //in development
            ? INTERSTITIAL_TEST_ID_IOS
            : INTERSTITIAL_TEST_ID_ANDROID
          : Platform.OS === "ios" //in production
          ? INTERSTITIAL_UNIT_ID_IOS
          : INTERSTITIAL_UNIT_ID_ANDROID
      );
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
      await AdMobInterstitial.showAdAsync();
    } catch (e) {
      console.log(e.message);
    }
  };

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
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={
          __DEV__
            ? Platform.OS === "ios" //in development
              ? BANNER_TEST_ID_IOS
              : BANNER_TEST_ID_ANDROID
            : Platform.OS === "ios" //in production
            ? BANNER_UNIT_ID_IOS
            : BANNER_UNIT_ID_ANDROID
        }
        servePersonalizedAds
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
    // marginTop: 40,
    backgroundColor: "#fff",
  },
});
