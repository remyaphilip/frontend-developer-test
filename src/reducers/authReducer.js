const INITIAL_STATE ={
    token:undefined,
    userLoginFailed:false,
    loggingIn:false,
    loggedOut:false,
  };
  
  const authReducer = (state=INITIAL_STATE,action)=>{
    if (action.type=== "LOGIN_SUCCESS"){
      return {...state,token:action.payload, loggingIn:false,userLoginFailed:false};
    }
    else if (action.type=== "LOGIN_FAILED"){
      return {...state,userLoginFailed:true,loggingIn:false,token:undefined};
    }
    else if (action.type=== "LOG_OUT"){
      window.localStorage.clear();
      return {...INITIAL_STATE,loggedOut:true};
    }
    else if (action.type === "START_LOGGING_IN"){
      return {...state, loggingIn:true};
    }
  
    return {...state};
  }
  
  export default authReducer;
  