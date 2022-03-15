import style from '../css/Modal.module.css';
import  ReactDOM  from 'react-dom';
const Backdrop=props=>{
    return <div className={style.backdrop} onClick={props.onClick}></div>
}

const Control=props=>{
    return <div className={style.modal}>{props.children}</div>
}


const Modal=props=>{
    
    const ModalElament=document.getElementById('overlays')
    return(
        <>
        {
            ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,ModalElament)
 
        }
       {   ReactDOM.createPortal(<Control>{props.children}</Control>,ModalElament)}
        </>
    )
    
}

export default Modal;

