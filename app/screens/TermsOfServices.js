import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

//Components
import PageHeader from "../Components/PageHeader";

//Admob
import { AdMobBanner } from "expo-ads-admob";

//Config
import {
  BANNER_TEST_ID_IOS,
  BANNER_TEST_ID_ANDROID,
  BANNER_UNIT_ID_ANDROID,
  BANNER_UNIT_ID_IOS,
} from "../../config";

export default TermsOfServices = (props) => {
  return (
    <View style={styles.container}>
      <PageHeader {...props} title="شروط الاستخدام" />
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/img/logo.png")}
            style={styles.logo}
          />
        </View>
        <AdMobBanner
          bannerSize="smartBannerLandscape"
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
        />
        <Text style={styles.pageTitle}>شروط استخدام تطبيق نمبر فون</Text>
        <Text style={styles.infoText}>
          برنامج مجاني لا يطلب الدفع مقابل التحميل و الاستخدام ، انت كمستخدم
          عليك استخدام البرنامج بالشكل المراعي للقوانين ، غير المسئ والضار
          بالمستخدمين ولاغراض مشروعة وللشركة الحق الحصري في ازالة البرنامج من
          السوق والتوزيع والنشر وتوقيف الخدمة عن العمل او اضافة او ازالة اي
          محتوى بشكل حصري كما للشركة الحق في ايقاف مستخدم لسبب غير لائق وانت
          ملتزم بعدم استخدام البرنامج للتشهير والدعاية و الضرر او مخالفة
          القوانين في بلدك او الاحتيال او المضايقة او القرصنة وانت مسؤول بشكل
          فردي عن استخدامك لتطبيق والمراسلة والمحتوى وجميع الامور المتعلقة
          باستخدامك هي تحت مسؤوليتك وانت مطالب بالتعويض للشركة او الشركة غير
          مسؤولة عن اي اضرار قد يلحق بك من خلال استخدامك للتطبيق او اي تعويض
          لاحقا ، جسدي او معنوي او مادي )
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 20,
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "60%",
    height: "100%",
  },
  pageTitle: {
    fontFamily: "mix-arab-regular",
    fontSize: 24,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 15,
    color: "#000",
  },
  infoText: {
    fontFamily: "mix-arab-regular",
    fontSize: 16,
    paddingHorizontal: 18,
    lineHeight: 26,
    color: "#636e72",
    textAlign: "center",
    marginBottom: 40,
  },
});
