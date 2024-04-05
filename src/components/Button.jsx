import PropTypes from 'prop-types';

const Button = ({ label, handleSubmit }) => {
  return (
    <div className='mt-5'>
      <button type="submit" className='w-full bg-primary border rounded-xl text-[16px] text-white px-10 py-4' onClick={handleSubmit}>{label}</button>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Button;
