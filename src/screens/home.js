import React from 'react';
import CardList from './data'
import Form from './form'

const testData = [
  {
      name: "gaby"
  },
  {
      name: "Guamán"
  }
]

class Home extends React.Component {
  // function Button(pros){
  //   const handeClick = () => pros.handeClick(pros.increment)
  //   return (
  //     <button onClick={handeClick}>
  //       {pros.increment}
  //     </button>
  //   )
  // }

  // function Display(pros){
  //   return(<div>{pros.counter}</div>)
  //}

  // function App(){
  //   const [counter, setCounter]= useState(0)
  //   const  handeClick = (incrementValue) => setCounter(counter+incrementValue)
  //    return(
  //      <div>
  //        <Button handeClick={handeClick} increment={1}/>
  //        <Button handeClick={handeClick} increment={5}/>
  //        <Button handeClick={handeClick} increment={10}/>
  //        <Display counter={counter}/>
  //      </div>
  //    )
  // }
  
 constructor(props) {
   super(props);
   this.state = {
     profile: testData,
   };
 }
render() {
  return (
    <div id="colorlib-page">
      <Form/>
      <CardList profile = {this.state.profile} />
    </div>
  )
}
  
}

export default Home
