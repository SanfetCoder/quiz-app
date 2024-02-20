import { View, Text, ScrollView, StyleSheet } from "react-native"

const Section = ({children, header}) => {
  return (
    <View style={styles.forYouSection}>
      <Text style={styles.forYouHeader}>{header}</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {children}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  forYouSection : {
    display : 'flex',
    flexDirection : 'column',
    rowGap : 10,
    paddingHorizontal : 15,
  },
  forYouHeader : {
    fontWeight : '700',
    fontSize : 16
  },
})

export default Section