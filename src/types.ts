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
  handlerClickOnChoise: func,
  onClickActive: func,
  onChangeCoordinateY: func,
  onChangeCoordinate: func,
  onChangeCoordinateX: func,
  handlerSubmitForAdd: func,
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
