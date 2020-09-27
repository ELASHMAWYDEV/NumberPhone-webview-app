import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

//Components
import PageHeader from "../Components/PageHeader";

export default PrivacyPolicy = (props) => {
  return (
    <View style={styles.container}>
      <PageHeader {...props} title="سياسة الخصوصية" />
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/img/logo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.pageTitle}>سياسة الخصوصية لتطبيق نمبر فون</Text>

        <Text style={styles.infoText}>
          هاذي الخصوصية للاتفاق بين نمبر فون والمستخدم جميع الخدمات الموجوده
          داخل التطبيق بعد تحميلك لتطبيق انتتوافق على جميع الشروط وفي حال عدم
          موافقتك عليك التوقف عن الاستخدام .. كما يجب التنوية بمراعات القوانين
          فيبلدك لجهة القيود والانظمة والسن القانوني وانت توافق على علم ان
          البرنامج ليس بديل عن الهاتف الاساسي . نحن نقدر خصوصيتك. تُعلمك سياسة
          الخصوصية هذه باختيارك لمواصلة استخدام البرنامج أو التوقف عن
          استخدامالمعلومات. نستخدم المعلومات التي نجمعها لتشغيل وتحسين برنامجنا
          عبر الإنترنت ودعم العملاء. لممارسة حقوقناالقانونية أو الدفاع ضد
          المطالبات القانونية للتحقيق أو منع أو اتخاذ الإجراءات المتعلقة
          بالأنشطة غير القانونية ، مثلالاحتيال المشتبه به أو الإساءة أو انتهاكات
          سياساتنا أو لحماية حقوقنا وممتلكاتنا أو طلب قضائي الوصول إلى المعلومات
          الخاصة بك يمكنك الوصول إلى حسابك أو حذفه في أي وقت ، عن طريق حذف
          التطبيق وسيتم حذف جميع بياناتك بالموافقة علىاستخدام موقع الويب أو
          البرنامج ، فإنك توافق على سياسة الخصوصية الخاصة بنا ، إذا كانت لديك
          أسئلة بخصوصسياسة الخصوصية هذه ، يمكنك التواصل معنا من خلال التطبيق
          للتخزين والسلامة نحن نعمل ويمكننا الاستمرار في تشغيل الخوادم في عدد من
          البلدان المختلفة حول العالم ، لذلك قد لا يكون الخادم الذييتم استخدامه
          وتخزين معلوماتك الشخصية في بلدك ، نستخدم مجموعة متنوعة من تقنيات
          وإجراءات الأمان لمنعالخسارة وسوء الاستخدام ، والوصول غير المصرح به
          باستخدامه أو الكشف عن المعلومات
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
  },
  infoText: {
    fontFamily: "mix-arab-regular",
    fontSize: 16,
    paddingHorizontal: 18,
    lineHeight: 26,
    color: "#636e72",
    textAlign: "center",
    marginBottom: 40
  },
});
