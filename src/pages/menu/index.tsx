import { useContext, useEffect, useState } from "react";

import NavBar from "../../components/menu";
import { EmployeeCard } from "../../components/employeeCard";
import { StyledMenuPage } from "./style";
import { UserContext } from "../../contexts/userContext";

export default function Menu() {
  const { userInfo } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <StyledMenuPage>
        <h1>Quem somos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <ul className="ul--team">
          {userInfo.team.map((employee, index) => (
            <EmployeeCard key={index} employee={employee} />
          ))}
        </ul>
      </StyledMenuPage>
    </>
  );
}
