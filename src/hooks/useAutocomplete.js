import {useState} from 'react';
const useAutocomplete=(url,dataHandler)=>{
    const [hasError,setHasError]=useState(null);
    const getResults=async (term)=>{
        if(term.length>0){
            setHasError(null);
            try{
                const res=await fetch(url);
                const data=await res.json();
                dataHandler(data,term);
            }catch(e){
                setHasError(e);
            }
        }
        else{
            dataHandler([],term)
        }
       
       
    }
    return{
        hasError,
        getResults
    }
}

export default useAutocomplete;