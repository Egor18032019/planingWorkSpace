// import {
//   mockSettings
// } from "./mocks/offers.js";

// Определяем действия(actions)
const ActionType = {
  CHANGE_OFFICE: `CHANGE_OFFICE`,
  GET_OFFERS: `GET_OFFERS`,
};

// let filterOnCity = (town) => {
//   return mockSettings.filter((element) => element.city === town);
// };

// Объект начального состояния(state):
const initialState = {
  active: `choise`,
  office: null,
};

// Редьюсер. Функция-редьюсер принимает в качестве параметров текущий state и действие (action).
// Результатом выполнение редьюсера станет новое состояние.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_OFFICE:
      return Object.assign({}, state, {
        active: `officePages`,
        office: action.office
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        cardId: action.cardId,
        active: `property`
      });
  }
  return state;
};

const ActionActive = {
  activeState: (place) => ({
    type: ActionType.CHANGE_OFFICE, // обязательно поле type
    office: place
  })
};

const ActionTown = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_OFFICE,
    payload: city,
  }),
};


export {
  reducer,
  ActionType,
  ActionActive,
  ActionTown,
};
