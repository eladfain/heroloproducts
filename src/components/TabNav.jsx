import { useState } from "react";
import classes from '../css/NavTab.module.css';
const NavTab=props=>{
    const [activeTab,setActiveTab]=useState(props.tabNames[0]);
    const navigationClickHandler=id=>{
        
        setActiveTab(id);
    }
    const tabNavigation=props.tabNames.map(name=><span key={name} className={`${classes.tab} ${name===activeTab?classes.active:null}`} onClick={navigationClickHandler.bind(null,name)}>{name}</span>)
    const VisibleComponent=props.tabs[activeTab];
    return(
        <>
            <div className={classes.navtab}>
                {tabNavigation}
            </div>
            <div>
                <VisibleComponent/>
            </div>
        </>
        
    )    
}

export default NavTab;