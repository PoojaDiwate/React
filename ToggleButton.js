import React, { useState } from 'react';

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <>
            <h1>Toogle button</h1>
            <button onClick={handleClick}>
            {isOn ? 'ON' : 'OFF'}
            </button>
        </>
    );
}

export default ToggleButton;

