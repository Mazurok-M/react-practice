import { useParams } from 'react-router-dom';

export default function DepartmentHistory() {
  const { departmentId } = useParams();
  return (
    <div>
      <h1>DepartmentHistory {departmentId}</h1>
      <ul>
        <li>histori 1</li>
        <li>histori 2</li>
        <li>histori 3</li>
        <li>histori 4</li>
      </ul>
    </div>
  );
}
