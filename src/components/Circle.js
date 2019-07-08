import React, { Component } from 'react';


class Circle extends Component {

  render() {
    let {radius, x,y} = this.props;
    let xcord = x?x:10;
    let ycord = y?y:10;
    let circleStyle = {
      position: "absolute",
        padding:20,
        top:ycord,
        left: xcord,
        display:"inline-block",
        borderRadius: "50%",
        width:20,
        height:20,
        backgroundColor: "white"
      };

    return (
        <div style={circleStyle}
           radius={radius}>
        </div>
    );
  }

}


export default Circle;
