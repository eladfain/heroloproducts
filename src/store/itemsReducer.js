
const initialState={
    activeDeliveryItems:[],
    archivedItems:[],
    currentIndex:0,
}

const itemsReducer=(state=initialState,action)=>{
    if(action.type==="PURCHES"){
        const newActiveDeliveryItems=[...state.activeDeliveryItems,{...action.payload,id:state.currentIndex}];
        return{
            ...state,activeDeliveryItems:newActiveDeliveryItems,currentIndex:state.currentIndex+1
        }
    }
    else if(action.type==="MOVE_TO_ARCHIVE"){
        
        const newActiveDeliveryItem=[...state.activeDeliveryItems];
        const newarchiveItem=newActiveDeliveryItem.splice(action.payload, 1);
        
        return{
            ...state,archivedItems:[...state.archivedItems,...newarchiveItem],activeDeliveryItems:newActiveDeliveryItem
        }
    }else if(action.type==="MOVE_TO_DELIVERY"){
        const newArchivedItems=[...state.archivedItems];
        const newActiveItem=newArchivedItems.splice(action.payload, 1);
        return{
            ...state,activeDeliveryItems:[...state.activeDeliveryItems,...newActiveItem],archivedItems:newArchivedItems
        }
    }
    return state;
}

export default itemsReducer;