import React from "react";
import {gql} from "apollo-boost";
import {useQuery} from '@apollo/react-hooks';

import './launches-past.css'

const GET_LAUNCHES = gql`
  {
   launchesPast(limit: 10) {
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
`;
export default () => {

    // @ts-ignore
    const {errors, loading, data} = useQuery(GET_LAUNCHES);
    return errors
        ? "Error!"
        : loading
            ? "Loading..."
            :
            data.launchesPast.map(({mission_name, details, links}: {
                mission_name: string, details: string, links: {
                    flickr_images: string
                }
            }) => (
                <div key={mission_name}>
                    <h1>🛰 {mission_name}</h1>
                    <div className="mission_about">
                        <img src={links.flickr_images[0]} width="200" alt="img"/>
                        <p className="mission_details">{details}</p>
                    </div>
                </div>
            ));
};
