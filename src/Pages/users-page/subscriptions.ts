import gql from "graphql-tag";

const USERS_SUBSCRIBE = gql`
subscription {
  users {
    id
    name
  }
}

`;
export default USERS_SUBSCRIBE