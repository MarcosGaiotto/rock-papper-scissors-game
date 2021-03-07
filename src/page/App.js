import { useEffect, useState } from 'react';
import Element from '../components/Element';
import "../styles/global.css";

function App() {

  const [hasElementSelected, setHasElementSelected] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [hasComputerSelected, setHasComputerSelected] = useState(false);
  const [selectedElementByComputer, setSelectedElementByComputer] = useState("not-selected");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.element');
    elements.forEach((element) => {
      element.addEventListener('click', () => {
        setSelectedElement(element.id);
        setHasElementSelected(true);
      })
    })
  }, [])

  useEffect  (() => {
    if(!hasComputerSelected) {
      setHasComputerSelected(true);
      setTimeout( async () =>{
          const elementOptions = ["rock", "paper", "scissors"]
          const elementSorted = elementOptions[Math.round(Math.random() * (elementOptions.length - 1))]
          await setSelectedElementByComputer(elementSorted);
      }, 5000)
    
    }
  }, [setSelectedElement]);

  useEffect(() => {
    if(selectedElement === selectedElementByComputer){
      setResult("DRAW");
    } else if(selectedElement === "paper") {
      if (selectedElementByComputer === "rock") {
        setResult("YOU WIN");
      } else {
        setResult("YOU LOSE");
      }
    } else if(selectedElement === "rock") {
      if (selectedElementByComputer === "scissors") {
        setResult("YOU WIN");
      } else {
        setResult("YOU LOSE");
      }
    } else {
      if (selectedElementByComputer === "paper") {
        setResult("YOU WIN");
      } else {
        setResult("YOU LOSE");
      }
    }
  }, [selectedElementByComputer])
  
  
  return (
    <div className="App">
      {hasElementSelected ? (
        <div className="painel-final">
          <Element classElement="element" type={selectedElement}/>
          {hasComputerSelected ? (
            <div className="final-result">
              <p>{ result }</p>
              <Element classElement="element" type={selectedElementByComputer}/>
            </div>
          ) : (
            <Element />
          )}
          
        </div>
      ) : (
        <div className="painel">
          <Element classElement="element" type="paper"/>
          <Element classElement="element down" type="rock"/>
          <Element classElement="element" type="scissors"/>
        </div>
      )}
    </div>
  );
}

export default App;
