import classes from '../css/HeaderNav.module.css'
import {NavLink} from 'react-router-dom';
import {currencyTypes} from '../context/utilConsts';
import { useContext } from 'react';
import UtilContext from "../context/util-context";
const HeaderNav=()=>{
    const ctx=useContext(UtilContext);
    const currencyOptions=Object.keys(currencyTypes).map(type=><option key={type} value={type}>{currencyTypes[type]}</option>)
    const onCurrencyChangeHandler=(e)=>{
        ctx.changeCurrency(e.target.value);
    }
   return(
        <div className={classes.header}>
            <NavLink to="/" className={({isActive})=>`${isActive ? classes.activelink:classes.inactivelink} ${classes.link}`}>Purchase by item</NavLink>
            <NavLink to="/bystore" className={({isActive})=>`${isActive ? classes.activelink:classes.inactivelink} ${classes.link}`}>Purchase by stores</NavLink>
            <span className={classes.currency}> <span>Currency</span><select onChange={onCurrencyChangeHandler} value={ctx.currency}>{currencyOptions}</select></span>
        </div>
    )
}

export default HeaderNav;