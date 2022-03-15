import {useReducer,useEffect,useState} from 'react';
import UtilContext from './util-context';
import {accsessKey} from './utilConsts';
const initialState={
    currency:'USD',
    currencyCheckInterval:10,
    currencyRate:3.5
}


const utilRducer=(state,action)=>{
    if(action.type==="CHANGE_CURRENCY"){
        const newState={...state}
        newState.currency=action.payload;
        return newState;
    }
    else if(action.type==="CHANGE_INTERVAL"){
        const newState={...state}
        newState.currencyCheckInterval=action.payload;
        return newState;
    }
    else if(action.type==="CHANGE_RATE"){
        const newState={...state}
        newState.currencyRate=action.payload;
        return newState;
    }
    return state;
}


const UtilContextProvider=props=>{
    const [utilState,dispatchUtil]=useReducer(utilRducer,initialState);
    const {currency,currencyCheckInterval}=utilState
    const [hasError,setHasError] =useState(false);
    const onChangeCurrencyHandler=currency=>{
        dispatchUtil({type:"CHANGE_CURRENCY",payload:currency})
    }
    const onChangeIntervalHandler=interval=>{
        dispatchUtil({type:"CHANGE_INTERVAL",payload:interval})
    }
    const context={
        currency:utilState.currency,
        interval:utilState.currencyCheckInterval,
        currencyRate:utilState.currencyRate,
        changeCurrency:onChangeCurrencyHandler,
        changeInterval:onChangeIntervalHandler,
        hasError:hasError
    }
    useEffect(()=>{
        const intervalHandler=setInterval(() => {
            if(currency!=="USD"){
                setHasError(false);
                fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${accsessKey}&symbols=USD,ILS`)
                .then(res=>res.json())
                .then(data=>{
                    if(data.success){
                        const rates=data.rates;
                        const rate=rates.ILS/rates.USD;
                        dispatchUtil({type:"CHANGE_RATE",payload:rate})
                    }
                }).catch(err=>setHasError(err))
            }
        }, currencyCheckInterval*1000);
        return()=>{
            clearInterval(intervalHandler);
        }
    },[currencyCheckInterval,currency])
    return(
        <UtilContext.Provider value={context}>
            {props.children}
        </UtilContext.Provider>
    )
}


export default UtilContextProvider;