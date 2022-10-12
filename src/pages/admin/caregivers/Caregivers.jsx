import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../context/AppContext";

// pages
import Add from "./add/Add";
import Edit from "./edit/Edit";
import List from "./list/List";
import Summary from "./summary/Summary";
import Timesheet from "./timesheet/Timesheet";

const Caregivers = () => {
  const { caregiverHandler } = useContext(AppContext);

  const navigate = useNavigate();

  const Display = () => {
    if (caregiverHandler.action === "add") {
      return (
        <>
          <List />
          <Add />
        </>
      );
    } else if (caregiverHandler.action === "edit") {
      return (
        <>
          <List />
          <Edit />
        </>
      );
    } else if (caregiverHandler.action === "summary") {
      navigate("/admin/caregivers/summary");
      // return <Summary />;
    } else if (caregiverHandler.action === "timesheet") {
      navigate("/admin/caregivers/timesheet");
      // return <Timesheet />;
    } else {
      return <List />;
    }
  };

  return (
    <>
      <Display />
    </>
  );
};

export default Caregivers;
