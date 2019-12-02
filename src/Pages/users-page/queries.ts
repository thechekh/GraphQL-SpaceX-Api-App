import {gql} from "apollo-boost";

const GET_USERS = gql`
{
  users {
    id
    name
  }
}
`;
export default GET_USERS