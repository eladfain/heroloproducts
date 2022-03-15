import { useSelector } from "react-redux";
import CustomTable from "./CustomTable";
import classes from '../css/PurchesByStore.module.css';
import {getConvertedPrice} from '../utils/utilFunc';
import { useContext } from 'react';
import UtilContext from "../context/util-context";
const PurchesByStore=()=>{
    const ctx=useContext(UtilContext);
    const activeProducts=useSelector(state=>state.activeDeliveryItems);
    const archiveProducts=useSelector(state=>state.archivedItems);
    const allProducts=activeProducts.concat(archiveProducts);
    const pricesByStoreObj=allProducts.reduce((acc,product)=>{
        
        if(acc[product.store]){
            acc[product.store].price=(+acc[product.store].price)+(+product.price);
            acc[product.store].quantity=acc[product.store].quantity+1;
        }else{
            acc[product.store]={price:(+product.price),quantity:1}
        }
        return acc;
    },{})
    const pricesByStoreArr=Object.keys(pricesByStoreObj).map(key=>{return{...pricesByStoreObj[key],price:getConvertedPrice(pricesByStoreObj[key].price,ctx),'store':key}})
    const totalPrice=Object.keys(pricesByStoreObj).reduce((a,c)=>a+pricesByStoreObj[c].price,0);
    return (
        <>
            <CustomTable data={pricesByStoreArr} fields={['store','quantity','price']}/>
            <div className={classes.total}>
                <p>Total Price : {getConvertedPrice(totalPrice,ctx)}</p>
            </div>
        </>
    )
}

export default PurchesByStore;