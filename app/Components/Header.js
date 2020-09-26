import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableNativeFeedback,
  Image
} from "react-native";
import Icon from "react-native-ionicons";

//Assets
import Colors from "../assets/Colors";

export default Header = (props) => {
  return (
    <>
    <View style={styles.container}>
      <TouchableNativeFeedback
        useForeground
        onPress={() => props.navigation.openDrawer()}
      >
        <View style={styles.iconContainer}>
          <Icon
            size={42}
            name="ios-menu"
            style={styles.listIcon}
            color="#ffffff"
          />
        </View>
      </TouchableNativeFeedback>
      <View style={styles.logoContainer}>
        <View style={styles.logoWrapper}>
        <Image source={require("../assets/img/logo.png")} style={styles.logo} />
        </View>
      </View>
      <View style={styles.leftContainer}></View>
      </View>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.primary,
    height: 80,
    flexDirection: "row-reverse",
    paddingBottom: 5,
    zIndex: 2
    
  },
  iconContainer: {
    marginRight: 5,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    overflow: "hidden",
  },
  logoContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
  },
  listIcon: {
    transform: [{ scale: -1 }],
  },
  logoWrapper: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    top: 5,
  },
  logo: {
    resizeMode: "contain",
    width: 65,
    height: 65,
  },

});
