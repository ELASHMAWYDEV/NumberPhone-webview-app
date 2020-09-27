import React, { useEffect } from "react";
import {
  StatusBar,
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  StyleSheet,
  Linking,
  Share,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Icon from "react-native-ionicons";

//Config
import { EMAIL, GOOGLE_PLAY_URL, APP_STORE_URL } from "../../config";

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

  //Share the app function
  const shareApp = async () => {
    try {
      await Share.share({
        message: `تعرف إنك ممكن تبحث عن أي رقم في العالم من خلال تطبيق نمبر فون !\nممكن تحمله من علي جوجل بلاي من هنا ${GOOGLE_PLAY_URL}\nأو من علي App Store من هنا ${APP_STORE_URL}`,
      });
    } catch (e) {
      alert(e.message);
    }
  };


  //Rate the app
  const rateApp = () => {
    const url = Platform.OS === "ios" ? APP_STORE_URL : GOOGLE_PLAY_URL;
    if (url) {
      
      Linking.openURL(url);
    } else {
      return null;
    }
  }

  return (
    <DrawerContentScrollView style={styles.drawerContainer} {...props}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/img/logo.png")} style={styles.logo} />
      </View>
      <Text style={styles.appName}>نمبر فون</Text>
      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate("Home")}
        useForeground
      >
        <View style={styles.btn}>
          <Icon name={"ios-home"} size={26} style={styles.labelIcon} />
          <Text style={styles.labelText}>الرئيسية</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate("About")}
        useForeground
      >
        <View style={styles.btn}>
          <Icon
            name={"ios-information-circle-outline"}
            size={26}
            style={styles.labelIcon}
          />
          <Text style={styles.labelText}>عن التطبيق</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => shareApp()} useForeground>
        <View style={styles.btn}>
          <Icon name={"share"} size={26} style={styles.labelIcon} />
          <Text style={styles.labelText}>مشاركة التطبيق</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => rateApp()} useForeground>
        <View style={styles.btn}>
          <Icon name={"ios-star"} size={26} style={styles.labelIcon} />
          <Text style={styles.labelText}>تقييم التطبيق</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => Linking.openURL(`mailto:${EMAIL}`)}
        useForeground
      >
        <View style={styles.btn}>
          <Icon name={"ios-mail"} size={26} style={styles.labelIcon} />
          <Text style={styles.labelText}>تواصل معنا</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate("PrivacyPolicy")}
        useForeground
      >
        <View style={styles.btn}>
          <Icon name={"ios-lock"} size={26} style={styles.labelIcon} />
          <Text style={styles.labelText}>سياسة الخصوصية</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate("TermsOfServices")}
        useForeground
      >
        <View style={styles.btn}>
          <Icon name={"paper"} size={26} style={styles.labelIcon} />
          <Text style={styles.labelText}>شروط الاستخدام</Text>
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
    borderBottomWidth: 1,
  },
  labelText: {
    fontFamily: "mix-arab-regular",
    fontSize: 18,
  },
  labelIcon: {
    width: 30,
    textAlign: "center",
    marginLeft: 15,
  },
});
