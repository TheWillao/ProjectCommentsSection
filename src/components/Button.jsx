import PropTypes from "prop-types";

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default function Button(props) {
  return (
    <button type={props.type} className="btn btn-outline-dark mt-4">
      {props.text}
    </button>
  );
}
