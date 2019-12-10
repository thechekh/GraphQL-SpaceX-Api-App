import React from "react";
import { useQuery } from "@apollo/react-hooks";

import GET_LAUNCHES from "./queries";
import "./launches-past.css";

export default () => {
  const { error, loading, data } = useQuery(GET_LAUNCHES);
  if (error) return "Error";

  if (loading) return "Loading...";
  return data.launchesPast.map(
    ({
      mission_name,
      details,
      links
    }: {
      mission_name: string;
      details: string;
      links: {
        flickr_images: string;
      };
    }) => (
      <div key={mission_name}>
        <h1> {mission_name}</h1>
        <div className="mission_about">
          <img src={links.flickr_images[0]} width="200" alt="img" />
          <p className="mission_details">{details}</p>
        </div>
      </div>
    )
  );
};
