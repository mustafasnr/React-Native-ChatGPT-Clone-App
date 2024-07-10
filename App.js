import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { FourDotIcon, GptLogo } from "./components/Icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import EIcon from "react-native-vector-icons/Entypo";
import { COLORS } from "./colors";
import { DateItem, RowContainerItem } from "./components/DrawerComponents";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider theme={PaperDarkTheme}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            headerShown: false,
            drawerType: "slide",
            drawerStyle: {
              width: "80%",
            },
          }}>
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

function CustomDrawerContent({ navigation }) {
  const clearHomeTitle = () => {
    navigation.navigate("Home", { title: "" });
    navigation.closeDrawer();
  };
  // 3 tane başlık
  const group1 = [
    "Güneş Sistemi'nin Gizemleri",
    "Antik Mısır Tarihi",
    "Modern Sanat Akımları",
  ];

  // 7 tane başlık
  const group2 = [
    "Klasik Müzik Bestecileri",
    "Rönesans Dönemi",
    "Büyük Keşifler Çağı",
    "Dünya Mitolojileri",
    "Orta Çağ Şövalyeleri",
    "Bilim ve Teknolojinin Gelişimi",
    "Dünya Savaşı Tarihi",
  ];

  // 5 tane başlık
  const group3 = [
    "Popüler Psikoloji",
    "Antarktika'nın Keşfi",
    "Astronomi ve Yıldızlar",
    "Deniz Bilimleri",
    "Robotik ve Yapay Zeka",
  ];
  return (
    <View style={styles.drawerContent}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={24} color={"white"}></Icon>
          <TextInput
            placeholder="Ara"
            placeholderTextColor={"white"}
            style={styles.input}></TextInput>
        </View>
      </View>
      <View style={{ flex: 1, height: "100%" }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}>
          <Pressable style={styles.rowContainer} onPress={clearHomeTitle}>
            <View style={styles.iconBox}>
              <GptLogo navigation={navigation} size={0.5}></GptLogo>
            </View>
            <View style={styles.rowTextBox}>
              <Text style={styles.rowText}>ChatGPT</Text>
            </View>
          </Pressable>

          <Pressable style={styles.rowContainer} onPress={clearHomeTitle}>
            <View style={styles.iconBox}>
              <FourDotIcon>GPT'leri Keşfet</FourDotIcon>
            </View>
            <View style={styles.rowTextBox}>
              <Text style={styles.rowText}>GPT'leri Keşfet</Text>
            </View>
          </Pressable>
          <DateItem title={"Dün"}></DateItem>
          {group1.map((title, index) => (
            <RowContainerItem
              navigation={navigation}
              key={index}
              title={title}></RowContainerItem>
          ))}
          <DateItem title={"Önceki 7 Gün"}></DateItem>
          {group2.map((title, index) => (
            <RowContainerItem
              navigation={navigation}
              key={index}
              title={title}></RowContainerItem>
          ))}
          <DateItem title={"Önceki 30 Gün"}></DateItem>
          {group3.map((title, index) => (
            <RowContainerItem
              navigation={navigation}
              key={index}
              title={title}></RowContainerItem>
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "purple",
            borderRadius: 25,
            marginHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{ color: "white", fontSize: 18 }}>MU</Text>
        </View>
        <View style={{ height: "100%", flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 24, color: COLORS.theme_white }}>
            Mustafa
          </Text>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            marginHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <EIcon
            name="dots-three-horizontal"
            size={28}
            color={COLORS.theme_white}></EIcon>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  LINE: {
    width: "95%",
    height: 1,
    backgroundColor: COLORS.theme_white,
    alignSelf: "center",
    marginVertical: 15,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBarContainer: {
    paddingTop: 10,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.thm_blck,
    opacity: 0.95,
    zIndex: 5,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    width: "100%",
  },
  drawerContent: {
    height: "100%",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    backgroundColor: COLORS.thm_blck,
  },
  drawerItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  drawerText: {
    color: "#fff",
    fontSize: 18,
  },
  searchBox: {
    width: "90%",
    height: "90%",
    borderRadius: 60,
    backgroundColor: "#333",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  input: {
    paddingLeft: 20,
    fontSize: 18,
    color:COLORS.theme_white
  },
  rowContainer: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    height: 60,
    marginBottom: 5,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconBox: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  rowText: {
    color: "white",
    fontSize: 20,
  },
  rowTextBox: {
    flex: 0.9,
    justifyContent: "center",
  },
  dateContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
});
