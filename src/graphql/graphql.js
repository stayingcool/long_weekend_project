import gql from "graphql-tag";

export const ALL_VACATIONS = gql`
  query vacation($user_id: String!) {
    vacation(where: { user_id: { _eq: $user_id } }) {
      dest_loc
      end_date
      id
      start_date
      start_loc
      travel_mode
      user_id
    }
  }
`;

export const GET_MEALS = gql`
  query getMeals($vacation_id: Int!) {
    meal(where: { vacation_id: { _eq: $vacation_id } }) {
      meal_date
      id
      meal_name
      meal_type
      vacation_id
    }
  }
`;

export const GET_ACTIVITIES = gql`
  query getActivities($vacation_id: Int!) {
    activity(where: { vacation_id: { _eq: $vacation_id } }) {
      activity_date
      activity_name
      id
      vacation_id
    }
  }
`;

export const ADD_VACATION = gql`
  mutation addVacation(
    $dest_loc: String!
    $start_loc: String!
    $end_date: date!
    $start_date: date!
    $travel_mode: String!
    $user_id: String!
  ) {
    insert_vacation_one(
      object: {
        dest_loc: $dest_loc
        end_date: $end_date
        start_date: $start_date
        start_loc: $start_loc
        travel_mode: $travel_mode
        user_id: $user_id
      }
    ) {
      id
      dest_loc
      end_date
      start_date
      start_loc
      travel_mode
      user_id
    }
  }
`;

export const ADD_ACTIVITY = gql`
  mutation addActivity(
    $activity_name: String!
    $activity_date: date!
    $vacation_id: Int!
  ) {
    insert_activity_one(
      object: {
        activity_name: $activity_name
        activity_date: $activity_date
        vacation_id: $vacation_id
      }
    ) {
      activity_name
      activity_date
      id
      vacation_id
    }
  }
`;

export const ADD_PARTICIPANT = gql`
  mutation addParticipant(
    $confirmed: Boolean!
    $name: String!
    $user_id: String!
    $vacation_id: Int!
  ) {
    insert_participant_one(
      object: {
        confirmed: $confirmed
        name: $name
        user_id: $user_id
        vacation_id: $vacation_id
      }
    ) {
      id
    }
  }
`;

export const ADD_MEAL = gql`
  mutation addMeal(
    $meal_date: date!
    $meal_name: String!
    $meal_type: String!
    $vacation_id: Int!
  ) {
    insert_meal_one(
      object: {
        meal_date: $meal_date
        meal_name: $meal_name
        meal_type: $meal_type
        vacation_id: $vacation_id
      }
    ) {
      id
      meal_date
      meal_name
      meal_type
      vacation_id
    }
  }
`;

export const GET_PARTICIPANTS = gql`
  query getParticipants($vacation_id: Int!) {
    participant(where: { vacation_id: { _eq: $vacation_id } }) {
      confirmed
      id
      name
      vacation_id
    }
  }
`;
