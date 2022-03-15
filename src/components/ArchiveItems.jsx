import { useSelector,useDispatch } from "react-redux"
import CustomTable from "./CustomTable"
import {getConvertedPrice} from '../utils/utilFunc';
import { useContext } from 'react';
import UtilContext from "../context/util-context";
const ArchiveItems=()=>{
    const ctx=useContext(UtilContext);
    const dispatch=useDispatch();
    const moveToActive=id=>{
        dispatch({type:'MOVE_TO_DELIVERY',payload:id})
    }
    const archiveItems=useSelector(state=>state.archivedItems).map((item,index)=>{
        return{...item,price:getConvertedPrice((+item.price),ctx),'action':<button onClick={moveToActive.bind(null,index)}>Reactive</button>}
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
    return(
        <>
        <CustomTable fields={['name','store','price','date','action']} data={archiveItems}/>
        </>
    )
}

export default ArchiveItems;