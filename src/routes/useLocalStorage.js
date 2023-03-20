import React from 'react';

//este es otro react hook 
function useLocalStorage(itemName, initialValue) {
  const[state, dispatch]= React.useReducer(reducer, initialState ({initialValue}));
  const{
    sincronizedItem,
    error,
    loading,
    item,
  }= state;
  const onErrror= (error)=> dispatch({type: actionTypes.error, payload: error});
  const onSucces = (item)=> dispatch({type: actionTypes.succes, payload: item});
  const onSave = (item)=> dispatch({type: actionTypes.save, payload:item});
  const onSincronize = ()=> dispatch({type: actionTypes.sincronize});
  

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

     onSucces(parsedItem)
      } catch(error) {
         onErrror(error);
      }
    }, 1000);
  }, [sincronizedItem]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
     onSave(newItem)
    } catch(error) {
      onErrror(error)
    
    }
  };

 /* const sincronizeItem = () => {
  onSincronize();
  };*/

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem:onSincronize,
  };
}

const initialState = ({ initialValue}) =>({
  sincronizeItem:true,
  error:false,
  item:initialValue,
});
const actionTypes={
  error:'ERROR',
  succes:'SUCCES',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'

}

const reducerObject = (state, payload) => ({
  [actionTypes.error]:{
    ...state,
    error: true,
  }, 
  
  [actionTypes.succes]:{
    ...state,
    error: false,
    loading:false,
    sincronizedItem:true,
    item:payload,
  }, 
  [actionTypes.save]:{
    ...state,
    item:payload,
  }, 
  [actionTypes.sincronize]:{
    ...state,
     sincronizedItem:false,
     loading:true,
  
  }, 

});
const reducer =(state, action)=> {
 return reducerObject(state, action.payload)[action.type]  || state;
}

export { useLocalStorage };