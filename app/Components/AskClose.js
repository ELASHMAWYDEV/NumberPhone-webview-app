import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";

export default AskClose = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Modal visible={visible} stlye={styles.modal}>
      <View style={styles.box}>
        <Text style={styles.title}>إغلاق التطبيق</Text>
        <Text style={styles.text}>هل تريد حقا إغلاق التطبيق ؟</Text>
        <View stlye={styles.btnsContainer}>
          <TouchableNativeFeedback>
            <View stlye={styles.btnRight}>
              <Text style={styles.btnTextYes}>نعم</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View stlye={styles.btnLeft}>
              <Text style={styles.btnTextNo}>لا</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
});
