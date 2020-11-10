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

//Admob
import { AdMobBanner } from "expo-ads-admob";

//Assets
import Colors from "../assets/Colors";

//Config
import { GOOGLE_PLAY_URL, APP_STORE_URL, APP_NAME, SHARE_APP_TEXT } from "../../config";
import {
  BANNER_TEST_ID_IOS,
  BANNER_TEST_ID_ANDROID,
  BANNER_UNIT_ID_ANDROID,
  BANNER_UNIT_ID_IOS,
} from "../../config";

//Screens
import Home from "../screens/Home";
import Azkar from "../screens/Azkar";
import About from "../screens/About";
import DateConverter from "../screens/DateConverter";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName="Home"
        drawerPosition="right"
        drawerType="front"
        statusBarAnimation={false}
        hideStatusBar={false}
        lazy={true}
        drawerStyle={{
          width: 300,
        }}
      >
        <Drawer.Screen name="Home" component={Home} drawerLabel="الرئيسية" />
        <Drawer.Screen
          name="Azkar"
          component={Azkar}
          drawerLabel="الأذكار"
        />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="DateConverter" component={DateConverter} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const CustomDrawer = (props) => {
  //Share the app function
  const shareApp = async () => {
    try {
      await Share.share({
        message: SHARE_APP_TEXT,
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
  };

  return (
    <DrawerContentScrollView style={styles.drawerContainer} {...props}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/img/logo.png")} style={styles.logo} />
      </View>
      <Text style={styles.appName}>{APP_NAME}</Text>

      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate("Home")}
        useForeground
      >
        <View style={[styles.btn, { marginTop: 15 }]}>
          <Icon
            color={Colors.primary}
            name={"ios-home"}
            size={26}
            style={styles.labelIcon}
          />
          <Text style={styles.labelText}>الرئيسية</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate("DateConverter")}
        useForeground
      >
        <View style={styles.btn}>
          <Icon
            color={Colors.primary}
            name={"ios-calendar"}
            size={26}
            style={styles.labelIcon}
          />
          <Text style={styles.labelText}>محول التاريخ</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate("Azkar")}
        useForeground
      >
        <View style={styles.btn}>
          <Icon
            color={Colors.primary}
            name={"ios-book"}
            size={26}
            style={styles.labelIcon}
          />
          <Text style={styles.labelText}>الأذكار</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => props.navigation.navigate("About")}
        useForeground
      >
        <View style={styles.btn}>
          <Icon
            color={Colors.primary}
            name={"ios-information-circle-outline"}
            size={26}
            style={styles.labelIcon}
          />
          <Text style={styles.labelText}>عن التطبيق</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => shareApp()} useForeground>
        <View style={styles.btn}>
          <Icon
            color={Colors.primary}
            name={"share"}
            size={26}
            style={styles.labelIcon}
          />
          <Text style={styles.labelText}>مشاركة التطبيق</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => rateApp()} useForeground>
        <View style={styles.btn}>
          <Icon
            color={Colors.primary}
            name={"ios-star"}
            size={26}
            style={styles.labelIcon}
          />
          <Text style={styles.labelText}>تقييم التطبيق</Text>
        </View>
      </TouchableNativeFeedback>
      <AdMobBanner
        bannerSize="mediumRectangle"
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
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    paddingTop: StatusBar.currentHeight,
  },
  logoContainer: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "80%",
    height: 100,
  },
  appName: {
    fontFamily: "mix-arab-bold",
    fontSize: 28,
    textAlign: "center",
    marginVertical: 10,
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

export default DrawerNavigation;
