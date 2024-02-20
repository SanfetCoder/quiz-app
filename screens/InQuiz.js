import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const InQuiz = () => {
  return (
    <LinearGradient
      colors={['#5224B7','#A248FF']}
      >
      <SafeAreaView
        style={{
          height : '100%',
          width : '100%',
          display : 'flex',
          flexDirection : 'column',
          alignItems : 'center'
        }}>
          <NavBar />
      </SafeAreaView>
    </LinearGradient>
  )
}

const NavBar = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width : '100%',
        height : 50,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingHorizontal : 15
      }}
    >
      <MaterialCommunityIcons 
        onPress={()=>navigation.navigate('Home')}
        style={{
          color: 'white',
          width : '50%'
        }} 
        size={30} 
        name="close-circle"/>
      <Text
        style={{
          color : 'white',
          fontWeight : '600',
          fontSize : 20,
          height : 20,
          marginRight : 'auto',
          width : '50%',
          transform : [{
            translateX : -50
          }]
        }}
      >React Quiz</Text>
    </View>
  )
}

export default InQuiz
