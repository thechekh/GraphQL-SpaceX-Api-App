import gql from "graphql-tag";

const DELETE_USER = gql`
mutation ($userName:String){
  delete_users(where: {name: {_eq:$userName}}) {
    returning {
      name
    }
  }
}

`;
export default DELETE_USER;
