import React, { useState, useContext } from "react";
import AppContext from "../../../../context/AppContext";

// styles
import { Wrapper } from "./List.Styles";

// widgets
import ContainerWidget from "../../../../components/widgets/containerWidget/ContainerWidget";
import TopContainerWidget from "../../../../components/widgets/topContainerWidget/TopContainer";
import SearchWidget from "../../../../components/widgets/searchWidget/SearchWidget";
import AddBtnWidget from "../../../../components/widgets/addBtnWidget/AddBtnWidget";

const List = () => {
  const { caregiverHandler, setCaregiverHandler } = useContext(AppContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const subMenuHandler = (e) => {
    setIsMenuOpen(!isMenuOpen);
    console.log(e.target.id);
    isMenuOpen ? console.log("Open") : console.log("Close");
  };

  // const addHandler = (e) => {
  const addHandler = () => {
    // console.log("ADD", e);
    setCaregiverHandler({
      ...caregiverHandler,
      action: "add",
    });
  };

  const onchangeHandler = (e) => {
    e.persist();
    setCaregiverHandler((item) => ({
      ...item,
      action: e.target.value,
    }));
  };

  return (
    <Wrapper>
      <TopContainerWidget>
        <SearchWidget placeholder={"Search name"} />
        <AddBtnWidget
          text={"Add Support Worker"}
          // onclick={(e) => addHandler(e)}
          onclick={() => addHandler()}
        />
      </TopContainerWidget>
      <ContainerWidget>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Maximillian RObin</td>
              <td>Otto@gmail.com</td>
              <td>07184556221</td>
              <td>Male</td>
              <td>Vanderpouyer</td>
              <td>
                <select name="#" id="#" onChange={onchangeHandler}>
                  <option value="">...</option>
                  <option value="timesheet">View Timesheet</option>
                  <option value="summary">View Summary sheet</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Maximillian RObin</td>
              <td>Otto@gmail.com</td>
              <td>07184556221</td>
              <td>Male</td>
              <td>Vanderpouyer</td>
              <td>
                <select name="#" id="#" onChange={onchangeHandler}>
                  <option value="">...</option>
                  <option value="timesheet">View Timesheet</option>
                  <option value="summary">View Summary sheet</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Maximillian RObin</td>
              <td>Otto@gmail.com</td>
              <td>07184556221</td>
              <td>Male</td>
              <td>Vanderpouyer</td>
              <td>
                <select name="#" id="#" onChange={onchangeHandler}>
                  <option value="">...</option>
                  <option value="timesheet">View Timesheet</option>
                  <option value="summary">View Summary sheet</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </ContainerWidget>
    </Wrapper>
  );
};

export default List;