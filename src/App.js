import './App.css';
import Header from './Header.jsx'
import Body from './Body.jsx'
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [header,setheader]=useState('users')
  const [val,setval]=useState([])
  const[error,seterror]=useState(false)
  const[load,setload]=useState(true)
  console.log(header);
  console.log(val);
  
  useEffect(()=>{
    async function dataget(){
      try{
        const response=await fetch(`https://jsonplaceholder.typicode.com/${header}`)
        if(!response.ok) throw Error('data fetch error')
        const data = await response.json()
        setval(data)
        seterror(null)
      }
      catch(err){
        seterror(err.message)
      }
      finally{
        setload(false)
      }
    }
    setTimeout(()=>{
      (async()=>await dataget())()
    },1000)
  },[header])
  
  return (
    <div className="App">
      <Header header={header} error={error} setheader={setheader}load={setload}/>
      <main style={{justifyContent:'start'}}>
        {load && <p>loading..</p>}
        {!error&& !load && <Body val={val}/>}
        {error&& !load && <p>{error}</p>}
      </main>
    </div>
  );
}

export default App;
