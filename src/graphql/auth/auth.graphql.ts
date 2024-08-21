import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($data: RegisterUserInput!) {
    registerUser(userData: $data) {
      id
      name
      password
      accessToken
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($data: LoginUserInput) {
    loginUser(userData: $data) {
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
