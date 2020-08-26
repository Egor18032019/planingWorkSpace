import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getPlaces} from "../../reducer/selectors.js";


class Pins extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {places} = this.props;
    if (places.length > 1) {
      const left = places[0].coordinateX;
      const top = places[0].coordinateY;
      return (
        <article className="map__card popup" style={{left, top}}>
          <img src="" className="popup__avatar" width="70" height="70" alt="Аватар пользователя"/>
          <button type="button" className="popup__close">Закрыть</button>
          <h3 className="popup__title">Уютно</h3>
          <p className="popup__text popup__text--address">мы тут на 8 этаже место 116</p>
          <p className="popup__text popup__text--department"><span>Главный </span></p>
          <h4 className="popup__type">АХО</h4>
          <p className="popup__text popup__text--capacity">ааа</p>
          <p className="popup__text popup__text--time">с 10-00 до 19-00</p>
          <ul className="popup__features">
            <li className="popup__feature popup__feature--noutbuk"></li>
            <li className="popup__feature popup__feature--apllebook"></li>
            <li className="popup__feature popup__feature--sistemnik"></li>
            <li className="popup__feature popup__feature--telephone"></li>
          </ul>
          <p className="popup__description">Подумать</p>
          <div className="popup__photos">
            <img src="" className="popup__photo" width="45" height="40" alt="Фотография рм ?"/>
          </div>
        </article>
      );
    } else {
      return (``);
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
  // isActive: PropTypes.bool.isRequired,
  places: PropTypes.array.isRequired,
};

export {Pins};
export default connect(mapStateToProps, mapDispatchToTitle)(Pins); // первым стате а вторым фдиспатчеры
