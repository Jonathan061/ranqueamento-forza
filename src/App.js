import './App.css';
import Logo from './components/Logo'
import Tabela from './components/Tabela'

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Logo />
          <h4>Ranqueamento StereOnline</h4>
        </header>
        <Tabela />
    </div>
  );
}

export default App;
