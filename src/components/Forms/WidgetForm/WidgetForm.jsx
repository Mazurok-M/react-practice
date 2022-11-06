import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Button } from 'components';

const WidgetForm = ({ onSubmit, title, lable, idItem, relation }) => {
  const initialValueWidgetForm = { name: idItem || '' };

  const validationSchemaForm = object().shape({
    name: string().min(2),
  });

  const handleSubmitForm = (values, actions) => {
    actions.setSubmitting(true);
    const data = idItem
      ? { id: idItem, relation, name: values.name }
      : values.name;
    onSubmit(data);
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValueWidgetForm}
      onSubmit={handleSubmitForm}
      validatoinSchema={validationSchemaForm}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <h3>{title}</h3>
          <Field
            type="text"
            name="name"
            id="nameCity"
            placeholder={lable}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name || ''}
          />
          <ErrorMessage name="name" component={'div'} />

          <Button type="submit" text={idItem ? 'Зберегти' : 'Добавити'} />
        </Form>
      )}
    </Formik>
  );
};

export default WidgetForm;
