import PropTypes from "prop-types";

const Card = ({
  registration: { pet_name, pet_age, owner_name, date, gender },
}) => {
  return (
    <div className="registration-card">
      <h2>Pet Name: {pet_name}</h2>
      <h4>Pet Age: {pet_age}</h4>
      <p>Owner Name: {owner_name}</p>
      <h3>Date: {date}</h3>
      <p>Gender: {gender}</p>
    </div>
  );
};

Card.propTypes = {
  registration: PropTypes.shape({
    pet_name: PropTypes.string.isRequired,
    pet_age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    owner_name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
export default Card;
