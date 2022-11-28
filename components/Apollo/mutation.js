import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { identifier: $username, password: $password }) {
      jwt
      user {
        username
        email
        id
      }
    }
  }
`; 

export const REG_USER = gql`
  mutation Register($username: String!, $password: String!, $email: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        username
        email
        id
      }
    }
  }
`;

export const USER_PROFILE= gql`
mutation CreateProfile($name: String, $phone: String, $user: ID, $publishedAt: DateTime){
  createProfile(data:{name: $name, phone:$phone, user:$user, publishedAt: $publishedAt}){
	data{
    id,
    attributes{
      name
    }
  }    
  }
}
`;
