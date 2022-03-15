import { useState } from "react";
import {useDispatch} from 'react-redux';
import Modal from "./Modal";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useEffect } from "react";
import classes from '../css/AddItemForm.module.css';

const AddItemForm=(props)=>{
    const dispatch=useDispatch();
    
    const [name,setName]=useState('');
    const [store,setStore] =useState('');
    const [price,setPrice]=useState('');
    const [date,setDate]=useState('');
    const [hasError,setHasError] =useState(null);
    const [products,setProducts]=useState([])
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        dispatch({type:"PURCHES",payload:{name,store,price,date}})
        closeDialog();
    }
    const closeDialog=()=>{
        props.close();
    }
    const onNameChangeHandler=(event,value)=>{
        setName(value);
    }
    const onAutoCompleteChangeHandler=(event,product)=>{
        setName(product.title);
        setPrice(product.price);
    }
    const onPriceChangeHandler=e=>{
        setPrice(e.target.value);
    }
    const onStoreChangeHandler=e=>{
        setStore(e.target.value);
    }
    const onDateChangeHandler=e=>{
        setDate(e.target.value);
    }
    useEffect(()=>{
       const timeOutHandle= setTimeout(() => {
           setHasError(null)
            fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(products=>setProducts(products))
            .catch(err=>setHasError(err))
        }, 300);
        return ()=>{
            clearTimeout(timeOutHandle);
        }
    },[]);
    
    return(
        <Modal onClick={closeDialog}>
            <h1>Add Item</h1>
            <form onSubmit={formSubmitHandler} className={classes.form}>
                <Autocomplete options={products}  
                renderInput={params => (
                    <TextField {...params} label="Choose Product" variant="filled" />
                )}
                getOptionLabel={option => option.title}
                freeSolo={true}
                onChange={onAutoCompleteChangeHandler}
                inputValue={name}
                onInputChange={onNameChangeHandler}
                />
                
                <TextField onChange={onStoreChangeHandler} label='From Store' id='store' value={store} variant="filled"/>
                <TextField onChange={onPriceChangeHandler} type="number" label='price' id='price' value={price} variant="filled"/>
                <TextField onChange={onDateChangeHandler} className={classes.date} id='date' type='date' value={date} variant="filled"/> 
                <div className={classes.actions}>
                    <button className={classes.addbutton} type='submit'>Add</button>
                    <button className={classes.cancelbutton}  onClick={closeDialog}>Cancel</button>
                    
                </div>
               
            </form>
            {hasError && <h4>somethig went wrong... try again later</h4>}
        </Modal>
    )
}

export default AddItemForm;