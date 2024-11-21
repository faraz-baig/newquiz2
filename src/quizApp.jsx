import React, { useState } from "react";
import questions from "./data/questions.json";

export default function QuizApp() {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const onOptionSelected = (index) => {
    if (!isAnswered) {
      setSelectedOptionIndex(index);
      setIsAnswered(true);
      if (index === questions[currentQIndex]?.correctOptionIndex) {
        setScore(score + 1);
      }
    }
    
  };

  const nextQuestion = () => {
    if(isAnswered===false){
       alert("Please answer the question!")
    }else{
      setSelectedOptionIndex(null);
      setIsAnswered(false);
      setCurrentQIndex(currentQIndex + 1);
    }
  };

  const restart = () => {
    setCurrentQIndex(0);
    setScore(0);
    setSelectedOptionIndex(null);
    setIsAnswered(false);
  };

  if (currentQIndex === questions.length) {
    return (
      <div className="container my-5 grid justify-center">
        <h1 className="text-4xl text-center">TEKKEN Quiz Game</h1>
        <h3 className="text-center text-2xl">Quiz Finished!</h3>
        <h3 className="text-center text-3xl mt-4">Score: {score}/{questions.length}</h3>
        <button onClick={restart} className="bg-blue-400 mt-10">Restart</button>
      </div>
    );
  }

  return (
    <div className="container my-5 bg-orange-300 p-4 grid justify-center">
      <h1 className="text-4xl text-center">GUESS THE TEKKEN CHARACTERS</h1>
      <div className="card mb-5 text-center p-4 grid justify-center" key={questions[currentQIndex]?.id}>
        <div className="card-header grid justify-center">
          <h4 className="text-2xl">{questions[currentQIndex]?.statement}</h4>
          <img className="h-80 w-full mt-4 rounded-md" src={questions[currentQIndex]?.image} alt="quiz" />
        </div>
        <ul className="list-group list-group-flush grid grid-cols-2">
          {questions[currentQIndex]?.options.map((option, index) => (
            <li key={index} className="list-group-item">
              <button
                onClick={() => onOptionSelected(index)}
                className="border w-40 mt-2"
                style={{
                  backgroundColor:
                    selectedOptionIndex === index
                      ? index === questions[currentQIndex]?.correctOptionIndex
                        ? "green"
                        : "red"
                      : "blue",
                  color: "white",
                }}
                disabled={isAnswered} // Disable button after selection
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={nextQuestion} className="bg-blue-400 border border-black">Next Question</button>
    </div>
  );
}
