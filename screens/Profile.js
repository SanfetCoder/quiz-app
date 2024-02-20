import React from 'react'
import { SafeAreaView , StyleSheet, View, Text, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback} from 'react-native'
import ProfileCard from '../components/ProfileCard'
import { quizzes } from '../models/quiz'
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown : true}}>
      <Stack.Screen 
        name="Profile"
        component={ProfileMain}
      />
    </Stack.Navigator>
  )
}

const ProfileMain = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard />
      <ActivityList />
      <SignOutButton />
    </SafeAreaView>
  )
}

const SignOutButton = () => {
  return (
    <TouchableNativeFeedback>
      <View
        style={{
          width : '100%',
          borderRadius : 10,
          backgroundColor : 'red',
          display : 'flex',
          flexDirection : 'row',
          alignItems : 'center',
          justifyContent : 'center',
          height : 45,
          columnGap : 10,
          marginTop : 'auto',
          marginBottom : '10%'
        }}
        >
          <MaterialCommunityIcons 
            style={{color : 'white'}} 
            size={25} 
            name="export"
            />
        <Text 
          style={{
            color : 'white',
            fontWeight : '600'
          }}
          >
          Sign Out
        </Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const ActivityList = () => {
  return (
    <View style={styles.activityContainer}>
      <Text style={styles.header}>
        Activities
      </Text>
      {/* <Activities /> */}
    </View>
  )
}

const Activities = () => {
  return (
    <ScrollView>
      {
        quizzes.map(quiz => {
          return <Text key={quiz.title}>{quiz.title}</Text>
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: 'white',
    display : 'flex',
    flexDirection : 'column',
    height : 'auto',
    width: 'auto',
    alignItems : 'center',
    paddingHorizontal : 15
  },
  header : {
    color : '#B4B4B4',
    width: 'auto',
  },
  activityContainer : {
    width : "100%",
  }
})

export default Profile
