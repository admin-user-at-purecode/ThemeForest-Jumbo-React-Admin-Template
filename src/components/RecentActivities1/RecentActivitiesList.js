import React from "react";
import { recentActivities } from "../../mock_data/recentActivities";
import RecentActivityItem from "./RecentActivityItem";

const RecentActivitiesList = () => {
  return (
    <>
      {recentActivities.map((item, index) => (
        <RecentActivityItem recentItem={item} key={index} />
      ))}
    </>
  );
};

export default RecentActivitiesList;
