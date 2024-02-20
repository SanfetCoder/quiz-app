import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FavButton = ({isLiked, onPress}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View 
        style={{
          backgroundColor : isLiked ? 'red' : 'transparent',
          borderColor : isLiked ? 'transparent' : 'red',
          borderWidth : 2,
          height : 35,
          width : 35,
          display : 'flex',
          flexDirection : 'row',
          alignItems : 'center',
          justifyContent : 'center',
          borderRadius : 50
        }}>
        <MaterialCommunityIcons
          style={{
          color : isLiked ? "white" : "red"
          }}
          size={20} name="heart"/>
      </View>
    </TouchableNativeFeedback>
  )
}

export default FavButton
