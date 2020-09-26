import React, { useEffect, useState } from "react";
import DrawerNavigation from "./app/Navigation/DrawerNavigation";
import { useFonts } from "expo-font";
import { BackHandler, Alert, View } from "react-native";

//Components
import Loading from "./app/Components/Loading";
import AskClose from "./app/Components/AskClose";

export default function App() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackBtn);
  }, []);

  const handleBackBtn = () => {
    Alert.alert(
      "إغلاق التطبيق",
      "هل تريد حقا الخروج من التطبيق",
      [
        {
          text: "نعم",
          onPress: () => BackHandler.exitApp(),
        },
        {
          text: "لا",
          style: "cancel",
        },
      ],
      {
        cancelable: false,
      }
    );
    return true;
  };

  let [fontLoaded] = useFonts({
    bein: require("./app/assets/fonts/bein.ttf"),
    "mix-arab": require("./app/assets/fonts/mix-arab.ttf"),
    "mix-arab-regular": require("./app/assets/fonts/mix-arab-regular.ttf"),
    "mix-arab-bold": require("./app/assets/fonts/mix-arab-bold.ttf"),
    Ionicons: require("react-native-ionicons/fonts/Ionicons.ttf"),
  });

  return fontLoaded ? (
    <View style={{flex: 1}}>
      <DrawerNavigation />
    </View>
  ) : (
    <Loading />
  );
}
