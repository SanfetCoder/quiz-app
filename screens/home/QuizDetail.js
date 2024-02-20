import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import { HomeContext } from '../../context/HomeProvider'
import { fetchQuizByName } from '../../models/quiz';
import { LinearGradient } from 'expo-linear-gradient';
import FavButton from '../../components/FavButton';
import { AppContext } from '../../context/AppProvider';

const QuizDetail = () => {
  const {selectedQuiz} = useContext(HomeContext);
  const fetchedQuiz = fetchQuizByName(selectedQuiz)
  return (
    <View style={styles.container}>
      <Image 
        style={{
          width : '100%',
          height : 225,
          borderRadius : 20
        }}
        source={fetchedQuiz.image}
        />
      <Header />
      <Text style={styles.description}>{fetchedQuiz.description}</Text>
      <LinearGradient
        colors={['#5224B7','#A248FF']}
        style={styles.button}
        >
          <TouchableNativeFeedback>
            <Text 
              style={{
                color : 'white',
                fontWeight : '600'
              }}
              >
                Start
            </Text>
          </TouchableNativeFeedback>
      </LinearGradient>
    </View>
  )
}

const Header = () => {
  const {selectedQuiz} = useContext(HomeContext)
  const {handleAddFavQuizzes, favQuizzes} = useContext(AppContext)
  const fetchedQuiz = fetchQuizByName(selectedQuiz)
  const isLiked = favQuizzes.some(quiz => quiz.title === selectedQuiz.title) 
  console.log(isLiked)
  return (
    <View 
      style={{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        width : '100%',
        marginTop : 15
      }}>
      <Text style={styles.title}>{fetchedQuiz.title} quiz</Text>
      <FavButton onPress={()=>handleAddFavQuizzes(selectedQuiz)} isLiked={isLiked}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    width : '100%',
    height : '100%',
    backgroundColor : 'white',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'flex-start',
    justifyContent : 'flex-start',
    padding: 15
  },
  title : {
    fontSize : 18,
    fontWeight : '600',
    marginLeft : 10
  },
  description : {
    marginLeft : 10,
    marginTop : 5,
    color : "#EEAACC"
  },
  button : {
    width: '100%',
    borderRadius : 12,
    color : 'white',
    height : 45,
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 20
  }
})

export default QuizDetail
