import React from 'react';

const FaturamentoMensal = () => {
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53,
    };

    const total = Object.values(faturamento).reduce((acc, value) => acc + value, 0);

    return (
        <div>
            <h1 style={{color: '#007fff'}}>Faturamento Mensal por Estado com base no Json criado</h1>
            {Object.keys(faturamento).map(estado => (
                <p style={{color: '#fff'}} key={estado}>
                    {estado}: {((faturamento[estado] / total) * 100).toFixed(2)}%
                </p>
            ))}
        </div>
    );
};

export default FaturamentoMensal;