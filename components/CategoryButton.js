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
    minWidth : 50,
    height: 30,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    borderWidth : 1.5,
    paddingHorizontal : 10,
    marginRight : 10
  },
  content : {
    fontSize : 14,
    fontWeight : '500'
  }
})

export default CategoryButton
