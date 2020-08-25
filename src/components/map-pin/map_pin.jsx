import React, {useRef} from "react";

import PropTypes from "prop-types";

const MapPin = (props) => {
  const {isActive, onClickForActive} = props;
  const dragAndDrop = () => {

    const pinRef = useRef(null);

    const handleDown = (e) => {
      const setupDialogElement = document.querySelector(`.map__pins`);
      pinRef.current.style.position = `absolute`;
      moveAt(e);
      // переместим в body, чтобы пин был точно не внутри position:relative
      // по другому не смог сделать
      document.body.appendChild(pinRef.current);

      pinRef.current.style.zIndex = 1000; // показывать пин над другими элементами

      // передвинуть пин под координаты курсора
      // и сдвинуть на половину ширины/высоты для центрирования
      function moveAt(evt) {
        evt.preventDefault();
        let pinWidth = pinRef.current.offsetWidth / 2;
        let pinHeight = pinRef.current.offsetHeight / 3;
        let coordX = evt.clientX - pinWidth;
        let coordY = evt.clientY - pinHeight;
        pinRef.current.style.top = coordY + `px`;
        pinRef.current.style.left = coordX + `px`;
      }

      // 3, перемещать в пределах выбранной области
      setupDialogElement.onmousemove = function (ev) {
        moveAt(ev);
      };

      // 4. отследить окончание переноса
      pinRef.current.onmouseup = function (upEvt) {
        upEvt.preventDefault();
        setupDialogElement.onmousemove = null;
        pinRef.current.onmouseup = null;


      };
      // 5. Чтоб не обрабатывался как картинка браузером
      pinRef.current.ondragstart = function () {
        return false;
      };
    };

    return (
      <button className="map__pin map__pin--main" style={{left: `570px`, top: `375px`}}
        onClick={!isActive ? onClickForActive : ()=>{}} ref={pinRef}
        onMouseDown={handleDown}>
        <img src="img/pins.svg" draggable="false" alt="Метка объявления" width="20" height="22" />
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
    );
  };
  return (
    dragAndDrop()
  );

};

MapPin.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClickForActive: PropTypes.func.isRequired,
};

export default MapPin;
