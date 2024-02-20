import { useState } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image } from "react-native";
import CategoryButton from "../components/CategoryButton";
import { quizzes } from "../models/quiz";
import Section from "../components/Section";

const Home = () => {
  const categories = ["All","Science","Programming","Mathematics"];
  const [selectedCategory, setSelectedCategory] = useState('');
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
      <ForYouSection />
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
    <View>

    </View>
  )
}

const QuizItem = ({quiz}) => {
  return (
    <View style={styles.quizItem}>
      <Image 
        style={{
          width: 125,
          height : 125,
          borderRadius : 20,
        }}
        source={quiz.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'flex-start',
    backgroundColor : 'white'
  },
  categoryList : {
    display : 'flex',
    flexDirection : 'row',
    columnGap : 10,
    marginVertical : 20,
    marginHorizontal : 10,
  },
  quizItem : {
    marginRight : 15
  }
})

export default Home