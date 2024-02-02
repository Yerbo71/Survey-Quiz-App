import {useEffect, useState, useRef} from 'react';
import "../QuizTimer/QuizTimer.scss"
function QuizTimer ({duration, onTimeUp})  {
    const [counter, setCounter] = useState(duration);
    const intervalRef = useRef();
    
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter((prev) => prev - 1);
        },1000); 
        return () => clearInterval(intervalRef.current);
    },[duration]);

    useEffect(() => {
        if (counter === 0) {
          clearInterval(intervalRef.current);
          onTimeUp();
        }
      }, [counter, onTimeUp]);
    
      return <div className='QuizTimerContainer'>{"Total Time: " + counter}</div>;
    }
export default QuizTimer