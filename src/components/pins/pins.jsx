import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getPlaces} from "../../reducer/selectors.js";
import Pin from "./pin/pin.jsx";
// Метка объявлений

class Pins extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {places} = this.props;
    if (places.length > 0) {
      return (
        places.map(
            (place) => {
              return (
                <Pin
                  place={place}
                  key={place.top + place.left}
                />
              );
            })
      );
    } else {
      return (null);
    }

  }
}

const mapDispatchToTitle = () => ({
});

const mapStateToProps = (store) => {
  return {
    places: getPlaces(store)
  };
};
Pins.propTypes = {
  places: PropTypes.array.isRequired,
};

export {Pins};
export default connect(mapStateToProps, mapDispatchToTitle)(Pins); // первым стате а вторым фдиспатчеры
