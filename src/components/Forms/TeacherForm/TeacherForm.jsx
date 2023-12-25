import { Button } from 'components';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { createTeacherAction } from 'store/tutors/actions';
import { object, string } from 'yup';

export default function TeacherForm({ setShowForm }) {
  const dispatch = useDispatch();

  const initialValues = {
    lastName: '',
    firstName: '',
    patronymic: '',
    phone: '',
    email: '',
    city: '',
  };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    dispatch(createTeacherAction(values));
    setShowForm(null);
    // addTeacher(values);
    resetForm();
    setSubmitting(false);
  };

  const fieldData = [
    {
      name: 'lastName',
      label: 'Прізвище',
    },
    {
      name: 'firstName',
      label: "Ім'я",
    },
    {
      name: 'patronymic',
      label: 'Побатькові',
    },
    {
      name: 'phone',
      label: 'Телефон',
    },
    {
      name: 'email',
      label: 'e-mail',
    },
    {
      name: 'city',
      label: 'Місто',
    },
  ];

  const validationSchemaForm = object().shape({
    lastName: string().required('Поле має бути заповнене'),
    firstName: string()
      .min(2, 'Мінімум два знаки')
      .required('Поле має бути заповнене'),
    patronymic: string().required('Поле має бути заповнене'),
    phone: string().matches(/^\+[0-9]{3}\s\((\d+)\)\d{7}/, ' +380 (00)0000000'),
    email: string().required(),
    city: string().required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchemaForm}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <h3>Добавити викладача</h3>
            {fieldData.map(({ name, label }) => (
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
}
