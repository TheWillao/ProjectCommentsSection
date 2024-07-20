import PropTypes from "prop-types";

Input.propTypes = {
  text: PropTypes.string.isRequired,
  placeholderValue: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Input(props) {
  return (
    <>
      <div className="d-flex flex-column text-center w-50 gap-1">
        <label htmlFor="emailInput">{props.text}</label>
        <input
          required
          type={props.type}
          placeholder={props.placeholderValue}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}
