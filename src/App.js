import { useState } from 'react';
import datafile from './data/data.json'
import List from './List';

function App() {

  const [data, setData] = useState(datafile)
  
  return (
    <div>
      <header></header>

      <div className='listDiv'>       
        <List data={data} setData={setData} datafile={datafile}/>
      </div>
    </div>
  );
}

export default App;