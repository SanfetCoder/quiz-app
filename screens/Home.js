import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import CategoryButton from "../components/CategoryButton";

const Home = () => {
  const categories = ["All","Science","Programming","Mathematics"];
  return (
    <SafeAreaView>
      <ScrollView horizontal style={styles.categoryList} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {
          categories.map((category)=>{
            return <CategoryButton key={category} title={category}/>
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
    marginVertical : 10,
    marginLeft : 10,
  }
})

export default Home;