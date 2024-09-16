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
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;