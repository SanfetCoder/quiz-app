import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "./screens/Profile";
import { AppProvider } from "./context/AppProvider";
import { createStackNavigator } from "@react-navigation/stack";
import InQuiz from "./screens/InQuiz";
import ToastManager from 'toastify-react-native'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home Wrapper"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home Wrapper"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile Wrapper"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <ToastManager position="bottom"/>
      <AppProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Main" component={HomeNavigator} />
          <Stack.Screen name="StartQuiz" component={InQuiz} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
