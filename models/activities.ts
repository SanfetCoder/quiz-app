export type Activity = {
  id : string | Uint8Array,
  quizId : string,
  score : number,
  maxScore : number
}

// Simulated database
let activities : Activity[] = [
]

export function addActivity(activity : Activity){
  try {
    // add the activity to the database
    activities = [...activities, activity]
  } catch (error : any) {
    throw new Error(error.message)
  }
}

export function fetchActivities() : Activity[]{
  try {
    // return all activities
    return activities
  } catch (error) {
    throw new Error(error.message)
  }
}