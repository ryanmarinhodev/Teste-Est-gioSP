import './App.css';
import FaturamentoDiario from './components/FatuamentoDiario';
import FaturamentoMensal from './components/FaturamentoMensal';
import Fibonacci from './components/Fibonacci';
import InverterString from './components/InverterString';
import Soma from './components/Soma';

function App() {
  return (
    <div className="home">
      <FaturamentoDiario />
      <FaturamentoMensal />
      <Fibonacci />
      <InverterString />
      <Soma />
      <div className="index.css"></div>
    </div>
  );
}

export default App;
