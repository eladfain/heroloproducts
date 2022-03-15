import {currencyTypes} from '../context/utilConsts';
export const getConvertedPrice=(price,context)=>{
    if(context.currency!=="USD"){
        return `${price*context.currencyRate}${currencyTypes[context.currency]}`
    }
    return `${price}$`;
}