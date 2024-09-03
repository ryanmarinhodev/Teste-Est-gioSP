import React, { useState } from 'react';

const Soma = () => {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(null);

    const somarNumeros = () => {
        setResultado(num1 + num2);
    };

    return (
        <div>
            <h1 style={{color: '#007fff'}}>Calcular SOMA</h1>
            <p style={{color : 'white'}}>O valor da variável SOMA é: {SOMA}</p>

            <h2 style={{color: '#007fff'}}>Somar Dois Números</h2>
            <input 
                type="number" style={{color: 'white'}}
                value={num1} 
                onChange={(e) => setNum1(Number(e.target.value))} 
                placeholder="Digite o primeiro número" 
            />
            <input 
                type="number" style={{color: 'white'}}
                value={num2} 
                onChange={(e) => setNum2(Number(e.target.value))} 
                placeholder="Digite o segundo número" 
            />
            <button onClick={somarNumeros} style={{color: 'white'}}>Somar</button>

            {resultado !== null && (
                <p style={{color: 'white'}}>O resultado da soma é: {resultado}</p>
            )}
        </div>
    );
};

export default Soma;
