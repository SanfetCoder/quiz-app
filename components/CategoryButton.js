import {StyleSheet, TouchableWithoutFeedback, Text, View} from "react-native"

const CategoryButton = ({title}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.border}>
        <Text style={styles.content}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    padding: 10,
    minWidth : 50,
    height: 40,
    flexDirection : 'row',
    justifyContent : 'center',
    borderWidth : 1.5
  },
  content : {
    fontSize : 14,
    fontWeight : '500'
  }
})

export default CategoryButton
