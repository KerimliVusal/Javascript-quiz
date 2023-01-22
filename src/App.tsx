import React, { useEffect, useState } from 'react';
import Load from './components/load';
import Navbar from './components/navbar';
import Quiz from './components/quiz';

function App() {
  const [loa,setLoa]=useState<boolean>(true)
useEffect(()=>{
setTimeout(()=>{
setLoa(false)
},6000)
},[])
  return (
    <div className="App">
      {loa? <Load/>
      :
     <div>
      <Navbar/>
     <Quiz/>
     </div>
  }
    </div>
  );
}

export default App;
