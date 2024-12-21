
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/app/home";
import { ACCENT, BLACK, INPUT, WHITE } from "@/styles/colors";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/app/home";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../screens/app/profile";
import TransactionsScreen from "../screens/app/transactions";
import BudgetScreen from "../screens/app/budget";
import Icon from 'react-native-ionicons';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';


type AppStackList = {
  Home: undefined;
};

const Tab = createBottomTabNavigator();

export const AppNavigator=() => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <SafeAreaView style={styles.fullscreen}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home-outline';
              size=25;
            } else if (route.name === 'Transactions') {
              iconName = focused ? 'wallet' : 'wallet-outline'; size= 24
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline'; size=24
            } else if (route.name === 'Budget') {
              iconName = focused ? 'pie-chart' : 'pie-chart-outline'; size=24
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: ACCENT,
          tabBarInactiveTintColor: WHITE,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [
            styles.tabBarStyle,
            { backgroundColor: '#1E1E1E' }, // Background color for the tab bar
          ],
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '400',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Dashboard" component={HomeScreen} />
        <Tab.Screen name="Transactions" component={TransactionsScreen} />
        <Tab.Screen name="Budget" component={BudgetScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      </SafeAreaView>
      </ThemeProvider>
  );
}

/*export const AppNavigator = () => {
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
*/

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70, 
    borderTopWidth: 0, 
    elevation: 5,
    paddingTop: 8,
    borderRadius: 15,
  },
  fullscreen: {
    flex: 1
  },
  keyboard: {
    flex: 1
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
