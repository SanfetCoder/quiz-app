import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../context/AppProvider';
import { InQuizContext, InQuizProvider } from '../context/InQuizProvider';

const InQuiz = () => {
  const [didStart, setDidStart] = useState(false);

  function handleUpdateStartTime(){
    setDidStart(_ => true);
  }

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
            justifyContent : 'space-between',
          }}>
            <NavBar />
            { didStart ? <Quiz /> : <Timer onFinish={handleUpdateStartTime}/>}
        </SafeAreaView>
      </LinearGradient>
    </InQuizProvider>
  )
}

const Timer = ({onFinish}) => {
  const [currentTime, setCurentTime] = useState(5);

  // useEffect(()=>{
  //   if (currentTime <= 0) return onFinish()
  //   setTimeout(()=>{
  //     setCurentTime(prev => prev - 1)
  //   }, 1000)
  // },[currentTime])

  return (
    <View
      style={{
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'
      }}
    >
      <View
      style={{
        height : 120,
        width : 120,
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        borderColor : 'red',
        borderWidth : 5,
        borderRadius : 100,
      }}
    >
      <Text
        style={{
          color : 'white',
          fontSize : 40,
        }}
      >{currentTime}</Text>
      </View>
    </View>
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
          fontSize : 15,
          fontWeight : '600'
        }}
        >
        {currentQuestionIndex + 1} / {maxQuestions}
      </Text>
    </View>
  )
}

const Quiz = () => {
  const {selectedQuiz} = useContext(AppContext);
  const {currentQuestionIndex, currentScore} = useContext(InQuizContext);
  const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
  const isQuizDone = currentQuestionIndex >= selectedQuiz.questions.length;
  const maxScore = selectedQuiz.questions.length;

  if (isQuizDone) {
    return (
      <View
        style={{
          height : '100%',
          display : 'flex',
          flexDirection : 'column',
          justifyContent : 'center'
        }}
      >
        <Text
          style={{
            color : 'white',
            fontSize : 30
          }}
        >
          {currentScore} / {maxScore}
        </Text>
      </View>
    )
  }

  return (
    <View
      style={{
        height : '70%',
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
        {currentQuestion.question}
      </Text>
      <Choices />
      <Pagination />
    </View>
  )
}

const Choices = () =>{
  const {currentQuestionIndex} = useContext(InQuizContext);
  const {selectedQuiz} = useContext(AppContext);
  const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
  const gap = 16;
  const choiceLabels = {
    a : "#F8C241",
    b : "#55D3F7",
    c : "#A3EB6D",
    d : "#FD8987",
  };
  const choices = Object.keys(choiceLabels).map((choice, index) => <Choice circleColor={choiceLabels[choice]} choice={choice} title={currentQuestion.options[index]}/>)

  return (
    <View
      style={{height : 300}}
      >
      <FlatList
      scrollEnabled={false}
      contentContainerStyle={{ gap }}
      columnWrapperStyle={{ gap }}
      data={choices} 
      renderItem={({item})=> item} 
      numColumns={2} 
      />
    </View>
      
  )
}

const Choice = ({choice, title, circleColor}) => {
  const {selectedQuiz} = useContext(AppContext);
  const {currentQuestionIndex, setCurrentQuestionIndex, setCurrentScore} = useContext(InQuizContext);
  const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
  const correctAnswerIndex = currentQuestion.correctAnswer;
  const isCorrect = currentQuestion.options[correctAnswerIndex] === title;

  function handleCheckAnswer(){
    if (isCorrect) setCurrentScore((prev) => {
      const addedScore = prev + 1;
      return addedScore
    })
    setCurrentQuestionIndex(prev => prev + 1);
  }

  return (
    <TouchableOpacity
      onPress={handleCheckAnswer}
      style={{
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : 100,
        backgroundColor : 'white',
        height : 140,
        width : 150,
        borderRadius : 15,
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        rowGap : 10,
      }}
    >
      <View
      style={{
        backgroundColor : circleColor,
        height : 40,
        width : 40,
        borderRadius : 50,
        display: 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
      }}>
        <Text 
          style={{
            color : 'white',
            textAlign : "center",
            fontSize : 19,
            fontWeight : '600'
          }}>
            {choice.toUpperCase()}
        </Text>
      </View>
      <Text
        style={{
          textAlign : 'center',
          fontWeight : '600'
        }}
      >{title}</Text>
    </TouchableOpacity>
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
