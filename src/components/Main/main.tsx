import * as React from "react";
import MapPin from "../map-pin/map_pin.jsx";
import Pins from "../pins/pins.jsx";
import AdForm from "../ad-form/ad_form";
import LeftPopup from "../left-popup/left_popup.jsx";
import MapFilter from "../map-filter/map_filter.jsx";
import withPopup from "../../hoc/whit-popup/whit_popup.jsx";
const PopupWrapped = withPopup(LeftPopup);
import {arrayBackGroundImage} from "../../const.js";
import ChoicePlaces from "../choiсe-plaсes/choiсe-plaсes.jsx";
import {MainProps} from "../../types";


const Main = (props:MainProps) => {

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


export default Main;
