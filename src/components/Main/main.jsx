import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MapPin from "../map-pin/map_pin.jsx";
import Pins from "../pins/pins.jsx";
import AdForm from "../ad-form/ad_form.jsx";
import LeftPopup from "../left-popup/left_popup.jsx";
import MapFilter from "../map-filter/map_filter.jsx";

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.onClickForActive = this.onClickForActive.bind(this);
  }

  render() {

    const {activeOffice, isActive, onChangeCoordinate, pinMainCoordinate, onChangeCoordinateY,
      onChangeCoordinateX, coordinateX, coordinateY, activePlace,
      onPinClick, places, handlerSubmitForAdd} = this.props;
    return (
      <main>
        <div className="promo">
          <h1 className="promo__title visually-hidden">Планировщик рабочих мест</h1>
          {/* <img src="" alt="Планировщик рабочих мест" width="215" height="45" /> */}
          {/* <!-- TODO: сделать картинку --> */}
        </div>
        <LeftPopup
          activePlace={activePlace}
          onPinClick={onPinClick}
        />

        {/* <!-- Карта объявлений --> */}
        <section className={`map ${!isActive ? `map--faded` : ``}`}>
          <MapPin
            isActive={isActive}
            onClickForActive={this.onClickForActive}
            onMovePoint={this.onMovePoint}
            pinMainCoordinate={pinMainCoordinate}
            onChangeCoordinate={onChangeCoordinate}
            onChangeCoordinateX={onChangeCoordinateX}
            onChangeCoordinateY={onChangeCoordinateY}
          />
          {/* <!-- Метки объявлений --> */}
          <Pins
            onPinClick={onPinClick}
            places={places}
          />
          <div className="map__pins">
            <div className="map__overlay">
              <h2 className="map__title">г.{activeOffice} офис №</h2>
            </div>

          </div>
          <MapFilter />
        </section>

        {/* <!-- Форма объявления --> */}
        <section className="notice">
          <h2 className="notice__title">Новое р.м.</h2>
          <AdForm
            isActive={isActive}
            pinMainCoordinate={pinMainCoordinate}
            coordinateY={coordinateY}
            coordinateX={coordinateX}
            handlerSubmitForAdd={handlerSubmitForAdd}
          />
        </section>
      </main>
    );
  }
  componentDidMount() {
    console.log(`componentDidMount`);
  }
  componentWillUnmount() {
    console.log(`componentWillUnmount`);
  }
  onClickForActive() {
    const {onClickActive} = this.props;
    onClickActive();
  }

  handelSubmit(event) {
    event.preventDefault();
  }

}

Main.propTypes = {
  onPinClick: PropTypes.func.isRequired,
  onClickActive: PropTypes.func.isRequired,
  onChangeCoordinateY: PropTypes.func.isRequired,
  onChangeCoordinate: PropTypes.func.isRequired,
  onChangeCoordinateX: PropTypes.func.isRequired,
  handlerSubmitForAdd: PropTypes.func.isRequired,
  activeOffice: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  activePlace: PropTypes.object,
  pinMainCoordinate: PropTypes.string,
  places: PropTypes.array.isRequired,
};

export default Main;
