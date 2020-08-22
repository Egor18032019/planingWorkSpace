import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.onClickForActive = this.onClickForActive.bind(this);
  }

  render() {
    const {activeOffice, isActive} = this.props;
    return (
      <main>
        <div className="promo">
          <h1 className="promo__title visually-hidden">Планировщик рабочих мест</h1>
          <img src="" alt="Планировщик рабочих мест" width="215" height="45"/>
          {/* <!-- TODO: сделать картинку --> */}
        </div>

        {/* <!-- Карта объявлений --> */}
        <section className={`map ${!isActive ? `map--faded` : ``}`}>

          {/* <!-- Метки объявлений --> */}
          <div className="map__pins">
            <div className="map__overlay">
              <h2 className="map__title">г.{activeOffice} офис №</h2>
            </div>
            <button className="map__pin map__pin--main" style={{left: `570px`, top: `375px`}}
              onClick={this.onClickForActive}>
              <img src="img/pins.svg" draggable="false" alt="Метка объявления" width="40" height="44"/>
              <svg viewBox="0 0 70 70" width="156" height="156" aria-label="Метка для поиска жилья">
                <defs>
                  <path d="M35,35m-23,0a23,23 0 1,1 46,0a23,23 0 1,1 -46,0" id="tophalf" />
                </defs>
                <ellipse cx="35" cy="35" rx="35" ry="35" fill="rgba(255, 86, 53, 0.7)" />
                <text>
                  <textPath xlinkHref="#tophalf" startOffset="0">Для запуска нажми меня</textPath>
                </text>
              </svg>
            </button>
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
                  className="map__checkbox visually-hidden"/>
                <label className="map__feature map__feature--notebook" htmlFor="filter-notebook">Ноутбук</label>
                <input type="checkbox" name="features" value="apllebook" id="filter-apllebook"
                  className="map__checkbox visually-hidden"/>
                <label className="map__feature map__feature--apllebook" htmlFor="filter-apllebook">Макбук</label>
                <input type="checkbox" name="features" value="sistemnik" id="filter-sistemnik"
                  className="map__checkbox visually-hidden"/>
                <label className="map__feature map__feature--sistemnik" htmlFor="filter-sistemnik">Системный блок</label>
                <input type="checkbox" name="features" value="telephone" id="filter-telephone"
                  className="map__checkbox visually-hidden"/>
                <label className="map__feature map__feature--telephone" htmlFor="filter-telephone">Рабочий телефон</label>
              </fieldset>
            </form>
          </div>
        </section>

        {/* <!-- Форма объявления --> */}
        <section className="notice">
          <h2 className="notice__title">Новое р.м.</h2>
          <form className="ad-form ad-form--disabled" method="post" encType="multipart/form-data"
            action="https://js.dump.academy/keksobooking" autoComplete="off">
            <fieldset className="ad-form-header">
              <legend className="ad-form-header__title">Аватарка сотрудника</legend>
              <div className="ad-form-header__upload">
                <div className="ad-form-header__preview">
                  <img src="img/muffin-grey.svg" alt="Аватар пользователя" width="40" height="44"/>
                </div>
                <div className="ad-form__field">
                  <input type="file" id="avatar" name="avatar" className="ad-form-header__input visually-hidden"/>
                  <label className="ad-form-header__drop-zone" htmlFor="avatar">Загрузить фото...</label>
                </div>
                <p className="ad-form-header__info">Заполните все обязательные поля.
                Получившееся объявление должно давать коллегам полное представление о новом сотруднике</p>
              </div>
            </fieldset>
            <fieldset className="ad-form__element ad-form__element--wide">
              <label className="ad-form__label" htmlFor="title">Заголовок</label>
              <input id="title" name="title" type="text" maxLength="100" minLength="30" required
                placeholder="Тут кто то новенький"/>
            </fieldset>
            <fieldset className="ad-form__element ad-form__element--wide">
              <label className="ad-form__label" htmlFor="address">Координаты</label>
              <input id="address" name="address" type="text"/>
            </fieldset>
            <fieldset className="ad-form__element">
              <label className="ad-form__label" htmlFor="type">Тип организации</label>
              <select id="type" name="type" defaultValue="pao">
                <option value="pao">ПАО</option>
                <option value="ao">АО</option>
                <option value="contract">Подрядчики</option>
              </select>
            </fieldset>
            <fieldset className="ad-form__element">
              <label className="ad-form__label" htmlFor="departmens">Департамент</label>
              <select id="departmens" name="departmens" defaultValue="1">
                <option value="1">Операционный</option>
                <option value="2">Разработчики</option>
                <option value="3">Подрядчики</option>
              </select>
            </fieldset>
            <fieldset className="ad-form__element ad-form__element--time">
              <label className="ad-form__label" htmlFor="timein">Время работы</label>
              <select id="timein" name="timein" defaultValue="09:00">
                <option value="09:00">Примерно с 9</option>
                <option value="10:00">Примерно с 10</option>
                <option value="11:00">Примерно с 11</option>
              </select>
              <select id="timeout" name="timeout" title="Time to go out" defaultValue="18:00">
                <option value="18:00">Где то до 18</option>
                <option value="19:00">Где то до 13</option>
                <option value="20:00">Где то до 14</option>
              </select>
            </fieldset>
            <fieldset className="ad-form__element">
              <label className="ad-form__label" htmlFor="otdel">Количество комнат</label>
              <select id="otdel" name="otdel" defaultValue="1">
                <option value="0">АХО</option>
                <option value="1">Разработка</option>
                <option value="2" >Подрядчики</option>
                <option value="3">Тестирование</option>
              </select>
            </fieldset>
            <fieldset className="ad-form__element">
              <label className="ad-form__label" htmlFor="gender">Пол</label>
              <select id="gender" name="gender" defaultValue="1">
                <option value="1">Мужской</option>
                <option value="0">Женский</option>
              </select>
            </fieldset>
            <fieldset className="ad-form__element ad-form__element--wide features">
              <legend>Оборудование</legend>
              <input type="checkbox" name="features" value="notebook" id="feature-notebook"
                className="feature__checkbox visually-hidden"/>
              <label className="feature feature--notebook" htmlFor="feature-notebook">Ноутбук</label>
              <input type="checkbox" name="features" value="apllebook" id="feature-apllebook"
                className="feature__checkbox visually-hidden"/>
              <label className="feature feature--apllebook" htmlFor="feature-apllebook">МакБук</label>
              <input type="checkbox" name="features" value="sistemnik" id="feature-sistemnik"
                className="feature__checkbox visually-hidden"/>
              <label className="feature feature--sistemnik" htmlFor="feature-sistemnik">Системный блок</label>
              <input type="checkbox" name="features" value="telephone" id="feature-telephone"
                className="feature__checkbox visually-hidden"/>
              <label className="feature feature--telephone" htmlFor="feature-telephone">Стационарный телефон</label>
            </fieldset>
            <fieldset className="ad-form__element ad-form__element--wide">
              <label className="ad-form__label" htmlFor="description">Описание (не обязательно)</label>
              <textarea id="description" name="description"
                placeholder="Здесь расскажите о том кто тут"></textarea>
            </fieldset>
            <fieldset className="ad-form__element ad-form__element--wide">
              <label className="ad-form__label">Фотография рабочего места</label>
              <div className="ad-form__photo-container">
                <div className="ad-form__upload">
                  <input type="file" id="images" name="images" className="ad-form__input visually-hidden"/>
                  <label htmlFor="images" className="ad-form__drop-zone">Загрузить фото...</label>
                </div>
                <div className="ad-form__photo"></div>
              </div>
            </fieldset>
            <fieldset className="ad-form__element ad-form__element--submit">
              <button className="ad-form__submit" type="submit">Опубликовать</button>
            или <button className="ad-form__reset" type="reset">очистить</button>
            </fieldset>
          </form>
        </section>
      </main>
    );
  }
  componentDidMount() {
    console.log(`componentDidMount`);
    document.addEventListener(`click`, this.onClickForActive, true);
  }
  componentWillUnmount() {
    console.log(`componentWillUnmount`);
    document.removeEventListener(`click`, this.onClickForActive, true);
  }
  onClickForActive() {
    const {onClickActive} = this.props;
    onClickActive();
    document.removeEventListener(`click`, this.onClickForActive.bind(this));
  }

  handelSubmit(event) {
    event.preventDefault();

  }
}

Main.propTypes = {
  activeOffice: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  onClickActive: PropTypes.func,
};

export default Main;
