import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../context/AppProvider';
import { InQuizContext, InQuizProvider } from '../context/InQuizProvider';

const InQuiz = () => {
  return (
    <InQuizProvider>
      <LinearGradient
        colors={['#5224B7','#A248FF']}
        >
        <SafeAreaView
          style={{
            height : '100%',
            width : '100%',
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            justifyContent : 'space-between'
          }}>
            <NavBar />
            <Quiz />
        </SafeAreaView>
      </LinearGradient>
    </InQuizProvider>
  )
}

const Pagination = () => {
  const {selectedQuiz} = useContext(AppContext);
  const {currentQuestionIndex} = useContext(InQuizContext);
  const maxQuestions = selectedQuiz.questions.length;
  return (
    <View>
      <Text 
        style={{
          color : 'white',
          fontSize : 15
        }}
        >
        {currentQuestionIndex + 1} / {maxQuestions}
      </Text>
    </View>
  )
}

const Quiz = () => {
  const {selectedQuiz} = useContext(AppContext);
  const {currentQuestionIndex} = useContext(InQuizContext);
  return (
    <View
      style={{
        height : '60%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        alignItems : 'center'
      }}
    >
      <Text 
        style={{
          color : 'white',
          fontSize : 20,
          fontWeight : '600',
          textAlign : 'center',
          width : '80%',
          lineHeight : 30
        }}>
        {selectedQuiz.questions[currentQuestionIndex].question}
      </Text>
      <Pagination />
    </View>
  )
}

const NavBar = () => {
  const {selectedQuiz} = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <View
      style={{
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 15,
        marginTop : 10,
      }}
    >
      <MaterialCommunityIcons 
        onPress={()=>navigation.navigate('Home')}
        style={{
          color: 'white',
          position : 'absolute',
          left : 15,
        }} 
        size={30} 
        name="close-circle"/>
      <Text
        style={{
          color : 'white',
          fontWeight : '600',
          fontSize : 20,
        }}
      >{selectedQuiz.title}</Text>
    </View>
  )
}

export default InQuiz
