import React from "react";

import PropTypes from "prop-types";

const Pin = (props) => {
  const {place} = props;
  const {coordinateX, coordinateY} = place;
  return (
    <button type="button" className="map__pin" style={{left: coordinateX, top: coordinateY}}>
      <img src="img/avatars/user07.png" width="15" height="15" draggable="false"
        alt="Метка объявления" /></button>

  );
};

Pin.propTypes = {
  place: PropTypes.shape({
    avatar: PropTypes.string,
    coordinateY: PropTypes.string.isRequired,
    coordinateX: PropTypes.string.isRequired,
  })
};


export default Pin;
