
import { useState } from 'react';

function ShowHide() {
    const [show, setShow] = useState(true);

    return (
        <>
            <h2>Show and Hide Example</h2>

            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>

            {show && <p>Hello! Welcome to React.</p>}
        </>
    );
}

export default ShowHide;
