import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Pin from "./pin/pin.jsx";
// Метка объявлений

class Pins extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {places, onPinClick} = this.props;
    if (places.length > 0) {
      return (
        places.map(
            (place) => {
              return (
                <Pin
                  place={place}
                  onPinClick={onPinClick}
                  key={place.id + place.coordinateX}
                />
              );
            })
      );
    } else {
      return (null);
    }

  }
}


Pins.propTypes = {
  onPinClick: PropTypes.func.isRequired,
  places: PropTypes.array.isRequired,
};

export default Pins;
