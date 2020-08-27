import React, {PureComponent} from "react";

const withMain = (Component) => {
  class WithMain extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
        pinMainCoordinate: ``,
        coordinateY: ``,
        coordinateX: ``,
        popup: null,
      };
    }
    render() {
      const {isActive, pinMainCoordinate, coordinateY, coordinateX, popup} = this.state;
      return (
        <Component
          {...this.props}
          isActive={isActive}
          coordinateY={coordinateY}
          coordinateX={coordinateX}
          pinMainCoordinate={pinMainCoordinate}
          onUsePopup={(place)=>{
            this.setState({popup: place});
            console.log(`нажал на попап`);
          }}
          onChangeCoordinate={(coordinate)=>{
            this.setState({pinMainCoordinate: coordinate});
          }}
          onChangeCoordinateX={(coordinate)=>{
            this.setState({coordinateX: coordinate});
          }}

          onChangeCoordinateY={(coordinate)=>{
            this.setState({coordinateY: coordinate});
          }}

          onClickActive={()=>{
            this.setState({isActive: true});
          }}
        >
        </Component>
      );
    }
  }

  return WithMain;
};

export default withMain;
