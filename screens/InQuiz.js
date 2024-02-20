import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../context/AppProvider';

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
  const {selectedQuiz} = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <View
      style={{
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 15,
        marginTop : 10,
      }}
    >
      <MaterialCommunityIcons 
        onPress={()=>navigation.navigate('Home')}
        style={{
          color: 'white',
          position : 'absolute',
          left : 15,
        }} 
        size={30} 
        name="close-circle"/>
      <Text
        style={{
          color : 'white',
          fontWeight : '600',
          fontSize : 20,
        }}
      >{selectedQuiz.title}</Text>
      <View></View>
    </View>
  )
}

export default InQuiz
