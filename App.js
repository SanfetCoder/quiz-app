import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            title : 'Home',
            tabBarIcon : ({color, size}) => {
              return <MaterialCommunityIcons name="home" color={color} size={size}/>
            }
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
