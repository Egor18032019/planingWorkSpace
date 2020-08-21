// компонент "Карточка предложения"
import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class ChoicePlaces extends PureComponent {
  constructor(props) {
    super(props);

    this.menuRef = React.createRef();
    // не придумал как вынести это в hoc === оставил тут
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form action="#" className="map__filters" autoComplete="off"
        onSubmit={this.handleSubmit}>
        <select name="choise-space" id="choise" className="map__choise" defaultValue="Екатеринбург" ref={this.menuRef}>
          <option value="Екатеринбург">Екатеринбург</option>
          <option value="Рязань">Рязань</option>
          <option value="Самара">Самара</option>
        </select>
        <button> Загрузить выбранный город</button>
      </form>
    );
  }

  handleSubmit(evt) {
    const {onChoiseOfficeClick} = this.props;
    evt.preventDefault();
    onChoiseOfficeClick(this.menuRef.current.value);
  }

}

ChoicePlaces.propTypes = {
  onChoiseOfficeClick: PropTypes.func.isRequired,
};


export default ChoicePlaces;
