import { Suspense, lazy, useEffect, useState } from 'react';
import { Main, Sidebar } from '../components';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const University = lazy(() => import('pages/University/University'));
const Department = lazy(() => import('pages/Department/Department'));
const DepartmentDetalis = lazy(() =>
  import('pages/DepartmentDetalis/DepartmentDetalis')
);
const DepartmentDescription = lazy(() =>
  import('pages/DepartmentDescription/DepartmentDescription')
);
const DepartmentHistory = lazy(() =>
  import('pages/DepartmentHistory/DepartmentHistory')
);

function App() {
  const [showForm, setShowForm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    actionName: null,
    actionState: false,
  });

  const toggleModal = actionName => {
    setIsModalOpen(prev => ({
      actionName: prev.actionName === actionName ? null : actionName,
      actionState: !prev.actionState,
    }));
  };

  const handleShowForm = formName => {
    setShowForm(prev => (prev === formName ? null : formName));
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('university');
    }
  }, [navigate, pathname]);

  return (
    <div className="app">
      <Sidebar />
      <Main>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
            <Route
              path="university"
              element={
                <University
                  showForm={showForm}
                  setShowForm={setShowForm}
                  isModalOpen={isModalOpen}
                  toggleModal={toggleModal}
                  handleShowForm={handleShowForm}
                />
              }
            />
            <Route path="departments/*">
              <Route
                index
                element={
                  <Department
                    showForm={showForm}
                    isModalOpen={isModalOpen}
                    toggleModal={toggleModal}
                    handleShowForm={handleShowForm}
                  />
                }
              />
              <Route path={':departmentId'} element={<DepartmentDetalis />}>
                <Route path="description" element={<DepartmentDescription />} />
                <Route path="history" element={<DepartmentHistory />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Main>
    </div>
  );
}

export default App;
