import { useState } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image } from "react-native";
import CategoryButton from "../components/CategoryButton";
import { quizzes } from "../models/quiz";

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
    <View style={styles.forYouSection}>
      <Text style={styles.forYouHeader}>For you</Text>
      <ScrollView horizontal>
        {
          quizzes.map((quiz)=>{
            return (<QuizItem quiz={quiz} key={quiz.title} />)
          })
        }
      </ScrollView>
    </View>
  )
}

const QuizItem = ({quiz}) => {
  return (
    <View>
      <Image 
        style={{
          width: 125,
          height : 125,
          borderRadius : 20,
        }}
        source={quiz.image}
      />
      <Text>{quiz.title}</Text>
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
  forYouSection : {
    display : 'flex',
    flexDirection : 'column',
    rowGap : 10,
    paddingHorizontal : 10,
  },
  forYouHeader : {
    fontWeight : '700',
    fontSize : 16
  }
})

export default Home