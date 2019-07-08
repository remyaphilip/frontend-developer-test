import React, { Component } from 'react';
import {CircularProgress,Button} from '@material-ui/core';
import {BLUE,WHITE} from '../utils/constants';

class MeldxButton extends Component {

  render() {


    let {keyPressHandler,clickHandler, label, loading, style, fontColor,buttonColor,fontSize,padding} = this.props;

    //do nothing when something is loading
    clickHandler = loading?()=>this.doNothing():clickHandler;
    style = style?style:"contained";
    fontColor = fontColor? fontColor:WHITE;
     fontSize = fontSize?fontSize:16;
     padding= padding?padding:15;
    buttonColor = buttonColor? buttonColor: BLUE;

    return (
      <Button
          style={{
              borderRadius: 5,
              backgroundColor: buttonColor,
              fontSize: fontSize,
              padding: padding,
          }}
          variant={style}
          onClick={clickHandler}
          onKeyPress={keyPressHandler}
          >
          {loading?
            <CircularProgress size={30} thickness={6} style={{color:fontColor}}/>
            :
            <strong style={{color:fontColor}}>{label}</strong>
          }
      </Button>
    );
  }
}


export default MeldxButton;
