import React from "react";
import { View, Text, StyleSheet } from "react-native";


//Components
import PageHeader from "../Components/PageHeader";



export default PrivacyPolicy = (props) => {
  return (
    <View style={styles.container}>
      <PageHeader {...props} title="سياسة الخصوصية"/>
      <Text>PrivacyPolicy</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});