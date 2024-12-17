import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/login";
import SignupScreen from "../screens/auth/signup";
import Onboard from "../screens/auth/onboard";

export type AuthStackList = {
  Login: undefined;
  Register: undefined;
  Onboard: undefined;
};

export const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator<AuthStackList>();
  return (
    <AuthStack.Navigator
      initialRouteName="Onboard"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Onboard" component={Onboard} />
      <AuthStack.Screen name="Register" component={SignupScreen} />
      
    </AuthStack.Navigator>
  );
};