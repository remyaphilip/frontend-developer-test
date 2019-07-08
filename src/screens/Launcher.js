import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import * as actionCreators from "../actions";

class Launcher extends Component {

constructor(props) {
    super(props);
    this.state = {
        width: 0,
        height: 0,
      };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}
componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);    
  }
 
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render(){
    return (
        <div>
          {this.props.children}
        </div>
      );
  }
}

function mapStateToProps(state) {
    return {
      token: state.auth.token,
    };
  }

export default withRouter(connect(mapStateToProps, actionCreators)(Launcher));
