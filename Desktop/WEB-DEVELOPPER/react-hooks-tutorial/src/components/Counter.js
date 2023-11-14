// Import the useState hook from the 'react' library
import { useState } from "react"

// Define the Counter component
export const Counter = () => {

    // The setValue function is a function provided by the useState hook that allows you to update the state.
    // Use the useState hook to create a state variable.
    // Here: the variable name is 'value' with an initial value of 0.

    const [value, setValue] = useState(0);

    //'value' = the current state value (variable)
    //'setValue' = the function that you can use to update the state (function)

    //*! the ''variable should start with a lowercase letter 


  
     // Render the component
    return <div>
        {/* Display the current counter value */}
        <p> the current counter amount is <b>{value}</b> </p>
        {/* The value is dynamically inserted using curly braces {value},
         which will be replaced with the actual value of the 'value' state variable. */}

        <button onClick={() => setValue(value - 1)}>-</button>
        {/*link an action event here - event activated when the user click on the button:
        When you call the setValue function :  {() => setValue(newValue)}, 
        it will update the value state to the new value. 
        
        1.<button>-</button>
        2.<button onClick={() =>                   }>-</button>
        3.<button onClick={() => setValue(newValue)}>-</button>

        the new value here is => value - 1
        */}

        <button onClick={() => setValue(value + 1)}>+</button>
        {/* the new value here is => value + 1 */}
    </div>
}