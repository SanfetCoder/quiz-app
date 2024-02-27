import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import ProfileCard from "../components/ProfileCard";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { fetchActivities } from "../models/activities";
import { fetchQuizzesById } from "../models/quiz";
import { Toast } from "toastify-react-native";

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Profile" component={ProfileMain} />
    </Stack.Navigator>
  );
};

const ProfileMain = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard />
      <ActivityList />
      <SignOutButton />
    </SafeAreaView>
  );
};

const SignOutButton = () => {
  return (
    <LinearGradient
      style={{ width: "100%", height: 45, marginBottom: 10, borderRadius: 10, }}
      colors={["red", "#A248FF"]}
    >
      <TouchableNativeFeedback onPress={() => Toast.success("Sign Out")}>
        <View
          style={{
            width: "100%",
            backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            columnGap: 10,
            marginTop: "auto",
          }}
        >
          <MaterialCommunityIcons
            style={{ color: "white" }}
            size={25}
            name="export"
          />
          <Text
            style={{
              color: "white",
              fontWeight: "600",
            }}
          >
            Sign Out
          </Text>
        </View>
      </TouchableNativeFeedback>
    </LinearGradient>
  );
};

const ActivityList = () => {
  return (
    <View style={styles.activityContainer}>
      <Text style={styles.header}>Activities</Text>
      <Activities />
    </View>
  );
};

const Activities = () => {
  const [activities, setActivites] = useState(null);
  const isFocused = useIsFocused();

  console.log("Rendering Activities");
  useEffect(() => {
    const fetchData = () => {
      const fetchedActivities = fetchActivities();
      console.log(fetchedActivities);
      setActivites(fetchedActivities);
    };

    fetchData();
  }, [isFocused]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingTop: 20,
        height: 430,
      }}
    >
      {activities?.map((activity) => {
        return <Activity activity={activity} key={activity.id} />;
      })}
    </ScrollView>
  );
};

const Activity = ({ activity }) => {
  const [quizInfo, setQuizInfo] = useState(null);

  console.log("Rendering quizInfo");
  useEffect(() => {
    const fetchQuizInfo = () => {
      const fetchedQuizInfo = fetchQuizzesById([activity.quizId])[0];
      setQuizInfo(fetchedQuizInfo);
    };

    fetchQuizInfo();
  }, []);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 70,
        marginBottom: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 1000,
          }}
          source={quizInfo?.image}
        />
        <Text
          style={{
            color: "black",
            fontWeight: "700",
            marginLeft: 10,
            fontSize: 18,
          }}
        >
          {quizInfo?.title}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        {activity?.score} / {activity?.maxScore}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: "auto",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  header: {
    color: "#B4B4B4",
    width: "auto",
    fontWeight: "600",
  },
  activityContainer: {
    width: "100%",
  },
});

export default Profile;
