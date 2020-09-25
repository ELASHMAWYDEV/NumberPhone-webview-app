import React, {useEffect, useState} from 'react';
import DrawerNavigation from "./app/Navigation/DrawerNavigation";
import {useFonts} from "expo-font";


//Components
import Loading from "./app/Components/Loading";

export default function App() {

  let [fontLoaded] = useFonts({
    "bein": require("./app/assets/fonts/bein.ttf"),
    "mix-arab": require("./app/assets/fonts/mix-arab.ttf"),
    "mix-arab-regular": require("./app/assets/fonts/mix-arab-regular.ttf"),
    "mix-arab-bold": require("./app/assets/fonts/mix-arab-bold.ttf")
  });

  return (
    fontLoaded ?
      <DrawerNavigation />
      :
      <Loading />
  );
}



