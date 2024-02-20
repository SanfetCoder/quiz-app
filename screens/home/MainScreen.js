import { useContext, useState } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, Button, TouchableOpacity } from "react-native";
import CategoryButton from "../../components/CategoryButton";
import { quizzes } from "../../models/quiz";
import Section from "../../components/Section";
import { useNavigation } from '@react-navigation/native';
import { HomeContext } from "../../context/HomeProvider";
import { categories } from "../../models/categories";
import { AppContext } from "../../context/AppProvider";

const MainScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const {favQuizzes} = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView horizontal style={styles.categoryList} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          {
            categories.map((category)=>{
              return <CategoryButton onPress={()=>setSelectedCategory(category)} isActive={category === selectedCategory} key={category} title={category}/>
            })
          }
        </ScrollView>
      </View>
      {favQuizzes.length > 0 && <ForYouSection />}
      <AllSection />
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
  const { handleSelectQuiz} = useContext(HomeContext);
  const navigate = useNavigation();
  return (
    <TouchableOpacity 
      onPress={()=>{
        handleSelectQuiz(quiz.title)
        navigate.navigate("Quiz")
      }} 
      style={styles.quizItem}
      >
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