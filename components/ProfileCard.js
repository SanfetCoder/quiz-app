import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/profile/person.jpeg")}
        style={styles.profile}
      />
      <Text style={styles.profileText}>
        Sanphet Songjindasak
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    display: 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    rowGap : 10,
    marginVertical : 30
  }
  ,
  profile : {
    width: 80,
    height: 80,
    borderRadius : 100
  },
  profileText : {
    fontWeight : '600',
  fontSize : 14
  }
})

export default ProfileCard
