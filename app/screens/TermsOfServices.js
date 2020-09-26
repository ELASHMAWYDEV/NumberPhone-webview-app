import React from "react";
import { View, Text, StyleSheet } from "react-native";


//Components
import PageHeader from "../Components/PageHeader";



export default TermsOfServices = (props) => {
  return (
    <View style={styles.container}>
      <PageHeader {...props} title="شروط الاستخدام"/>
      <Text>TermsOfServices</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});