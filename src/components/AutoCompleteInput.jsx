import { useEffect } from 'react';
import {useState} from 'react';
import useAutocomplete from '../hooks/useAutocomplete';
const AutoCompleteInput=props=>{
    const value=props.value;
    const [suggestions,setSuggestions]=useState([]);
    const [isFocused,setIsFocused]=useState(false);
    const focusInput=()=>{
        setIsFocused(true);
    }
    const blurInput=()=>{
        setIsFocused(false);
    }
    const hanldeSuggestions=(data,term)=>{
        
        const filterdData=data.filter(entry=>entry.title.includes(term))
        setSuggestions(filterdData)
    }
    const {hasError,getResults}=useAutocomplete('https://fakestoreapi.com/products',hanldeSuggestions);
    const onChangeHandler=e=>{
        props.setValue(e.target.value);
    }
    useEffect(()=>{
        getResults(value)
    },[value]);
    const suggestionsHtml=suggestions.map(suggestion=><li>{suggestion.title}</li>)
    return(
        <div>
            <label htmlFor={props.id}>{props.title}</label>
            <input type="text" id={props.id} value={value} onChange={onChangeHandler} onFocus={focusInput} onBlur={blurInput}/>
            {suggestionsHtml.length &&isFocused && <ul>{suggestionsHtml}</ul>}
        </div>
    )
}

export default AutoCompleteInput;