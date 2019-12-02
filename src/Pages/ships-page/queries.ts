import {gql} from "apollo-boost";

const GET_SHIPS = gql`
{
  ships {
    id
    name
    roles
    speed_kn
    weight_kg
    type
    year_built
  }
}
`;
 export default GET_SHIPS