import HeaderNav from "./components/HeaderNav";

import PurchesByItem from './components/PurchesByItem';
import PurchesByStore from './components/PurchesByStore';
import {Route,Routes} from 'react-router-dom';
import UtilContextProvider from './context/UtilContextProvider';
function App() {
  return (
    <UtilContextProvider>
      <div className="App">
        <HeaderNav/>
        <Routes>
          <Route path="/" element={<PurchesByItem/>}/> 
          
          <Route path='/bystore' element={<PurchesByStore/>}/>
            
          
        </Routes>
      
      
      </div>
    </UtilContextProvider>
    
  );
}

export default App;
