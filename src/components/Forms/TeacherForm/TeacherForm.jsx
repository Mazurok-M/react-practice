import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Button } from 'components';

const TeacherForm = ({ addTeacher }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    patronymic: '',
    phone: '',
    email: '',
    city: '',
  };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    addTeacher(values);
    resetForm();
    setSubmitting(false);
  };

  const fieldsData = [
    { name: 'lastName', label: 'Прізвище' },
    { name: 'firstName', label: 'Імя' },
    { name: 'patronymic', label: 'По-батькові' },
    { name: 'phone', label: 'Телефон' },
    { name: 'email', label: 'e-mail' },
    { name: 'city', label: 'Місто' },
  ];

  const validationSchemaForm = object().shape({
    lastName: string().required('Заповніть це поле'),
    firstName: string().min(2, 'Мінімум два символи').required(),
    patronymic: string().required(),
    phone: string().required(),
    email: string().required(),
    city: string().required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validatoinSchema={validationSchemaForm}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <h3>Добавити викладача</h3>
            {fieldsData.map(({ name, label }) => (
              <div key={name}>
                <label htmlFor={name}>{label}</label>
                <Field
                  type="text"
                  name={name}
                  id={name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder={label}
                  value={values[name] || ''}
                />
                <ErrorMessage name={name} component={'div'} />
              </div>
            ))}
          </div>
          <Button text="Додати" type="submit" />
        </Form>
      )}
    </Formik>
  );
};
export default TeacherForm;
