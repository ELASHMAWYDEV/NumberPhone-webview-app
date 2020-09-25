import React from "react";
import {
  StatusBar,
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-ionicons";


//Screens
import Home from "../screens/Home";
import About from "../screens/About";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import TermsOfServices from "../screens/TermsOfServices";

const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName="Home"
        drawerPosition="right"
        drawerType="front"
        statusBarAnimation={true}
        hideStatusBar={true}
        lazy={true}
      >
        <Drawer.Screen name="Home" component={Home} drawerLabel="الرئيسية"/>
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Drawer.Screen name="TermsOfServices" component={TermsOfServices} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView style={styles.drawerContainer} {...props}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/img/logo.png")} style={styles.logo} />
      </View>
      <Text style={styles.appName}>نمبر فون</Text>
      <DrawerItemList {...props} />
      <DrawerItem label="الرئيسية" labelStyle={styles.labelText}/>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    paddingTop: StatusBar.currentHeight,
  },
  logoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "70%",
    height: 200
  },
  appName: {
    fontFamily: "mix-arab-bold",
    fontSize: 28,
    textAlign: "center",
    marginVertical: 15
  },
  labelText: {
    fontFamily: "mix-arab-regular",
    fontSize: 18,
  }
});
