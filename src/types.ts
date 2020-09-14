type func = () => {}
type noop = () => void

interface AppProps {
  onPinClick: func,
  handlerClickOnChoise: func,
  handlerSubmitForAdd: func,
  activeOffice: string,
  activePage: string,
  places: {}[],
  activePlace: object,
};

interface MainProps {
  onPinClick: func,
  onClickActive: func,
  onMovePoint: func,
  onChangeCoordinate: func,
  onChangeCoordinateY: func,
  onChangeCoordinateX: func,
  handlerSubmitForAdd: func,
  handlerClickOnChoise: func,
  activeOffice: string,
  coordinateX: number,
  coordinateY: number,
  isActive: boolean,
  activePlace: object,
  pinMainCoordinate: string,
  places: [],
};

export {
  AppProps,
  MainProps,
  func,
  noop,
}
