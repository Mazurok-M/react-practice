import { Button } from 'components';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';

export default function WidgetForm({
  onSubmit,
  title,
  lable,
  idItem,
  relation,
  textItem,
  togleModul,
}) {
  const initialValueWidgetForm = {
    name: textItem || '',
  };
  const dispatch = useDispatch();

  const handleSubmitForm = (values, actions) => {
    actions.setSubmitting(true);
    const data = idItem
      ? { id: idItem, relation, name: values.name }
      : values.name;
    dispatch(onSubmit(data));
    togleModul();
    actions.resetForm();
    actions.setSubmitting(false);
  };

  const validationSchemaForm = object().shape({
    name: string().min(2).required('Поле має бути заповнене'),
  });

  return (
    <Formik
      initialValues={initialValueWidgetForm}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchemaForm}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <h3>{title}</h3>
          <Field
            type="text"
            name="name"
            id="name"
            placeholder={lable}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name || ''}
          />
          <ErrorMessage name="name" component={'div'} />
          <Button text={idItem ? 'Зберегти' : 'Добавити'} type="submit" />
        </Form>
      )}
    </Formik>
  );
}
