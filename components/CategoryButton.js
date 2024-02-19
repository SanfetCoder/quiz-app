import {StyleSheet, TouchableWithoutFeedback, Text, View} from "react-native"

const CategoryButton = ({title, isActive, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View 
        style={{
          ...styles.border,
          backgroundColor : isActive ? '#0029FF' : 'transparent'
        }}
        >
        <Text 
          style={{
            ...styles.content,
            color : isActive ? 'white' : '#0029FF'
          }}>
            {title}
          </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: '#0029FF',
    borderRadius: 50,
    minWidth : 50,
    height: 30,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    borderWidth : 1.5,
    paddingHorizontal : 10,
    marginRight : 15
  },
  content : {
    fontSize : 14,
    fontWeight : '500'
  }
})

export default CategoryButton
