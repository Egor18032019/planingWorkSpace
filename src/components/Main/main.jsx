import React from "react";
import PropTypes from "prop-types";
import MapPin from "../map-pin/map_pin.jsx";
import Pins from "../pins/pins.jsx";
import AdForm from "../ad-form/ad_form.jsx";
import LeftPopup from "../left-popup/left_popup.jsx";
import MapFilter from "../map-filter/map_filter.jsx";
import withPopup from "../../hoc/whit-popup/whit_popup.jsx";
const PopupWrapped = withPopup(LeftPopup);
import {arrayBackGroundImage} from "../../const.js";
import ChoicePlaces from "../choiсe-plaсes/choiсe-plaсes.jsx";

const Main = (props) => {

  const {activeOffice, isActive, onChangeCoordinate, pinMainCoordinate, onChangeCoordinateY,
    onChangeCoordinateX, coordinateX, coordinateY, activePlace,
    onPinClick, places, handlerSubmitForAdd, handlerClickOnChoise, onClickActive, onMovePoint} = props;
  const BGI = arrayBackGroundImage[activeOffice];

  return (
    <main>
      <div className="promo">
        <h1 className="promo__title visually-hidden">Планировщик рабочих мест</h1>
        {isActive ?
          <ChoicePlaces
            onChoiseOfficeClick={handlerClickOnChoise}
          /> : ``
        }
      </div>
      {activePlace ?
        <PopupWrapped
          activePlace={activePlace}
          onPinClick={onPinClick}
        />
        : ``}
      {/* <!-- Карта рабочих мест --> */}
      <section className={`map ${!isActive ? `map--faded` : ``}`} style={{backgroundImage: `url(` + `${BGI}` + `)`}}>
        <MapPin
          isActive={isActive}
          onClickForActive={onClickActive}
          onMovePoint={onMovePoint}
          pinMainCoordinate={pinMainCoordinate}
          onChangeCoordinate={onChangeCoordinate}
          onChangeCoordinateX={onChangeCoordinateX}
          onChangeCoordinateY={onChangeCoordinateY}
        />
        {/* <!-- Метки рабочих мест --> */}
        <Pins
          onPinClick={onPinClick}
          places={places}
        />
        <div className="map__pins">
          <div className="map__overlay">
            <h2 className="map__title">г.{activeOffice} офис</h2>
          </div>

        </div>
        <MapFilter />
      </section>
      {/* <!-- Форма добавления новых рабочих мест и редактирование старых --> */}
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
    </main >
  );


};

Main.propTypes = {
  onPinClick: PropTypes.func.isRequired,
  handlerClickOnChoise: PropTypes.func.isRequired,
  onMovePoint: PropTypes.func.isRequired,
  onClickActive: PropTypes.func.isRequired,
  onChangeCoordinateY: PropTypes.func.isRequired,
  onChangeCoordinate: PropTypes.func.isRequired,
  onChangeCoordinateX: PropTypes.func.isRequired,
  handlerSubmitForAdd: PropTypes.func.isRequired,
  activeOffice: PropTypes.string,
  coordinateX: PropTypes.number,
  coordinateY: PropTypes.number,
  isActive: PropTypes.bool.isRequired,
  activePlace: PropTypes.object,
  pinMainCoordinate: PropTypes.string,
  places: PropTypes.array.isRequired,
};

export default Main;
