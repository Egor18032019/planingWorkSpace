import React from "react";
import PropTypes from "prop-types";

const Pin = (props) => {
  const {place} = props;
  function onPinClickForPopup() {
    const {onPinClick} = props;
    onPinClick(place);
  }

  if (place) {
    const {coordinateX, coordinateY} = place;
    return (
      <button type="button" className="map__pin" style={{left: coordinateX, top: coordinateY}}
        onClick={onPinClickForPopup}>
        <img src="img/avatars/user02.png" width="20" height="20" draggable="false"
          alt="Метка объявления" /></button>
    );
  } else {
    return ``;
  }
};


Pin.propTypes = {
  onPinClick: PropTypes.func.isRequired,
  place: PropTypes.shape({
    avatar: PropTypes.string,
    coordinateY: PropTypes.string.isRequired,
    coordinateX: PropTypes.string.isRequired,
  }),
};

export default Pin;

