import gql from "graphql-tag";

const GET_USERS = gql`
{
  users {
    id
    name
  }
}
`;
export default GET_USERS