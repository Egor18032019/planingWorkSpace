import React from "react";
import PropTypes from "prop-types";

const Pin = (props) => {
  const {place} = props;

  function onPinClickForPopup() {
    const {onPinClick} = props;
    onPinClick(place);
  }

  if (place) {
    const {coordinateX, coordinateY, id} = place;
    /**
     * Ширина пина
     */
    let pinWidth = 20;
    // высота пина
    let pinHeight = 20;
    let coordinateXcurrent = coordinateX + pinWidth + `px`;
    let coordinateYcurrent = coordinateY + pinHeight + `px`;
    return (
      <button type="button" className="map__pin" style={{left: coordinateXcurrent, top: coordinateYcurrent}}
        onClick={onPinClickForPopup}>
        {/* если картинку то не видно номера места. Подумать про другие варианты */}
        {/* <img src="img/avatars/user02.png" width="20" height="20" draggable="false"
          alt="Метка объявления" /> */}
        <span>{id}</span>
      </button>
    );
  } else {
    return ``;
  }
};


Pin.propTypes = {
  onPinClick: PropTypes.func.isRequired,
  place: PropTypes.shape({
  }),
};

export default Pin;

