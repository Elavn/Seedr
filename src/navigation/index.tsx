import { AppNavigator } from "./app-navigator";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator } from "./auth-navigator";
import { useAuth } from "@/src/context/authContext";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

export default function RootNavigator() {
  const { loggedInUser } = useAuth();

  return (
    
      loggedInUser ? <AuthNavigator /> : <AppNavigator />
    
  );
}