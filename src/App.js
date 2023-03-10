import { useState } from 'react';
import datafile from './data/data.json'
import List from './List';

function App() {

  const [data, setData] = useState(datafile)
  
  console.log(data)
  return (
    <div>
      <header></header>

      <div className='listDiv'>       
        <List data={data} setData={setData}/>
      </div>
    </div>
  );
}

export default App;