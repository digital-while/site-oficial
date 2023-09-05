import { StyledEmployeeCard } from "./style";
import { iEmployeeCardProps } from "../../interfaces/components";

export const EmployeeCard = ({ employee }: iEmployeeCardProps) => {
  return (
    <StyledEmployeeCard>
      <div className="div--img">
        <img src={employee.photo} alt={employee.name} />
      </div>
      <p className="p--name">{employee.name}</p>
      <p className="p--occupation">{employee.occupation}</p>
    </StyledEmployeeCard>
  );
};
