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
        <h1>Quem somos?</h1>
        <p>
          Na Digital While, estamos comprometidos em impulsionar o sucesso do seu negócio. Com nossa experiência em Web Sistemas, estamos prontos para elevar o desempenho e o lucro da sua empresa a níveis surpreendentes. Sabemos que a competitividade é intensa nos dias de hoje, e é por isso que oferecemos soluções inovadoras para mantê-lo à frente da curva e do mercado.
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
