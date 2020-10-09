import React, { useState } from 'react';
import './App.css';
import Question from './components/question/Question';
import Caracter from './components/caracters/Caracters';
import Answers from './components/answers/Answers';


function App() {
  const [character, setCharacter] = useState([{id: 0 ,name: "Nothing", image: "noImage" }]);
  const [isSelected, setIsSelected] = useState(false);
  const [isGoodResponse, setIsGoodResponse] = useState(false);
  const [numberQuestion, setNumberQuestion] = useState(0);

  function getCharacter(character){
    setCharacter(character)
    setIsSelected(true)
  }

  function isGoodReponse(isGood){
    setIsGoodResponse(isGood)
  }

  function resetIsGoodReponse(){
    setIsGoodResponse(false)
  }

  function getNumberQuestion(){
    setNumberQuestion(numberQuestion + 1)
  }

  return (
    <div className="App">
      <Question character={character} isSelected={isSelected} isGoodResponse={isGoodResponse} resetIsGoodReponse={resetIsGoodReponse} numberQuestion={numberQuestion} ></Question>
      <Caracter getCharacter={getCharacter}></Caracter>
      <Answers character={character} isGoodReponse={isGoodReponse} getNumberQuestion={getNumberQuestion}></Answers>
    </div>
  );
}

export default App;
