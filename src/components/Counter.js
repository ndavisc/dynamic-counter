import React, { useEffect, useState } from 'react';

function Counter() {
    const [count,setCount] = useState(0)
    //in order to have a number return by color based on the set parameters, we need to create a const for the if statement. cannot do the if statement in the return
    const [showMessage, setShowMessage] = useState(false); //??? do we always set useState as false when using useEffect??
    //when 'count' changes, this side effect runs
    useEffect(() => {
        //Only show message if count is not zero
        if (count !== 0) {
            setShowMessage(true);
            //set a time to hide the message afrer 3 secs, need to create a const to do that. you can also set a const as a func using ()=>{}
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 3000);

            //cleanup: if effect runs again before time finishes, it will clear the previous time
            return () => clearTimeout(timer);
        }
    }, [count]);  //effect dependency: 'count'
    const determineColor = () => {
        if (count < 0) {
            return "red";
        } else if (count > 0) {
            return "green";
        } else {
            return "gray";
        }
    };

    return(
        <div className='counter-container'>
            <h1 style={{ color: determineColor() }}>Counter: {count}</h1>
            {/* Once we set up the const for the if statement, we can put it in as a style in the h1 tag since that's where we put the count. SO basically put it where it applies */}
            {/* we put {} around count because it's a variable and that's how we can call it */}
            {/* input the variable to show the message */}
            {showMessage && <p>The counter has changed!</p>}
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            {/* // we do onClick{() =>} because we did not make a function to put in {}. if we did, we could just put the function in {} without using () => */}
            
        </div>
    );
}

export default Counter;