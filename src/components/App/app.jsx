import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {
  ActionActive
} from "../../reducer/data-reducer/data-reducer.js";
import {getActiveOffice, getActivePage} from "../../reducer/selectors.js";
import Main from "../Main/main.jsx";
import withMain from "../../hoc/whit-main/whit-main.js";
const MainWrapped = withMain(Main);
import ChoicePlaces from "../choiсe-plaсes/choiсe-plaсes.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  _renderApp() {
    const {activeOffice, handlerClickOnChoise, activePage} = this.props;
    if (activePage === `officePage`) {
      return (
        <MainWrapped
          activeOffice={activeOffice}
        />
      );
    } else {
      return (
        <ChoicePlaces
          onChoiseOfficeClick={handlerClickOnChoise}
        />
      );
    }
  }

  render() {
    const {activeOffice} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <MainWrapped
              activeOffice={activeOffice}
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
  handlerClickOnChoise(place) {
    console.log(`place:`, place);
    dispatch(ActionActive.activeState(place));
  },
  // onCityNameClick(city) {
  //   dispatch(ActionTown.changeCity(city));
  // }
});

const mapStateToProps = (store) => {
  console.log(`store:`, store.DATA);
  return {
    activeOffice: getActiveOffice(store),
    activePage: getActivePage(store),
  };
};

App.propTypes = {
  activeOffice: PropTypes.string,
  activePage: PropTypes.string.isRequired,
  handlerClickOnChoise: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToTitle)(App); // первым стате а вторым фдиспатчеры
