import { useEffect, useState } from 'react';
import Element from '../components/Element';
import "../styles/global.css";

function App() {

  const [hasElementSelected, setHasElementSelected] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [hasComputerSelected, setHasComputerSelected] = useState(false);
  const [selectedElementByComputer, setSelectedElementByComputer] = useState("not-selected");
  const [result, setResult] = useState("The House is choosing...");
  const [hasAResult, setHasAResult] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.element');
    elements.forEach((element) => {
      element.addEventListener('click', () => {
        setSelectedElement(element.id);
        setHasElementSelected(true);
      })
    })
  }, [resetGame])

  useEffect  (() => {
    if(!hasComputerSelected && hasElementSelected) {
      setTimeout(() =>{
          const elementOptions = ["rock", "paper", "scissors"]
          const elementSorted = elementOptions[Math.round(Math.random() * (elementOptions.length - 1))]
          setSelectedElementByComputer(elementSorted);
          setHasComputerSelected(true);
      }, 3000)
    }
  }, [hasElementSelected]);

  useEffect(() => {
    if(hasComputerSelected && hasElementSelected) {
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
      setHasAResult(true);
    }
  }, [hasComputerSelected])

  function resetGame() {
    setHasElementSelected(false);
    setHasComputerSelected(false);
    setSelectedElement(null);
    setSelectedElementByComputer("not-selected");
    setResult("The House is choosing...");
    setHasAResult(false);
  }
  
  return (
    <div className="App">
      {hasElementSelected ? (
        <div className="painel-final">
          <div className="element-chosen">
            <p>YOU PICKED</p>
            <Element classElement="element" type={selectedElement}/>
          </div>
          <div className="final-result">
            <p className="result-text">{ result }</p>
            { hasAResult && (
               <button className="reset-button" onClick={resetGame}>Play Again</button>
            )}
          </div> 
          <div className="element-chosen">
            <p>THE HOUSE PICKED</p>
            <Element classElement="element" type={selectedElementByComputer}/>
          </div>
        </div>
      ) : (
        <div className="painel">
          <Element classElement="element" type="paper"/>
          <Element classElement="element" type="scissors"/>
          <Element classElement="element down" type="rock"/>
        </div>
      )}
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Marcos Gaiotto</a>.
      </div>
    </div>
  );
}

export default App;
