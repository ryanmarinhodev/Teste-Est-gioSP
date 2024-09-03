import React, { useState } from 'react';

const InverterString = () => {
    const [texto, setTexto] = useState('');
    const [invertido, setInvertido] = useState('');

    const inverterString = (str) => {
        let novaString = '';
        for (let i = str.length - 1; i >= 0; i--) {
            novaString += str[i];
        }
        return novaString;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInvertido(inverterString(texto));
    };

    return (
        <div>
            <h1 style={{color: '#007fff'}}>Inverter String</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" style={{color: 'white'}}
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)} 
                />
                <button type="submit" style={{color: 'white'}}>Inverter</button>
            </form>
            {invertido && <p style={{color: 'white'}}>Texto invertido: {invertido}</p>}
        </div>
    );
};

export default InverterString;