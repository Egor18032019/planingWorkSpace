// Определяем действия(actions)
const ActionType = {
  ADD_PLACE: `CHANGE_OFFICE`,
  ACTIVE_PLACE: `ACTIVE_PLACE`,
  GET_OFFERS: `GET_OFFERS`,
};


// Объект начального состояния(state):
const initialState = {
  page: `choisePage`,
  office: null,
  places: [],
  popup: null,

};

// Редьюсер. Функция-редьюсер принимает в качестве параметров текущий state и действие (action).
// Результатом выполнение редьюсера станет новое состояние.
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        page: `officePage`,
        office: action.office
      });
    case ActionType.ADD_PLACE:
      let statePlaceRewrite = [...state.places];
      statePlaceRewrite.push(action.payload);
      return Object.assign({}, state, {
        places: statePlaceRewrite
      });
    case ActionType.ACTIVE_PLACE:
      return Object.assign({}, state, {
        popup: action.payload
      });
  }
  return state;
};

const ActionActive = {
  activeState: (place) => ({
    type: ActionType.GET_OFFERS, // обязательно поле type
    office: place
  }),
  activePopup: (place) => ({
    type: ActionType.ACTIVE_PLACE, // обязательно поле type
    payload: place
  })
};

const ActionPlace = {
  addPlace: (place) => ({
    type: ActionType.ADD_PLACE,
    payload: place,
  }),
};


export {
  dataReducer,
  ActionType,
  ActionActive,
  ActionPlace,
};