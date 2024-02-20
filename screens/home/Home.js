import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./MainScreen";
import QuizDetail from './QuizDetail';
import { useState } from 'react';

const Stack = createStackNavigator();

const Home = () => {
  const [selectedQuiz, setSelectedQuiz] = useState("none selected")
  return (
    <Stack.Navigator screenOptions={{ headerShown : false}}>
      <Stack.Screen name="Main" component={MainScreen} initialParams={{selectedQuiz}}/>
      <Stack.Screen name="Quiz" component={QuizDetail} />
    </Stack.Navigator>
  )
}


export default Home