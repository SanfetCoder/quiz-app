import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FavButton = ({isActive, onPress}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View 
        style={{
          backgroundColor : isActive ? 'red' : 'transparent',
          borderColor : isActive ? 'none' : 'red',
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
          color : isActive ? "white" : "red"
          }}
          size={20} name="heart"/>
      </View>
    </TouchableNativeFeedback>
  )
}

export default FavButton
