import PropTypes from 'prop-types';

import { toast } from 'react-hot-toast';

export const SearchBox = ({ handleSubmit }) => {
  const onClickSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.name === '') {
      toast.error('Треба ввести назву!');
    }
    handleSubmit(form.name.value);
    form.reset();
  };

  return (
    <form onSubmit={onClickSubmit}>
      <input type="text" name="name" />
      <button type="onsubmit">Search</button>
    </form>
  );
};

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
