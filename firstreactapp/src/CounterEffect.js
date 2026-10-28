import { useState, useEffect } from 'react';

function CounterEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div>
            <h1>Counter(useEffect): {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}

export default CounterEffect;
