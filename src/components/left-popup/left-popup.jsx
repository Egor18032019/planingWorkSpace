import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class LeftPopup extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {activePlace} = this.props;
    if (activePlace) {
      const {titlle, departmens, otdel, timein, timeout} = activePlace;
      return (
        <article className="map__card popup">
          <img src="" className="popup__avatar" width="70" height="70" alt="Аватар пользователя" />
          <button type="button" className="popup__close">Закрыть</button>
          <h3 className="popup__title">{titlle}</h3>
          <p className="popup__text popup__text--address">мы тут на 8 этаже место 116</p>
          <p className="popup__text popup__text--department"><span>{departmens} </span></p>
          <h4 className="popup__type">{otdel}</h4>
          <p className="popup__text popup__text--capacity">ааа</p>
          <p className="popup__text popup__text--time">{timein + ` до ` + timeout}</p>
          <ul className="popup__features">
            <li className="popup__feature popup__feature--notebook"></li>
            <li className="popup__feature popup__feature--apllebook"></li>
            <li className="popup__feature popup__feature--sistemnik"></li>
            <li className="popup__feature popup__feature--telephone"></li>
          </ul>
          <p className="popup__description">Подумать</p>
          <div className="popup__photos">
            <img src="" className="popup__photo" width="45" height="40" alt="Фотография рм ?" />
          </div>
        </article>
      );

    } else {
      return (`null`);
    }
  }
}


LeftPopup.propTypes = {
  activePlace: PropTypes.object
};

export default LeftPopup;

