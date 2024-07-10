import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../colors";
import Header from "./Header";
import Bottom from "./Bottom";
import { GptLogo } from "./Icons";

const HomeScreen = ({ navigation, route }) => {
  const { title } = route.params ? route.params : "";
  const [isMenuOpen, setMenuState] = useState(false);
  const toggleMenuAnimation = () => {
    navigation?.toggleDrawer();
    setMenuState(!isMenuOpen);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header onPressFunction={toggleMenuAnimation}></Header>
      </View>
      <View style={styles.middleContainer}>
        {title ? (
          <Text style={styles.title}>{title}</Text>
        ) : (
          <GptLogo size={1}></GptLogo>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <Bottom></Bottom>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    flex: 1,
    width: "100%",
    height: "100%",
    paddingVertical: 5,
    backgroundColor: COLORS.thm_blck,
    opacity: 1,
  },
  closeContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    zIndex: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.theme_white,
  },
  headerContainer: {
    width: "100%",
    height: 60,
  },
  bottomContainer: {
    width: "100%",
    height: 70,
  },
  middleContainer: {
    flex: 1,
    backgroundColor: COLORS.thm_blck,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.theme_white,
  },
});

export default HomeScreen;
