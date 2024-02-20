import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./MainScreen";
import QuizDetail from './QuizDetail';
import HomeProvider from '../../context/HomeProvider';

const Stack = createStackNavigator();

const Home = () => {

  return (
    <HomeProvider>
      <Stack.Navigator screenOptions={{ headerShown : true}}>
        <Stack.Screen 
          name="Main"
          component={MainScreen}
        />
        <Stack.Screen 
        name="Quiz"
        component={QuizDetail} />
      </Stack.Navigator>
    </HomeProvider>
  )
}


export default Home