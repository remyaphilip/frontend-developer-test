import axios from 'axios';
import { MAIN_URL } from '../utils/constants';
import history from "../utils/history";
import axiosCookieJarSupport from 'axios-cookiejar-support';
import mockupData from '../utils/mockupData'

axiosCookieJarSupport(axios);

export function logUserIn(credentials) {
    return (dispatch) => {
        return axios.post(`${MAIN_URL}/login`, credentials,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                if (response.status === 200) {
                    dispatch(loginSuccess(response.data));
                    history.push("/devices");
                }
                if(response.status === 401) {
                    dispatch(loginFailed())
                }
            }).catch((error) => {
                dispatch(loginFailed())
            })
    }
}
export function getActiveDevices() {
    let mockResponse = mockupData.mockData();
    return (dispatch) => {
        //orinigal api call not working correct as the headers in the api options call seems incorrect.Hence a mock up api response 
        console.log(mockResponse)
        dispatch(deviceFetchSuccess(mockResponse));        
        // return axios.get(`${MAIN_URL}/devices`)
        //     .then((response) => {
        //         console.log(response.json)
        //         dispatch(deviceFetchSuccess(response.data));
        //     })
        //     .catch((error) => {
        //         dispatch(deviceFetchFailed());
        //     })
    }
}
export function notify({ token }) {
    const authString = `Bearer ${token}`;
    let data = {
        name: 'Remya Philipose',
        email: 'remyap19@gmail.com',
        repoUrl: '',
        message: 'Test completed'
    }

    return (dispatch) => {
        return axios.post(`${MAIN_URL}/login`, data,
            { headers: { Authorization: authString } }).then((response) => {
                if (response.status === 200) {
                    console.log(response)
                    dispatch(notifySuccess(response.data));
                }
            }).catch((error) => {
                console.log(error)
                dispatch(notifyFailed())
            })
    }
}
export function logOut(){
    return (dispatch) => {
        dispatch(onLogOut())
        history.push("/");

    }

}
export function onLogOut() {
    return { type: "LOG_OUT"};
}
export function notifySuccess(data) {
    return { type: "NOTIFY_SUCCESS", payload: data };
}
export function notifyFailed() {
    return { type: "NOTIFY_FAILED" };
}
export function deviceFetchSuccess(data) {
    return { type: "DEVICE_FETCH_SUCCESS", payload: data };
}
export function deviceFetchFailed() {
    return { type: "DEVICE_FETCH_FAILED" };
}
export function loginSuccess(token) {
    return { type: "LOGIN_SUCCESS", payload: token };
}
export function loginFailed() {
    return { type: "LOGIN_FAILED" };
}
