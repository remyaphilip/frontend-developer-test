const INITIAL_STATE ={
    notifyMessage:undefined,
  };
  
  const notifyReducer = (state=INITIAL_STATE,action)=>{
    if (action.type=== "NOTIFY_SUCCESS"){
      return {...state,notifyMessage:action.payload};
    }
    else if (action.type=== "NOTIFY_FAILED"){
      return {...state,notifyMessage:undefined};
    }
 
    return {...state};
  }
  
  export default notifyReducer;
  