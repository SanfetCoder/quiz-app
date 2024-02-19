import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import CategoryButton from "../components/CategoryButton";

const Home = () => {
  const categories = ["All","Science","Programming","Mathematics"];
  return (
    <SafeAreaView>
      <View style={styles.categoryList}>
        {
          categories.map((category)=>{
            return <CategoryButton key={category} title={category}/>
          })
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  categoryList : {
    display : 'flex',
    flexDirection : 'row',
    columnGap : 10,
    marginVertical : 10,
    marginLeft : 10
  }
})

export default Home;