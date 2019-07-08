import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../actions";
import { withRouter } from "react-router";
import AppBar from '@material-ui/core/AppBar';
import MeldxButton from '../components/MeldxButton';
import { WHITE, BLACK, BLUE } from '../utils/constants';
import Circle from '../components/Circle';
import './DeviceScreen.css'
import uuid from "uuid";
import CommonLoadingScreen from './CommonLoadingScreen';


class DeviceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        // this.getActiveDevices();
        this.timer = setInterval(() => this.getActiveDevices(), 10000);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        clearInterval(this.timer);
        this.timer = null
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        if (this.props.activeDevices === undefined) {
            console.log("undefined")
            return (<CommonLoadingScreen waitingText={"Please wait until devices are fetched"} />)
          }
      else
        return this.renderFullScreen();
    }

    renderFullScreen() {
        const { height } = this.state;
        const fullScreenStyle = {
            height,
            minHeight: "100%",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            backgroundColor: "#FF7043",
            display: 'flex',
            flexDirection: 'row',
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
        return (
            <div style={fullScreenStyle}>
                {this.renderBox()}
                {this.renderAppBar()}
            </div>
        )
    }
    getActiveDevices() {
        this.props.getActiveDevices();
    }
    renderBox() {
        let { activeDevices } = this.props;
        let n = this.props.activeDevices.devices.length
        let cArray = [];

        if (this.props.activeDevices!== undefined) {
            
            let n = this.props.activeDevices.devices.length;
            let angle = 0
            let step = (2 * Math.PI) / n;
            let xcord = [], ycord = [];
            for (let i = 0; i < n; i++) {
                xcord[i] = (Math.round((225 / 2 + 200 * Math.cos(angle))));
                ycord[i] = (Math.round((225 / 2 + 200 * Math.sin(angle))));
                angle = angle + step
            }
            for (let i = 0; i < n; i++) {
                cArray.push(<Circle key = {uuid.v4()} radius={5} x={xcord[i]} y={ycord[i]} />)
            }
        }
        if (activeDevices) {
            return (

                <div style={{ position: "relative", top: 25, left: 25, height: 300, width: 300 }}>
                    <div id="inner-orbit">
                        <p> {n} </p>
                    </div>
                    <div id="mid-orbit">
                        {cArray}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div/>
            )
        }
    }
    renderAppBar() {
        return (
            <div>
                <AppBar position="fixed" style={{ backgroundColor: "#D76845", padding: 10 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <div style={{ padding: 5 }}>
                            <MeldxButton buttonColor={WHITE} label="NOTIFY" fontColor={BLACK} 
                            clickHandler={()=>this.onNotify()}
                            ></MeldxButton>
                        </div>
                        <div style={{ padding: 5 }}>
                            <MeldxButton buttonColor={BLUE} label="LOG OUT" fontColor={WHITE} 
                            clickHandler={()=>this.onLogout()}
                            ></MeldxButton>
                        </div>

                    </div>
                </AppBar>
            </div>
        )
    }
    renderPadding(height) {
        return (
            <div style={
                { height }
            } />
        );
    }
onLogout(){
    this.props.logOut();
}
}


function mapStateToProps(state) {
    return {
        activeDevices: state.device.activeDevices,
    };
}

export default withRouter(connect(mapStateToProps, actionCreators)(DeviceScreen));