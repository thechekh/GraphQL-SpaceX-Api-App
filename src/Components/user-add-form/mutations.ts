import {gql} from "apollo-boost";

const ADD_USER = gql`
mutation ($name:String){
  insert_users(objects: {name:$name}) {
    returning {
      name
    }
  }
}
`;
export default ADD_USER