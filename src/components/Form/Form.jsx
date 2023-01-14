import css from './Form.module.css';
import { ReactComponent as IconSerch } from '../../icons/search.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const initialValues = {
    searchQuery: '',
  };
  let scima = yup.object().shape({
    searchQuery: yup
      .string('not valid input')
      // .matches(
      //   /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      //   'not valid input'
      // )
      .required('Enter something to search!'),
  });
  const handleSubmit = ({ searchQuery }, { resetForm }) => {
    onSubmit(searchQuery);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={scima}
    >
      <Form className={css.searchForm}>
        <button type="submit" className={css.searchFormButton}>
          <IconSerch width="25px" height="25px"></IconSerch>
        </button>
        <Field
          className={css.searchFormInput}
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <ErrorMessage name="searchQuery">
          {errMsg => <div className={css.erorr}>{errMsg}</div>}
        </ErrorMessage>
      </Form>
    </Formik>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
