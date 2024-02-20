import React from 'react'
import { SafeAreaView , StyleSheet, Text} from 'react-native'
import ProfileCard from '../components/ProfileCard'

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    display : 'flex',
    flexDirection : 'column',
    height : 'auto',
    width: 'auto',
    alignItems : 'center',
  }
})

export default Profile
