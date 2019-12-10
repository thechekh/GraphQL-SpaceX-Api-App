import gql from "graphql-tag";

const DELETE_USER = gql`
mutation ($name:String){
  delete_users(where: {name: {_eq: $name}}) {
    returning {
      name
    }
  }
}


`;
export default DELETE_USER;
