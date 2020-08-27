import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import LeftPopup from "../../left-popup/left-popup.jsx";
import ReactDOM from "react-dom";
class Pin extends PureComponent {
  constructor(props) {
    super(props);
    this.onPinClick = this.onPinClick.bind(this);

  }

  onPinClick(place) {
    let asa = () => {
      return (
        <LeftPopup
          place={place}
        />
      );
    };
    console.log(asa());
    document.body.appendChild(asa());
  }

  render() {
    const {place} = this.props;
    const {coordinateX, coordinateY} = place;
    return (
      <button type="button" className="map__pin" style={{left: coordinateX, top: coordinateY}}
        onClick={this.onPinClick}>
        <img src="img/avatars/user02.png" width="20" height="20" draggable="false"
          alt="Метка объявления" /></button>

    );
  }


}
Pin.propTypes = {
  place: PropTypes.shape({
    avatar: PropTypes.string,
    coordinateY: PropTypes.string.isRequired,
    coordinateX: PropTypes.string.isRequired,
  }),
};


export default Pin;
