import { gql } from "@apollo/client";

export const CREATE_USER = gql `
mutation CreateUser($userData: UserInput!) {
  createUser(userData: $userData) {
    token
    user {
      _id
      birthDate
      email
      firstName
      lastName
      password
      username
    }
  }
}
`