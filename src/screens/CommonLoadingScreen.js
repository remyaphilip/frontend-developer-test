import React,{Component} from 'react';
import {CircularProgress} from '@material-ui/core';
import {connect} from 'react-redux';
import * as actionCreators from "../actions";
import {WHITE} from '../utils/constants';

class CommonLoadingScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      auth: true,
      anchorEl: null,
      width:0,
      height:0,
      error:false,
      invoice:undefined,
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
    let {height} = this.state;
    let {waitingText} = this.props;
    waitingText = waitingText? waitingText:"Please wait...";

    let fullScreenStyle = {
      height:height,
      minHeight: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: 'flex', flex:1,
    };

    return (
      <div style={fullScreenStyle}>
        <div style={{display: 'flex', backgroundColor:"rgba(0,0,0, 0.5)", flexDirection: 'column', justifyContent:'center', alignItems:'center', flex:1, padding:30}}>

          <CircularProgress size={40} thickness={5} style={{color:WHITE}}/>
          {this.renderPadding(25)}
          <p align={"center"} style={{color:WHITE, fontStyle:'normal', fontSize:22}}>{waitingText}</p>

        </div>
      </div>
    );
  }





  renderPadding(height){
    return (
      <div style={{height}}/>
    );
  }


}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps,actionCreators)(CommonLoadingScreen);
