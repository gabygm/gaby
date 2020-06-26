import React, {useState} from 'react';

export default () => {
  function Button(pros){
    return (
      <button onClick={pros.handeClick}>
       9
      </button>
    )
  }

  function Display(pros){
    return(<div>{pros.counter}</div>)
  }

  function App(){
    const [counter, setCounter]= useState(5)
    const  handeClick = () => setCounter(counter+1)
     return(
       <div>
         <Button handeClick={handeClick}/>
         <Display counter={counter}/>
       </div>
     )
  }

  return (
    <div id="colorlib-page">
      <App />
    </div>
  )
}

