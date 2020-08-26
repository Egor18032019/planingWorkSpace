import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionPlace} from "../../reducer/data-reducer/data-reducer.js";

class AdForm extends PureComponent {
  constructor(props) {
    super(props);
    this.formRef = createRef();
    this.titledRef = createRef();
    this.iconRef = createRef();
    this.type = createRef();
    this.departmens = createRef();
    this.timein = createRef();
    this.timeout = createRef();
    this.otdel = createRef();
    this.gender = createRef();
    this.features = createRef();
    this.description = createRef();
    this.photo = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(evt) {
    const {handlerSubmitForAdd, pinMainCoordinate, coordinateX, coordinateY} = this.props;
    evt.preventDefault();
    handlerSubmitForAdd({
      titled: this.titledRef.current.value,
      avatar: this.iconRef.current.value,
      coordinate: pinMainCoordinate,
      type: this.type.current.value,
      departmens: this.departmens.current.value,
      timein: this.timein.current.value,
      timeout: this.timeout.current.value,
      otdel: this.otdel.current.value,
      gender: this.gender.current.value,
      features: this.features.current.value,
      description: this.description.current.value,
      photo: this.photo.current.value,
      coordinateX,
      coordinateY,
    });
    // console.log(this.description.current.value);
    // console.log(this.iconRef.current.value);
    // // console.log(this.iconRef.current.files[0].name);
    // console.log(this.iconRef.current.files[0]);
  }

  render() {
    const {isActive, pinMainCoordinate} = this.props;
    return (
      <form className={`ad-form ${!isActive ? `ad-form--disabled` : ``}`} method="post" encType="multipart/form-data"
        action="https://js.dump.academy/keksobooking" autoComplete="off" ref={this.formRef}>
        <fieldset className="ad-form-header">
          <legend className="ad-form-header__title">Аватарка сотрудника</legend>
          <div className="ad-form-header__upload">
            <div className="ad-form-header__preview">
              <img src="img/muffin-grey.svg" alt="Аватар пользователя" width="40" height="44" />
            </div>
            <div className="ad-form__field">
              <input type="file" id="avatar" name="avatar" className="ad-form-header__input visually-hidden"
                ref={this.iconRef} />
              <label className="ad-form-header__drop-zone" htmlFor="avatar">Загрузить фото...</label>
            </div>
            <p className="ad-form-header__info">Заполните все обязательные поля.
        Получившееся объявление должно давать коллегам полное представление о новом сотруднике</p>
          </div>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label" htmlFor="title">Информация о сотруднике</label>
          <input id="title" name="title" type="text" maxLength="100" minLength="30" required
            placeholder="Тут кто то новенький" ref={this.titledRef} />
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--wide">
          {/* TODO: нужно ли тут отображать координаты ? или лучше следующее по номеру рабочее место ? */}
          <label className="ad-form__label" htmlFor="address">Координаты</label>
          <input id="address" name="address" type="text" readOnly value={pinMainCoordinate} />
        </fieldset>
        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="type">Тип организации</label>
          <select id="type" name="type" defaultValue="pao" ref={this.type}>
            <option value="pao">ПАО</option>
            <option value="ao">АО</option>
            <option value="contract">Подрядчики</option>
          </select>
        </fieldset>
        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="departmens">Департамент</label>
          <select id="departmens" name="departmens" defaultValue="1" ref={this.departmens}>
            <option value="1">Операционный</option>
            <option value="2">Разработчики</option>
            <option value="3">Подрядчики</option>
          </select>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--time">
          <label className="ad-form__label" htmlFor="timein">Время работы</label>
          <select id="timein" name="timein" defaultValue="09:00" ref={this.timein}>
            <option value="09:00">Примерно с 9</option>
            <option value="10:00">Примерно с 10</option>
            <option value="11:00">Примерно с 11</option>
          </select>
          <select id="timeout" name="timeout" title="Time to go out" defaultValue="18:00" ref={this.timeout}>
            <option value="18:00">Где то до 18</option>
            <option value="19:00">Где то до 13</option>
            <option value="20:00">Где то до 14</option>
          </select>
        </fieldset>
        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="otdel">Отдел</label>
          <select id="otdel" name="otdel" defaultValue="1" ref={this.otdel}>
            <option value="0">АХО</option>
            <option value="1">Разработка</option>
            <option value="2" >Подрядчики</option>
            <option value="3">Тестирование</option>
          </select>
        </fieldset>
        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="gender">Пол</label>
          <select id="gender" name="gender" defaultValue="1" ref={this.gender}>
            <option value="1">Мужской</option>
            <option value="0">Женский</option>
          </select>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--wide features" ref={this.features}>
          <legend>Оборудование</legend>
          <input type="checkbox" name="features" value="notebook" id="feature-notebook"
            className="feature__checkbox visually-hidden" />
          <label className="feature feature--notebook" htmlFor="feature-notebook">Ноутбук</label>
          <input type="checkbox" name="features" value="apllebook" id="feature-apllebook"
            className="feature__checkbox visually-hidden" />
          <label className="feature feature--apllebook" htmlFor="feature-apllebook">МакБук</label>
          <input type="checkbox" name="features" value="sistemnik" id="feature-sistemnik"
            className="feature__checkbox visually-hidden" />
          <label className="feature feature--sistemnik" htmlFor="feature-sistemnik">Системный блок</label>
          <input type="checkbox" name="features" value="telephone" id="feature-telephone"
            className="feature__checkbox visually-hidden" />
          <label className="feature feature--telephone" htmlFor="feature-telephone">Стационарный телефон</label>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label" htmlFor="description">Описание (не обязательно)</label>
          <textarea id="description" name="description"
            placeholder="Здесь расскажите о том кто тут" ref={this.description}></textarea>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label">Фотография рабочего места</label>
          <div className="ad-form__photo-container">
            <div className="ad-form__upload">
              <input type="file" id="images" name="images" className="ad-form__input visually-hidden" ref={this.photo} />
              <label htmlFor="images" className="ad-form__drop-zone">Загрузить фото...</label>
            </div>
            <div className="ad-form__photo"></div>
          </div>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--submit">
          <button className="ad-form__submit" type="submit" onClick={this.handleSubmit}>Опубликовать</button>
    или <button className="ad-form__reset" type="reset">очистить</button>
        </fieldset>
      </form>

    );
  }
}

const mapDispatchToTitle = (dispatch) => ({
  handlerSubmitForAdd(place) {
    if (place.title || place.coordinate) {
      dispatch(ActionPlace.addPlace(place));
    }
  },

});

const mapStateToProps = () => {
  return {

  };
};


AdForm.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handlerSubmitForAdd: PropTypes.func.isRequired,
  pinMainCoordinate: PropTypes.string.isRequired,
  coordinateX: PropTypes.string.isRequired,
  coordinateY: PropTypes.string.isRequired,
};

export {AdForm};
export default connect(mapStateToProps, mapDispatchToTitle)(AdForm); // первым стате а вторым фдиспатчеры
