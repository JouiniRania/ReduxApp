import React,{useState} from 'react';
import { connect } from "react-redux";
import {increment,decrement} from '../Stores/Actions'

const Counter=(props)=> {
     console.log(props)
     const [count]=useState(1)
        return (
          <>
            <div>
              <h3>COUNTER</h3>
              <div>
                <button onClick={() => props.decrement(count)}>-</button>
                <input value={props.incdec}/>
                <button onClick={() => props.increment(count)}>+</button>
              </div>
            </div>      

            
            </>

        );
}
const mapStateToProps = state => {
    return {
      incdec: state.counter
    };
   };

   const mapDispatchToProps=(dispatch)=>{
       return{
           increment: ()=>{dispatch(increment())},
           decrement: ()=>{dispatch(decrement())}
       }
   }
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

  