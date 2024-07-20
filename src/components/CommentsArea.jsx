import PropTypes from "prop-types";

CommentsArea.propTypes = {
  email: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default function CommentsArea(props) {
  return (
    <>
      <div key={props.id}>
        <p>
          <strong>{props.email}</strong>
        </p>
        <p>
          <em>{props.date}</em>
        </p>
        <p>{props.comment}</p>
      </div>
    </>
  );
}
