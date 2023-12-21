import { Button, Section } from 'components';

import { Outlet, useNavigate, useParams } from 'react-router-dom';

export default function DepartmentDetalis({ departments }) {
  const { departmentId } = useParams();
  const navigate = useNavigate();
  //   const department = useMemo(
  //     () => departments?.find(el => el.id === departmentId) ?? {}
  //   );

  const department = departments?.find(el => el.id === departmentId) ?? {};
  const { text } = department;

  return (
    department && (
      <Section nameTitle={text}>
        <div onClick={() => navigate('description')}>
          <Button text="Опис" />
        </div>

        <div onClick={() => navigate('history')}>
          <Button text="Історія" />
        </div>
        <Outlet />
      </Section>
    )
  );
}
