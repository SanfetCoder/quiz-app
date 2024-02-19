import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import CategoryButton from "../components/CategoryButton";
const Home = () => {
  const categories = ["All","Science","Programming","Mathematics"];
  const [selectedCategory, setSelectedCategory] = useState('');
  return (
    <SafeAreaView>
      <ScrollView horizontal style={styles.categoryList} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {
          categories.map((category)=>{
            return <CategoryButton onPress={()=>setSelectedCategory(category)} isActive={category === selectedCategory} key={category} title={category}/>
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  categoryList : {
    display : 'flex',
    flexDirection : 'row',
    columnGap : 10,
    marginVertical : 20,
    marginLeft : 10,
  }
})

export default Home;