import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($userData: RegisterUserInput!) {
    registerUser(userData: $userData) {
      id
      name
      password
      accessToken
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($userData: LoginUserInput) {
    loginUser(userData: $userData) {
      id
      name
      password
      accessToken
    }
  }
`;

export const FETCH_USER = gql`
  query {
    fetchUser {
      id
      name
      password
      email
      accessToken
    }
  }
`;
