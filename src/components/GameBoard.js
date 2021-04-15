import { useState } from "react";
import Square from "./Square";

const GameBoard = () => {
  //2 states - Current Player
  //Game State
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [gameState, setGameState] = useState([
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);

  const executeMove = (index) => {
    console.log(index);
    //Set the current mark
    let newGameState = gameState;
    if (newGameState[index].value === null) {
      newGameState[index].value = currentPlayer;
      setGameState(newGameState);
      //Change the current Player
      let nextPlayer = currentPlayer === "X" ? "o" : "X";
      setCurrentPlayer(nextPlayer);
    }
  };

  //Check Winning condition
  //If full draw
  return (
    <>
      <div className="col-md-12 col-12 text-center">
        <h2>Current Player : {currentPlayer} </h2>
      </div>
      <div className="bg-white col-md-6 offset-md-3 gameBoard shadow-sm row p-4">
        {gameState.map((square, key) => (
          <Square
            key={key}
            gameState={gameState}
            index={key}
            executor={executeMove}
          />
        ))}
      </div>
    </>
  );
};

export default GameBoard;
