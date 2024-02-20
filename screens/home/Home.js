import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./MainScreen";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown : false}}>
      <Stack.Screen name="Main" component={MainScreen} />
      {/* <Stack.Screen name="QuizDetail" component={QuizDetailScreen} /> */}
    </Stack.Navigator>
  )
}


export default Home