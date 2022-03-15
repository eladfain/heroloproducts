import NavTab from "./TabNav";
import Delivery from "./Delivery";
import ArchiveItems from "./ArchiveItems";
const PurchesByItem=()=>{
    const tabs={
        'Delivery':Delivery,
        'Archived Items':ArchiveItems
    }
    return(
  
          <NavTab tabNames={['Delivery','Archived Items']} tabs={tabs}/>
    )
}

export default PurchesByItem;