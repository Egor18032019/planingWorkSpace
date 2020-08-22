import React, {PureComponent} from "react";

const withMain = (Component) => {
  class WithMain extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
      };
    }
    render() {
      const {isActive} = this.state;
      return (
        <Component
          {...this.props}
          isActive={isActive}
          // onCardMouseEnter={(place)=>{
          //   this.setState({activeOffer: place});
          // }}
          // onCardMouseOut={()=>{
          //   this.setState({activeOffer: null});
          // }}
          onClickActive={()=>{
            this.setState({isActive: true});
            console.log(`najal na button`, isActive);
          }}
        >
        </Component>
      );
    }
  }

  return WithMain;
};

export default withMain;
