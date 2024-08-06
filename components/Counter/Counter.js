import {useState} from 'react'
function Counter(){
    /*var countValue=0;
    const increaseCount=()=>{
      countValue+=1;
      console.log(countValue);
    }*/
 let [state,setState]=useState(0);

 const increaseCount=()=>{
   setState(state+1);
 }
 const decreaseCount=()=>{
    setState(state-1);
  }
  const clearCount=()=>{
    setState(0);
  }
    return (
        <div className="mt-5 mb-3 text-center">
            <h2 className="mb-3">Count Value : {state}</h2>
            <button onClick={increaseCount} className="btn btn-outline-success mx-3">incCount</button>
            <button onClick={decreaseCount} className="btn btn-outline-danger mx-3">decCount</button>
            <button onClick={clearCount}>clearCount</button>
        </div>
    );
}

export default Counter;