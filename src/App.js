import './App.css';
import {useState} from 'react'
import Tabela from './componentes/Tabelaimc'
import Peso from './componentes/Peso';
import Altura from './componentes/Altura';
import Calcular from './componentes/Calcular';
import Resultado from './componentes/Resultado';

function App() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  return (
    <main>
      <Peso peso={peso} setPeso={setPeso}/>
      <Altura altura={altura} setAltura={setAltura} />
      <Calcular peso={peso} altura={altura} resposta={setResultado} />
      <Resultado result={resultado} />
      <Tabela />
    </main>
  );
}

export default App;

/*
const tabeelaImc = () => {
  return (
    <table>
      <thead>

        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td> Abaixo do peso</td>
          <td> Abaixo de 18,5</td>
        </tr>
        <tr>
          <td> Peso normal</td>
          <td> Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td> Sobrepeso</td>
          <td> Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td> Obesidade de grau 1</td>
          <td> Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td> Obesidade de grau 2</td>
          <td> Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td> Obesidade de grau 3 ou Mórbida</td>
          <td> Maior que 40</td>
        </tr>

      </tbody>

    </table>
  )
}

*/