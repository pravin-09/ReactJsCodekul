import { useReducer } from "react"

const initialState={count:0}

const reducer=(state,action)=>{
    console.log(state,action)
    switch(action.type){

        case 'increment':
            return {count:state.count+1}

        case 'decrement':
            return {count:state.count-1}
            
        default:
            return new Error()    
    }
}

function UseReducerDemo(){

    const [state,dispatch]=useReducer(reducer,initialState)

    return(
        <div>
            <h1>Use Reducer Hook!!!</h1>
            <p>Count : {state.count}</p>
            <button type="button" onClick={()=>dispatch({'type':'increment'})}>Increment</button>
            <button type="button" onClick={()=>dispatch({'type':'decrement'})}>decrement</button>

        </div>
    )
}

export default UseReducerDemo