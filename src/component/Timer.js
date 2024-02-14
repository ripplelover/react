import React, {useEffect} from 'react';

const Timer = (props) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 실행');
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log('타이머 제거');
        }
    }, []);

    return (
        <div>
            <h1>타이머</h1>
        </div>
    )
}

export default Timer;