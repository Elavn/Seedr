
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/app/home";
import { WHITE } from "@/styles/colors";

type AppStackList = {
  Home: undefined;
};

export const AppNavigator = () => {
  const AppStack = createNativeStackNavigator<AppStackList>();
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <AppStack.Screen name="Home"
       component={Dashboard} 
       />
    </AppStack.Navigator>
  );
};
