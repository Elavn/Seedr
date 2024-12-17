import { AppNavigator } from "./app-navigator";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator } from "./auth-navigator";
import { useAuth } from "@/src/context/authContext";

export default function RootNavigator() {
  const { loggedInUser } = useAuth();

  return (
    
      loggedInUser ? <AppNavigator /> : <AuthNavigator />
    
  );
}