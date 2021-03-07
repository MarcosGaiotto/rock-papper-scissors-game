import Element from '../components/Element';
import "../styles/global.css";

function App() {
  return (
    <div className="App">
      <div className="painel">
        <Element type="paper"/>
        <Element type="rock"/>
        <Element type="scissors"/>
      </div>
    </div>
  );
}

export default App;
