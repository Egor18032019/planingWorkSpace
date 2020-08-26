import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MapPin from "../map-pin/map_pin.jsx";
import Pins from "../pins/pins.jsx";
import AdForm from "../ad-form/ad_form.jsx";
class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.onClickForActive = this.onClickForActive.bind(this);
  }

  render() {

    const {activeOffice, isActive, onChangeCoordinate, pinMainCoordinate, onChangeCoordinateY,
      onChangeCoordinateX, coordinateX, coordinateY} = this.props;
    return (
      <main>
        <div className="promo">
          <h1 className="promo__title visually-hidden">Планировщик рабочих мест</h1>
          <img src="" alt="Планировщик рабочих мест" width="215" height="45" />
          {/* <!-- TODO: сделать картинку --> */}
        </div>

        {/* <!-- Карта объявлений --> */}
        <section className={`map ${!isActive ? `map--faded` : ``}`}>

          {/* <!-- Метки объявлений --> */}
          <div className="map__pins">
            <Pins />
            <div className="map__overlay">
              <h2 className="map__title">г.{activeOffice} офис №</h2>
            </div>
            <MapPin
              isActive={isActive}
              onClickForActive={this.onClickForActive}
              onMovePoint={this.onMovePoint}
              pinMainCoordinate={pinMainCoordinate}
              onChangeCoordinate={onChangeCoordinate}
              onChangeCoordinateX={onChangeCoordinateX}
              onChangeCoordinateY={onChangeCoordinateY}
            />
          </div>

          {/* <!-- Фильтрация объявлений --> */}
          <div className="map__filters-container">
            <form action="#" className="map__filters" autoComplete="off">
              <select name="type-space" id="type" className="map__filter" defaultValue="any">
                <option value="any">Любой</option>
                <option value="palace">Занято</option>
                <option value="flat">Свободно</option>
              </select>
              <select name="type-company" id="type-company" className="map__filter" defaultValue="Любая">
                <option value="any">Любая</option>
                <option value="pao">ПАО</option>
                <option value="ao">АО</option>
                <option value="contract">Подряд</option>
              </select>
              <select name="type-departmens" id="type-departmens" className="map__filter" defaultValue="any">
                <option value="any">Любой</option>
                <option value="1">Операционный</option>
                <option value="2">Разработчики</option>
                <option value="3">Подрядчики</option>
              </select>
              <select name="type-otdel" id="type-otdel" className="map__filter" defaultValue="any">
                <option value="any">Любой</option>
                <option value="2">АХО</option>
                <option value="1">Разработка</option>
                <option value="0">Тестирование</option>
              </select>

              <fieldset id="work-features" className="map__features">
                <input type="checkbox" name="features" value="notebook" id="filter-notebook"
                  className="map__checkbox visually-hidden" />
                <label className="map__feature map__feature--notebook" htmlFor="filter-notebook">Ноутбук</label>
                <input type="checkbox" name="features" value="apllebook" id="filter-apllebook"
                  className="map__checkbox visually-hidden" />
                <label className="map__feature map__feature--apllebook" htmlFor="filter-apllebook">Макбук</label>
                <input type="checkbox" name="features" value="sistemnik" id="filter-sistemnik"
                  className="map__checkbox visually-hidden" />
                <label className="map__feature map__feature--sistemnik" htmlFor="filter-sistemnik">Системный блок</label>
                <input type="checkbox" name="features" value="telephone" id="filter-telephone"
                  className="map__checkbox visually-hidden" />
                <label className="map__feature map__feature--telephone" htmlFor="filter-telephone">Рабочий телефон</label>
              </fieldset>
            </form>
          </div>
        </section>

        {/* <!-- Форма объявления --> */}
        <section className="notice">
          <h2 className="notice__title">Новое р.м.</h2>
          <AdForm
            isActive={isActive}
            pinMainCoordinate={pinMainCoordinate}
            coordinateY={coordinateY}
            coordinateX={coordinateX}
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
  activeOffice: PropTypes.string,
  coordinateX: PropTypes.string,
  coordinateY: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  onClickActive: PropTypes.func,
  pinMainCoordinate: PropTypes.string,
  onChangeCoordinate: PropTypes.func,
  onChangeCoordinateX: PropTypes.func,
  onChangeCoordinateY: PropTypes.func,
};

export default Main;
