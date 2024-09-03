import React, { useState } from 'react';

const Fibonacci = () => {
    const [numero, setNumero] = useState(0);
    const [pertence, setPertence] = useState(null);

    const calculaFibonacci = (num) => {
        let a = 0, b = 1;
        if (num === 0 || num === 1) return true;
        let c = a + b;
        while (c <= num) {
            if (c === num) return true;
            a = b;
            b = c;
            c = a + b;
        }
        return false;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPertence(calculaFibonacci(Number(numero)));
    };

    return (
        <div>
            <h1 style={{color: '#007fff'}}>Sequência de Fibonacci</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number" style={{color: 'white'}}
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />
                <button type="submit" style={{color: 'white'}}>Verificar</button>
            </form>
            {pertence !== null && (
                <p style={{color: '#fff'}}>O número {numero} {pertence ? 'pertence' : 'não pertence'} à sequência de Fibonacci.</p>
            )}
        </div>
    );
};

export default Fibonacci;