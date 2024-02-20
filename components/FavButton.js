import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const FavButton = () => {
  return (
    <TouchableNativeFeedback>
      <View 
        style={{
          backgroundColor : 'red',
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
          color : 'white'
          }}
          size={20} name="heart"/>
      </View>
    </TouchableNativeFeedback>
  )
}

export default FavButton
