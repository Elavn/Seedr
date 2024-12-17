import React from "react";
import { ImageBackground, StyleSheet, Platform, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  return (
    
      
      <ImageBackground
          source={require("../../../assets/images/logo.png")}
          style={styles.bgImg}
        ></ImageBackground>

   
        
     
   
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  bgImg: {
    flex: 1,
    
  },
  safeArea: {
    flex: 1,
    flexGrow: 1
  },
  txt: {
    position: "absolute",
    right: 10,
    top: 60,
    color: "#000",
    fontSize: 18,
  },
  fullscreen: {
    flex: 1
  }
});