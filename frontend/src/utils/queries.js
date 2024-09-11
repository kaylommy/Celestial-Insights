import { gql } from "@apollo/client";

export const QUERY_USERS = gql `
query Users {
  users {
    _id
    birthDate
    email
    firstName
    lastName
    password
    username
  }
}
`

export const QUERY_USER = gql`
query User($userId: ID!) {
  user(userId: $userId) {
    _id
    birthDate
    email
    firstName
    lastName
    password
    username
  }
}
`