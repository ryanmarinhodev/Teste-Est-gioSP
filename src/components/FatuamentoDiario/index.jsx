import React, { useState, useEffect } from 'react';
import faturamentoData from '../faturamentos/faturamentos.json';

const FaturamentoDiario = () => {
    const [menor, setMenor] = useState(null);
    const [maior, setMaior] = useState(null);
    const [diasAcimaMedia, setDiasAcimaMedia] = useState(0);

    useEffect(() => {
        const valores = faturamentoData.filter(valor => valor > 0);
        const menorValor = Math.min(...valores);
        const maiorValor = Math.max(...valores);
        const mediaMensal = valores.reduce((a, b) => a + b, 0) / valores.length;
        const diasAcima = valores.filter(valor => valor > mediaMensal).length;

        setMenor(menorValor);
        setMaior(maiorValor);
        setDiasAcimaMedia(diasAcima);
    }, []);

    return (
        <div>
            <h1 style={{color: '#007fff'}}>Faturamento Diário com base no Json criado</h1>
            <p style={{color: '#fff'}}>Menor valor de faturamento: {menor}</p>
            <p style={{color: '#fff'}}>Maior valor de faturamento: {maior}</p>
            <p style={{color: '#fff'}}>Dias com faturamento acima da média: {diasAcimaMedia}</p>
        </div>
    );
};

export default FaturamentoDiario;