import { gql } from "@apollo/client";

export const REGISTER_USER_MUTATION = gql`
  mutation RegisterUser($registerUserData: RegisterUserInput!) {
    register(registerUserData: $registerUserData) {
      name
      email
      access_token
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($loginUserData: LoginUserInput!) {
    login(loginUserData: $loginUserData) {
      name
      email
      access_token
    }
  }
`;
