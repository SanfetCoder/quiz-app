import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { HomeContext } from '../../context/HomeProvider'
import { fetchQuizByName } from '../../models/quiz';
import { LinearGradient } from 'expo-linear-gradient';

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
      <Text style={styles.title}>{fetchedQuiz.title} quiz</Text>
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
    marginTop : 15,
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
