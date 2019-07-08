const INITIAL_STATE ={
    activeDevices:undefined,
    deviceFetchFailed: false,
  };
  
  const deviceReducer = (state=INITIAL_STATE,action)=>{
    if (action.type=== "DEVICE_FETCH_SUCCESS"){
      return {...state,activeDevices:action.payload,deviceFetchFailed:false};
    }
    else if (action.type=== "DEVICE_FETCH_FAILED"){
      return {...state,deviceFetchFailed:true, activeDevices:undefined};
    }
    return {...state};
  }
  
  export default deviceReducer;
  