import React from 'react'
import { SafeAreaView , StyleSheet, View, Text} from 'react-native'
import ProfileCard from '../components/ProfileCard'

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard />
      <ActivityList />
    </SafeAreaView>
  )
}

const ActivityList = () => {
  return (
    <View style={styles.activityContainer}>
      <Text style={styles.header}>
        Activities
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
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
