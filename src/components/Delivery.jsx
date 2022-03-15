import { useSelector,useDispatch } from "react-redux"
import { useState } from "react";
import CustomTable from "./CustomTable"
import AddItemForm from './AddItemForm';
import classes from '../css/Delivery.module.css';
import { useContext } from 'react';
import UtilContext from "../context/util-context";
import {getConvertedPrice} from '../utils/utilFunc';
const Delivery=()=>{
    const ctx=useContext(UtilContext);
    const dispatch=useDispatch();
    const [isFormOpen,setIsFormOpen]=useState(false);
    const moveToArchive=(id)=>{
        dispatch({type:'MOVE_TO_ARCHIVE',payload:id})
    }
    const deliveryItems=useSelector(state=>state.activeDeliveryItems).map((item,index)=>{
        return{...item,price:getConvertedPrice((+item.price),ctx),'action':<button onClick={moveToArchive.bind(null,index)}>Archive</button>}
    }).sort((itemA,itemB)=>{
        const dateA=new Date(itemA.date);
        const dateB=new Date(itemB.date);
        if(dateA>dateB){
            return 1;
        }
        else if(dateA<dateB){
            return -1;
        }else{
            return 0;
        }
    });

    const openDialogHandler=()=>{
        setIsFormOpen(true);
    }
    const closeDialogHandler=()=>{
        setIsFormOpen(false);
    }
    return(
        <div className={classes.delivery}>
            <button className={classes.addbutton} onClick={openDialogHandler}>+<span className={classes.underline}>add item</span></button>
            <CustomTable fields={['name','store','price','date','action']} data={deliveryItems}/>
            {isFormOpen && <AddItemForm close={closeDialogHandler}/>}
        </div>
    )
}

export default Delivery