import { useContext, useState } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, Button, TouchableOpacity } from "react-native";
import CategoryButton from "../../components/CategoryButton";
import { quizzes } from "../../models/quiz";
import Section from "../../components/Section";
import { MainScreenContext } from "../../context/MainScreenProvider";
import { HomeContext } from "../../context/HomeProvider";

const MainScreen = ({route}) => {
  const {selectedQuiz, handleSelectQuiz} = useContext(HomeContext);
  const categories = ["All","Science","Programming","Mathematics"];
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <MainScreenContext.Provider 
        value={{
          handleSelectQuiz
        }}>
        <View>
          <ScrollView horizontal style={styles.categoryList} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            {
              categories.map((category)=>{
                return <CategoryButton onPress={()=>setSelectedCategory(category)} isActive={category === selectedCategory} key={category} title={category}/>
              })
            }
          </ScrollView>
        </View>
        <ForYouSection />
        <AllSection />
      </MainScreenContext.Provider>
    </SafeAreaView>
  )
}

const ForYouSection = () => {
  return (
    <Section header="For you">
      {
        quizzes.map((quiz)=>{
          return (<QuizItem quiz={quiz} key={quiz.title} />)
        })
      }
    </Section>
  )
}

const AllSection = () => {
  return (
    <Section header="All">
      {
        quizzes.map((quiz)=>{
          return (<QuizItem quiz={quiz} key={quiz.title} />)
        })
      }
    </Section>
  )
}

const QuizItem = ({quiz}) => {
  const {handleSelectQuiz} = useContext(MainScreenContext);
  return (
    <TouchableOpacity onPress={()=>handleSelectQuiz(quiz.title)} style={styles.quizItem}>
      <Image 
        style={{
          width: 125,
          height : 125,
          borderRadius : 20,
        }}
        source={quiz.image}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'flex-start',
    backgroundColor : 'white',
    rowGap : 25,
  },
  categoryList : {
    display : 'flex',
    flexDirection : 'row',
    columnGap : 10,
    marginHorizontal : 10,
    marginTop : 15,
  },
  quizItem : {
    marginRight : 15
  }
})

export default MainScreen