import React, {useEffect} from "react";
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
        <Drawer.Screen name="Home" component={Home} drawerLabel="الرئيسية" />
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
      <TouchableNativeFeedback onPress={() => props.navigation.navigate("Home")} useForeground>
        <View style={styles.btn}>
          <Icon name={"ios-home"} size={26} style={styles.labelIcon}/>
          <Text style={styles.labelText}>الرئيسية</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => props.navigation.navigate("About")} useForeground>
        <View style={styles.btn}>
          <Icon name={"ios-information-circle-outline"} size={26} style={styles.labelIcon}/>
          <Text style={styles.labelText}>عن التطبيق</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => null} useForeground>
        <View style={styles.btn}>
          <Icon name={"share"} size={26} style={styles.labelIcon}/>
          <Text style={styles.labelText}>مشاركة التطبيق</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => null} useForeground>
        <View style={styles.btn}>
          <Icon name={"ios-information-circle-outline"} size={26} style={styles.labelIcon}/>
          <Text style={styles.labelText}>تقييم التطبيق</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => null} useForeground>
        <View style={styles.btn}>
          <Icon name={"ios-information-circle-outline"} size={26} style={styles.labelIcon}/>
          <Text style={styles.labelText}>تواصل معنا</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => props.navigation.navigate("PrivacyPolicy")} useForeground>
        <View style={styles.btn}>
          <Icon name={"ios-lock"} size={26} style={styles.labelIcon}/>
          <Text style={styles.labelText}>سياسة الخصوصية</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => props.navigation.navigate("TermsOfServices")} useForeground>
        <View style={styles.btn}>
          <Icon name={"paper"} size={26} style={styles.labelIcon}/>
          <Text style={styles.labelText}>سياسة الاستخدام</Text>
        </View>
      </TouchableNativeFeedback>
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
    height: 200,
  },
  appName: {
    fontFamily: "mix-arab-bold",
    fontSize: 28,
    textAlign: "center",
    marginVertical: 15,
  },
  btn: {
    flex: 1,
    height: 55,
    overflow: "hidden",
    marginHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: "row-reverse",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  },
  labelText: {
    fontFamily: "mix-arab-regular",
    fontSize: 18,
  },
  labelIcon: {
    width: 30,
    textAlign: "center",
    marginLeft: 15
  },
});
