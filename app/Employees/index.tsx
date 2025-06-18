import { useEffect, useState } from "react";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  // autres champs ici
}

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch("http://localhost:5454/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Liste des employés</h1>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.firstName} {emp.lastName} - {emp.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

