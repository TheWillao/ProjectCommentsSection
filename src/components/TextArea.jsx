import PropTypes from "prop-types";

TextArea.propTypes = {
  text: PropTypes.string.isRequired,
  placeholderValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function TextArea(props) {
  return (
    <>
      <div className="d-flex flex-column text-center w-75 mt-3 gap-1">
        <label htmlFor="emailInput">{props.text}</label>
        <textarea
          required
          placeholder={props.placeholderValue}
          value={props.value}
          onChange={props.onChange}
        ></textarea>
      </div>
    </>
  );
}
