import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import RootNavigator from "../src/navigation";
import {
  NavigationContainer,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { AuthContext } from "@/src/context/authContext";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loaded] = useFonts({
    Inter: require("../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  
  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    
      
        <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
          <RootNavigator />
        </AuthContext.Provider>
      
  
  );
};

export default App;

const styles = StyleSheet.create({

});