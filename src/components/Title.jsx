import { PropTypes } from "prop-types";

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function Title(props) {
  return <h4 className="m-3">{props.text}</h4>;
}
