import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class LeftPopup extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleCorrect = this.handleCorrect.bind(this);
  }

  handleClose(evt) {
    const {onPinClick} = this.props;
    evt.preventDefault();
    onPinClick(null);
  }
  handleCorrect(evt) {
    // evt.preventDefault();
    console.log(evt);
  }

  render() {
    const {activePlace} = this.props;
    if (activePlace) {
      const {id, titlle, departmens, otdel, timein, timeout, description, photo, avatar, company,
        telephone, sistemnik, apllebook, notebook} = activePlace;
      return (
        <article className="map__card popup">

          <img src={avatar} className="popup__avatar" width="70" height="70" alt="Аватар пользователя" />
          <button type="button" className="popup__close" onClick={this.handleClose} >Закрыть</button>
          <h3 className="popup__title">{titlle}</h3>
          <p className="popup__text popup__text--address">Рабочее место № {id}</p>
          <p className="popup__text popup__text--department"><span>{departmens} </span></p>
          <h4 className="popup__type">{otdel}</h4>
          <p className="popup__text popup__text--capacity">{company}</p>
          <p className="popup__text popup__text--time">{timein + ` до ` + timeout}</p>

          <fieldset className="popup__features" >
            <legend>Оборудование</legend>
            <input type="checkbox" name="features" value="notebook" id="feature-notebook"
              className="feature__checkbox visually-hidden" ref={this.notebook}/>
            <label className="feature popup__feature popup__feature--notebook" htmlFor="feature-notebook">Ноутбук</label>
            <input type="checkbox" name="features" value="apllebook" id="feature-apllebook"
              className="feature__checkbox visually-hidden" ref={this.apllebook} />
            <label className="feature popup__feature popup__feature--apllebook" htmlFor="feature-apllebook">МакБук</label>
            <input type="checkbox" name="features" value="sistemnik" id="feature-sistemnik"
              className="feature__checkbox visually-hidden" ref={this.sistemnik} />
            <label className="feature popup__feature popup__feature--sistemnik" htmlFor="feature-sistemnik">Системный блок</label>
            <input type="checkbox" name="features" value="telephone" id="feature-telephone"
              className="feature__checkbox visually-hidden" ref={this.telephone} />
            <label className="feature popup__feature popup__feature--telephone" htmlFor="feature-telephone">Стационарный телефон</label>
          </fieldset>

          <ul className="popup__features">
            {notebook ? <li className="popup__feature popup__feature--notebook"></li> : ``}
            {apllebook ? <li className="popup__feature popup__feature--apllebook"></li> : ``}
            {sistemnik ? <li className="popup__feature popup__feature--sistemnik"></li> : ``}
            {telephone ? <li className="popup__feature popup__feature--telephone"></li> : ``}
          </ul>

          <p className="popup__description">{description}</p>
          <div className="popup__photos">
            <img src={photo} className="popup__photo" width="45" height="40" alt="Фотография рм" />
          </div>
          <button className={`popup__button`} type="button"
            onClick={() => {
              this.handleCorrect(activePlace);
            }}>
         Коректировка </button>
        </article>
      );

    } else {
      return (``);
    }
  }
}


LeftPopup.propTypes = {
  activePlace: PropTypes.object,
  onPinClick: PropTypes.func.isRequired
};

export default LeftPopup;

export {LeftPopup};
