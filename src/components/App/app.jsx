import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {
  ActionActive, ActionTown
} from "../../reducer.js";
import Main from "../Main/main.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  _renderApp() {
    const {store, handlerClickOnTitle} = this.props;

    if (store.active === `mainPages` || store.active === false) {
      return (
        <Main
          onChoiseOfficeClick = {handlerClickOnTitle}
        />
      );
    } else {
      return (
        <form action="#" className="map__filters" autoComplete="off">
          <select name="choise-space" id="choise" className="map__choise">
            <option value="ekb" selected>Екатеринбург</option>
            <option value="rzn">Рязань</option>
            <option value="smr">Самара</option>
          </select>
          <button> Загрузить выбранный город</button>
        </form>
      );
    }
  }

  render() {
    const {state} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <Main
            />
          </Route>
          <Route exact path="/login">

          </Route>
        </Switch>
      </BrowserRouter >
    );
  }
}

const mapDispatchToTitle = (dispatch) => ({
  handlerClickOnTitle(place) {
    console.log(`place:`, place);

    dispatch(ActionActive.activeState(place));
  },
  onCityNameClick(city) {
    dispatch(ActionTown.changeCity(city));
  }
});

const mapStateToProps = (store) => {
  console.log(`store:`, store);
  return {
    store
  };
};

App.propTypes = {
  store: PropTypes.shape({
    active: PropTypes.string.isRequired,
    office: PropTypes.number,
  }).isRequired,
  handlerClickOnTitle: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToTitle)(App); // первым стате а вторым фдиспатчеры
