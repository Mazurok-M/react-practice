import { useParams } from 'react-router-dom';

export default function DepartmentDescription() {
  const { departmentId } = useParams();
  return (
    <div>
      <h1>DepartmentDescription {departmentId}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea error
        reiciendis repellat maxime soluta nesciunt fugit eveniet quod, dolorem
        architecto necessitatibus aliquam quam maiores optio culpa, accusantium
        aliquid voluptatem eum voluptate tempore corporis minus deserunt cum.
        Nam, minima accusamus odit, laboriosam neque architecto laborum suscipit
        corporis perferendis reiciendis iste consequatur?
      </p>
    </div>
  );
}
